

import { ViewComponent } from "../core/ViewComponent";
import { View } from "../core/View";

// CSS
import "../_style/style-sheets/property-definitions.scss";
import {PropertyDefinitionDatatypes} from "./PropertyDefinitionDatatypes";
import {IPropertyDefinition} from "../connection/models/IPropertyDefinition";
import {PropertyDefinition} from "../connection/models/PropertyDefinition";

// HTML
const modalTemplate = require("../_view-templates/property-definitions-add-modal.html");
const template = require("../_view-templates/property-definitions.html" );





export class PropertyDefinitions extends ViewComponent {

    private propertyDefContainer: HTMLElement;
    private addBtn: HTMLButtonElement;
    private modalBackground: HTMLElement;
    private modalCancelBtn: HTMLButtonElement;
    private modalOKBtn: HTMLButtonElement;
    private modalPropName: HTMLInputElement;
    private modalPropDataType: HTMLSelectElement;
    private modalPropObjectType: HTMLSelectElement;
    private modalObjectTypeContainer: HTMLElement;


    constructor(view: View, container: HTMLElement) {
        super( view, container );

        console.info( "PropertyDefinitions view component initiated." );


        this.container.innerHTML = template;


        this.propertyDefContainer = document.getElementById( "property-definitions-container" );
        this.addBtn               = document.getElementById( "property-definitions-add-btn" ) as HTMLButtonElement;

        this.modalBackground            = document.createElement( "div" );
        this.modalBackground.id         = "property-definitions-modal-background";
        this.modalBackground.innerHTML  = modalTemplate;

        this.container.appendChild( this.modalBackground );

        this.modalPropName              = document.getElementById("pd-modal-input-name") as HTMLInputElement;
        this.modalPropDataType          = document.getElementById("pd-modal-select-data-type") as HTMLSelectElement;
        this.modalPropObjectType        = document.getElementById("pd-modal-select-object-type" ) as HTMLSelectElement;

        this.modalObjectTypeContainer   = document.getElementById("pd-modal-object-type-container" );

        this.modalCancelBtn             = document.getElementById( "pd-modal-add-cancel" ) as HTMLButtonElement;
        this.modalOKBtn                 = document.getElementById( "pd-modal-add-ok" ) as HTMLButtonElement;


        this.modalBackgroundListener    = this.modalBackgroundListener.bind( this );
        this.cancelBtnListener          = this.cancelBtnListener.bind( this );
        this.addBtnListener             = this.addBtnListener.bind( this );
        this.okBtnListener              = this.okBtnListener.bind( this );
        this.dataTypeChangeListener     = this.dataTypeChangeListener.bind( this );
        this.enterScene();
    }



    private registerEventListeners(): void {

        this.addBtn.addEventListener( "click", this.addBtnListener );
        this.modalOKBtn.addEventListener( "click", this.okBtnListener );
        this.modalCancelBtn.addEventListener( "click", this.cancelBtnListener );
        this.modalBackground.addEventListener( "click", this.modalBackgroundListener );
        this.modalPropDataType.addEventListener( "change", this.dataTypeChangeListener );


    }



    private unregisterEventListeners(): void {

        this.addBtn.removeEventListener( "click", this.addBtnListener );
        this.modalOKBtn.addEventListener( "click", this.okBtnListener );
        this.modalCancelBtn.removeEventListener( "click", this.cancelBtnListener );
        this.modalBackground.removeEventListener( "click", this.modalBackgroundListener );
        this.modalPropDataType.removeEventListener( "change", this.dataTypeChangeListener );

    }



    private addBtnListener(e: any): void {
        this.modalBackground.style.display = "block";
    }



    private cancelBtnListener(e: any): void {
        this.hideNewPropDefModal();
    }



    private modalBackgroundListener(e: any): void {
        if ( e.target.id === this.modalBackground.id ) this.hideNewPropDefModal();
    }



    private hideNewPropDefModal(): void {
        this.modalPropName.value = "";
        this.modalPropDataType.value = "1";
        this.modalBackground.style.display = "none";
    }



