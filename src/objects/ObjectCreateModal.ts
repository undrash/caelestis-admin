

import { PropertyDefinitionDatatypes } from "../property-definitions/PropertyDefinitionDatatypes";
import { ObjectNotifications } from "./ObjectNotifications";
import { ViewComponent } from "../core/ViewComponent";
import { View } from "../core/View";

// CSS
import "../_style/style-sheets/objects-create-modal.scss";

// HTML
const template = require( "../_view-templates/objects-create-modal.html" );






export class ObjectCreateModal extends ViewComponent {

    private objectTypeSelect: HTMLSelectElement;
    private propertiesContainer: HTMLElement;
    private cancelBtn: HTMLButtonElement;
    private createBtn: HTMLButtonElement;


    private objectTypes: any;


    constructor(view: View, container: HTMLElement) {
        super( view, container );

        this.objectTypes = {};


        this.container.innerHTML = template;

        this.objectTypeSelect       = document.getElementById( "objects-create-object-type-select" ) as HTMLSelectElement;
        this.propertiesContainer    = document.getElementById( "objects-create-properties-container" );
        this.cancelBtn              = document.getElementById( "objects-create-cancel-btn" ) as HTMLButtonElement;
        this.createBtn              = document.getElementById( "objects-create-create-btn" ) as HTMLButtonElement;


        this.objectTypeSelectChangeListener = this.objectTypeSelectChangeListener.bind( this );
        this.cancelBtnListener              = this.cancelBtnListener.bind( this );
        this.createBtnListener              = this.createBtnListener.bind( this );


        this.enterScene();
    }



    private registerEventListeners(): void {

        this.objectTypeSelect.addEventListener( "change", this.objectTypeSelectChangeListener );
        this.cancelBtn.addEventListener( "click", this.cancelBtnListener );
        this.createBtn.addEventListener( "click", this.createBtnListener );


    }



    private unregisterEventListeners(): void {

        this.objectTypeSelect.removeEventListener( "change", this.objectTypeSelectChangeListener );
        this.cancelBtn.removeEventListener( "click", this.cancelBtnListener );
        this.createBtn.removeEventListener( "click", this.createBtnListener );

    }



    private objectTypeSelectChangeListener(e: any): void {

        this.propertiesContainer.innerHTML = "";
        this.populatePropertyValues();

    }



    private cancelBtnListener(e: any): void {
        this.sendSignal( ObjectNotifications.OBJECTS_CREATE_HIDE );
    }



    private createBtnListener(e: any): void {

        const objectTypeId = this.objectTypeSelect.options[ this.objectTypeSelect.selectedIndex ].value;
        const objectType = this.objectTypes[ objectTypeId ];




        const propertyInputs = document.getElementsByClassName( "property-value" );

        let properties = [];

        for ( let i = 0; i < propertyInputs.length; i++ ) {

            const input = propertyInputs[i];

            let propVal: any = { propertyDef: input.id, value: null };

            if ( input.classList.contains( "property-value-date" ) ) {

                if ( ! ( input as HTMLInputElement ).value ) {
                    propVal.value = null;
                }

            } else if ( input.classList.contains( "property-value-checkbox" ) ) {

                propVal.value = ( input as HTMLInputElement ).checked;

            } else if ( input.classList.contains( "property-value-select" ) ) {

                const option = ( input as HTMLSelectElement ).options[ ( input as HTMLSelectElement ).selectedIndex ];

                if ( option ) {
                    propVal.value = option.value;
                } else {
                    propVal.value = null;
                }



            } else {

                propVal.value = ( input as HTMLInputElement ).value;

            }

            properties.push( propVal );

        }


        this.connection.createObject(
            {
                type: objectTypeId,
                properties
            },
            (response: any) => {
                const { object } = response;

                console.info( "New object created!" );
                console.log( object );

                this.sendSignal( ObjectNotifications.OBJECTS_CREATE_OBJECT_CREATED, object );
            },
            (message: string) => {
                console.warn( message );
            }

        )



    }



    public enterScene(): void {
        this.registerEventListeners();

    }



    public exitScene(exitType: string): void {
        super.exitScene( exitType );
        this.unregisterEventListeners();

        this.view.componentExited( this.name );
    }



    public populateObjectTypes(): void {


        this.objectTypeSelect.innerHTML = "";
        this.objectTypes = {};

        this.connection.getObjectTypes(
            (response: any) => {
                const { objectTypes } = response;

                for ( let i = 0; i < objectTypes.length; i++ ) {

                    let otOption = document.createElement( "option" );
                    otOption.value = objectTypes[i]._id;
                    otOption.text = objectTypes[i].name;

                    this.objectTypeSelect.appendChild( otOption );


                    this.objectTypes[ objectTypes[i]._id ] = objectTypes[i];

                }


                this.populatePropertyValues();


            },
            (message: string) => {
                console.warn( message );
            }
        );

    }



    private populatePropertyValues(): void {

        this.propertiesContainer.innerHTML = "";

        const selectedObjectTypeId = this.objectTypeSelect.options[ this.objectTypeSelect.selectedIndex ].value;


        const selectedObjectType = this.objectTypes[ selectedObjectTypeId ];

        for ( let prop of selectedObjectType.properties ) {

            console.log( prop );

            this.connection.getPropertyDefinitionById(
                prop._id,
                (response: any) => {

                    const { propertyDef } = response;

                    this.createPropertyInputFromPropDef( propertyDef );

                },
                (message: string) => {
                    console.warn( message );
                }
            )

        }

    }



    private createPropertyInputFromPropDef(prop: any) {

        console.log( prop );

        let propValContainer = document.createElement( "div" );
        propValContainer.className = "property-value-container";

        let propValTitle = document.createElement( "span" );
        propValTitle.className = "property-value-name";
        propValTitle.innerHTML = prop.name;

        let propValInput: any;


        switch ( prop.dataType ) {

            case PropertyDefinitionDatatypes.TEXT :

                propValInput = document.createElement( "input" );
                propValInput.type = "text";
                propValInput.className = "property-value";

                break;

            case PropertyDefinitionDatatypes.NUMBER :

                propValInput = document.createElement( "input" );
                propValInput.type = "number";
                propValInput.className = "property-value";

                break;

            case PropertyDefinitionDatatypes.LOOKUP :

                propValInput = document.createElement( "select" );
                propValInput.className = "property-value property-value-select";

                let option = document.createElement( "option" );
                option.value = "";
                option.text = "Link an object";
                propValInput.add( option );

                this.connection.getObjectByType(
                    prop.objectType,
                    (response: any) => {
                        const { objects } = response;

                        for ( let object of objects ) {

                            console.log( object );

                            let option = document.createElement( "option" );
                            option.value = object._id;

                            const titleProp = object.properties.filter( (p: any) => p.propertyDef._id === object.type.nameProperty )[0];

                            option.text = titleProp.value;

                            propValInput.add( option );
                        }
                    },
                    (message: string) => {
                        console.warn( message );
                    }
                );

                break;

            case PropertyDefinitionDatatypes.DATE :

                propValInput = document.createElement( "input" );
                propValInput.type = "date";
                propValInput.className = "property-value property-value-date";

                break;

            case PropertyDefinitionDatatypes.BOOLEAN :

                propValInput = document.createElement( "input" );
                propValInput.type = "checkbox";
                propValInput.className = "property-value property-value-checkbox";

                break;


            default :
                break;

        }

        propValInput.id = prop._id;

        propValContainer.appendChild( propValTitle );
        propValContainer.appendChild( propValInput );


        this.propertiesContainer.appendChild( propValContainer );

    }


}