    private okBtnListener(e:any): void {
        const propDef = this.createPropertyDefinition();

        this.hideNewPropDefModal();

        const self = this;

        this.connection.createPropertyDefinition(
            propDef,
            (response: any) => {

                const { propertyDef } = response;

                let propDefItem = document.createElement( "div" );
                propDefItem.id = propertyDef._id;
                propDefItem.className = "property-definition-item";


                let propDefTitle = document.createElement( "p" );
                propDefTitle.className = "property-definition-item-title";
                propDefTitle.innerHTML = propertyDef.name;

                let propDefType = document.createElement( "p" );
                propDefType.className = "property-definition-item-type";
                propDefType.innerHTML = self.parseDataType( propertyDef.dataType );


                propDefItem.appendChild( propDefTitle );
                propDefItem.appendChild( propDefType );

                self.propertyDefContainer.appendChild( propDefItem );

            },
            (message: string) => {
                console.warn( message );
            }
        )
    }



    private dataTypeChangeListener(e:any): void {

        console.log( this.modalPropDataType.options[ this.modalPropDataType.selectedIndex ].value );

        const selectValue = parseInt( this.modalPropDataType.options[ this.modalPropDataType.selectedIndex ].value );

        if ( selectValue === PropertyDefinitionDatatypes.LOOKUP ) {
            this.modalObjectTypeContainer.style.display = "block";

            const self = this;

            this.connection.getObjectTypes( (response: any) => {

                const objectTypes = response.objectTypes;

                for ( let i = 0; i < objectTypes.length; i++ ) {

                    let option = document.createElement( "option" );
                    option.text = objectTypes[i].name;
                    option.value = objectTypes[i]._id;

                    self.modalPropObjectType.add( option );
                }


            }, (message: string) => {
                console.warn( message );
            })

        } else {
            this.modalObjectTypeContainer.style.display = "none";
        }

    }



    public enterScene(): void {
        this.registerEventListeners();

        this.populate();

    }



    public exitScene(exitType: string): void {
        this.unregisterEventListeners();

    }



    private populate(): void {

        this.connection.getPropertyDefinitions(
            (response: any) => {
                const { properties } = response;

                if ( properties.length ) this.propertyDefContainer.innerHTML = "";

                for ( let i = 0; i < properties.length; i++ ) {

                    let propDefItem = document.createElement( "div" );
                    propDefItem.id = properties[i]._id;
                    propDefItem.className = "property-definition-item";


                    let propDefTitle = document.createElement( "p" );
                    propDefTitle.className = "property-definition-item-title";
                    propDefTitle.innerHTML = properties[i].name;

                    let propDefType = document.createElement( "p" );
                    propDefType.className = "property-definition-item-type";
                    propDefType.innerHTML = this.parseDataType( properties[i].dataType );


                    propDefItem.appendChild( propDefTitle );
                    propDefItem.appendChild( propDefType );

                    this.propertyDefContainer.appendChild( propDefItem );
                }
            },
            (message: string) => {
                console.warn( message );
            }
        )

    }



    private createPropertyDefinition(): IPropertyDefinition {

        const name = this.modalPropName.value;
        const dataType = parseInt( this.modalPropDataType.options[ this.modalPropDataType.selectedIndex ].value );

        if ( dataType === PropertyDefinitionDatatypes.LOOKUP ) {

            return new PropertyDefinition(
                name,
                dataType,
                this.modalPropObjectType.options[ this.modalPropObjectType.selectedIndex ].value,
                []
            )
        } else {
            return new PropertyDefinition(
                name,
                dataType,
                null,
                []
            )
        }


    }


    private parseDataType( datatype: number): string {

        let val: string = "";

        switch ( datatype ) {

            case PropertyDefinitionDatatypes.BOOLEAN :
                val = "BOOLEAN";
                break;

            case PropertyDefinitionDatatypes.NUMBER :
                val = "NUMBER";
                break;

            case PropertyDefinitionDatatypes.DATE :
                val = "DATE";
                break;

            case PropertyDefinitionDatatypes.TEXT :
                val = "TEXT";
                break;

            case PropertyDefinitionDatatypes.LOOKUP :
                val = "LOOKUP";
                break;

            default :
                break;
        }

        return val;
    }
}