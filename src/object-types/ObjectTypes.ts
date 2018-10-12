


import { ViewComponent } from "../core/ViewComponent";
import { View } from "../core/View";

// CSS
import "../_style/style-sheets/object-types.scss";
import {PropertyDefinitionDatatypes} from "../property-definitions/PropertyDefinitionDatatypes";
import {IPropertyDefinition} from "../connection/models/IPropertyDefinition";
import {PropertyDefinition} from "../connection/models/PropertyDefinition";

// HTML
const newOTModalTemplate = require("../_view-templates/object-types-new-object-type-modal.html");
const addPDModalTemplate = require("../_view-templates/object-types-add-properties-modal.html");
const newPDModalTemplate = require("../_view-templates/property-definitions-add-modal.html");
const template = require("../_view-templates/object-types.html" );

export class ObjectTypes extends ViewComponent {

    private objectTypesContainer: HTMLElement;
    private addBtn: HTMLButtonElement;
    private modalBackground: HTMLElement;

    private modalOT: HTMLElement;
    private modalOTNameInput: HTMLInputElement;
    private modalOTPropertiesContainer: HTMLElement;
    private modalOTEditPropertiesBtn: HTMLButtonElement;
    private modalOTCancelBtn: HTMLButtonElement;
    private modalOTOKBtn: HTMLButtonElement;


    private modalEditPD: HTMLElement;
    private modalEditPDPropertyContainer: HTMLElement;
    private modalEditPDNewPropBtn: HTMLButtonElement;
    private modalEditPDCancelBtn: HTMLButtonElement;
    private modalEditPDOKBtn: HTMLButtonElement;


    private modalNewPD: HTMLElement;
    private modalNewPDNameInput: HTMLInputElement;
    private modalNewPDObjectTypeContainer: HTMLElement;
    private modalNewPDDataTypeSelect: HTMLSelectElement;
    private modalNewPDObjectTypeSelect: HTMLSelectElement;
    private modalNewPDCancelBtn: HTMLButtonElement;
    private modalNewPDOKBtn: HTMLButtonElement;


    private availableProperties: any[];
    private selectedProperties: any[];



    constructor(view: View, container: HTMLElement) {
        super( view, container );

        this.availableProperties = [];
        this.selectedProperties = [];


        this.container.innerHTML = template;

        this.objectTypesContainer       = document.getElementById( "object-types-container" );
        this.addBtn                     = document.getElementById( "object-types-add-btn" ) as HTMLButtonElement;

        this.modalBackground            = document.createElement( "div" );
        this.modalBackground.id         = "object-types-modal-background";
        this.modalBackground.innerHTML  = newOTModalTemplate;

        this.modalBackground.insertAdjacentHTML( "beforeend", addPDModalTemplate );
        this.modalBackground.insertAdjacentHTML( "beforeend", newPDModalTemplate );


        this.container.appendChild( this.modalBackground );

        this.modalOT                    = document.getElementById( "object-types-modal-container" );
        this.modalOTNameInput           = document.getElementById( "ot-modal-input-name" ) as HTMLInputElement;
        this.modalOTPropertiesContainer = document.getElementById( "ot-modal-properties-container" );
        this.modalOTEditPropertiesBtn   = document.getElementById( "ot-modal-edit-property-btn" ) as HTMLButtonElement;
        this.modalOTCancelBtn           = document.getElementById( "ot-modal-cancel-btn" ) as HTMLButtonElement;
        this.modalOTOKBtn               = document.getElementById( "ot-modal-ok-btn" ) as HTMLButtonElement;


        this.modalEditPD                     = document.getElementById( "ot-add-properties-modal-container" );
        this.modalEditPDPropertyContainer    = document.getElementById( "ot-add-properties-modal-property-container" );
        this.modalEditPDNewPropBtn           = document.getElementById( "ot-add-properties-modal-new-property-btn" ) as HTMLButtonElement;
        this.modalEditPDCancelBtn            = document.getElementById( "ot-add-properties-cancel-btn" ) as HTMLButtonElement;
        this.modalEditPDOKBtn                = document.getElementById( "ot-add-properties-ok-btn" ) as HTMLButtonElement;


        this.modalNewPD                     = document.getElementById( "property-definitions-modal-container" );
        this.modalNewPDNameInput            = document.getElementById( "pd-modal-input-name" ) as HTMLInputElement;
        this.modalNewPDDataTypeSelect       = document.getElementById( "pd-modal-select-data-type" ) as HTMLSelectElement;
        this.modalNewPDObjectTypeContainer  = document.getElementById( "pd-modal-object-type-container" ) as HTMLInputElement;
        this.modalNewPDObjectTypeSelect     = document.getElementById( "pd-modal-select-object-type" ) as HTMLSelectElement;
        this.modalNewPDCancelBtn            = document.getElementById( "pd-modal-add-cancel" ) as HTMLButtonElement;
        this.modalNewPDOKBtn                = document.getElementById( "pd-modal-add-ok" ) as HTMLButtonElement;



        this.modalBackgroundListener            = this.modalBackgroundListener.bind( this );
        this.modalOTaddBtnListener              = this.modalOTaddBtnListener.bind( this );
        this.modalOTCancelBtnListener           = this.modalOTCancelBtnListener.bind( this );
        this.modalOTEditPropertiesListener      = this.modalOTEditPropertiesListener.bind( this );
        this.modalEditPDCancelBtnListener       = this.modalEditPDCancelBtnListener.bind( this );
        this.modalEditPDNewPropBtnListener      = this.modalEditPDNewPropBtnListener.bind( this );
        this.modalNewPDCancelBtnListener        = this.modalNewPDCancelBtnListener.bind( this );
        this.modalNewPDDataTypeChangeListener   = this.modalNewPDDataTypeChangeListener.bind( this );
        this.modalNewPDOKBtnListener            = this.modalNewPDOKBtnListener.bind( this );
        this.modalEditPDOKBtnListener           = this.modalEditPDOKBtnListener.bind( this );


        this.enterScene();
    }



    private registerEventListeners(): void {

        this.addBtn.addEventListener( "click", this.modalOTaddBtnListener );
        this.modalBackground.addEventListener( "click", this.modalBackgroundListener );
        this.modalOTCancelBtn.addEventListener( "click", this.modalOTCancelBtnListener );
        this.modalOTEditPropertiesBtn.addEventListener( "click", this.modalOTEditPropertiesListener );
        this.modalEditPDCancelBtn.addEventListener( "click", this.modalEditPDCancelBtnListener );
        this.modalEditPDNewPropBtn.addEventListener( "click", this.modalEditPDNewPropBtnListener );
        this.modalNewPDCancelBtn.addEventListener( "click", this.modalNewPDCancelBtnListener );
        this.modalNewPDDataTypeSelect.addEventListener( "change", this.modalNewPDDataTypeChangeListener );
        this.modalNewPDOKBtn.addEventListener( "click", this.modalNewPDOKBtnListener );
        this.modalEditPDOKBtn.addEventListener( "click", this.modalEditPDOKBtnListener );


    }



    private unregisterEventListeners(): void {

        this.addBtn.removeEventListener( "click", this.modalOTaddBtnListener );
        this.modalBackground.removeEventListener( "click", this.modalBackgroundListener );
        this.modalOTCancelBtn.removeEventListener( "click", this.modalOTCancelBtnListener );
        this.modalOTEditPropertiesBtn.removeEventListener( "click", this.modalOTEditPropertiesListener );
        this.modalEditPDCancelBtn.removeEventListener( "click", this.modalEditPDCancelBtnListener );
        this.modalEditPDNewPropBtn.removeEventListener( "click", this.modalEditPDNewPropBtnListener );
        this.modalNewPDCancelBtn.removeEventListener( "click", this.modalNewPDCancelBtnListener );
        this.modalNewPDDataTypeSelect.removeEventListener( "change", this.modalNewPDDataTypeChangeListener );
        this.modalNewPDOKBtn.removeEventListener( "click", this.modalNewPDOKBtnListener );
        this.modalEditPDOKBtn.removeEventListener( "click", this.modalEditPDOKBtnListener );

    }



    private modalOTaddBtnListener(e: any): void {
        this.modalBackground.style.display = "block";
    }



    private modalBackgroundListener(e: any): void {
        if ( e.target.id === this.modalBackground.id ) this.hideModals();
    }


    private modalOTCancelBtnListener(e: any): void {

        console.info( "cancel btn clicked" );
        this.hideModals();
    }



    private modalOTEditPropertiesListener(e: any): void {
        this.populateEditPropertiesModal();
        this.modalOT.style.display = "none";
        this.modalEditPD.style.display = "block";
    }


    private modalEditPDCancelBtnListener(e: any): void {
        this.modalEditPD.style.display = "none";
        this.modalOT.style.display = "block";
    }


    private modalEditPDNewPropBtnListener(e: any): void {
        this.modalEditPD.style.display = "none";
        this.modalNewPD.style.display = "block";
    }


    private modalNewPDCancelBtnListener(e: any): void {
        this.modalNewPD.style.display = "none";
        this.modalEditPD.style.display = "block";
    }


    private modalNewPDDataTypeChangeListener(e: any): void {

        const selectValue = parseInt( this.modalNewPDDataTypeSelect.options[ this.modalNewPDDataTypeSelect.selectedIndex ].value );

        if ( selectValue === PropertyDefinitionDatatypes.LOOKUP ) {

            this.modalNewPDObjectTypeContainer.style.display = "block";

            const self = this;

            this.connection.getObjectTypes( (response: any) => {

                const objectTypes = response.objectTypes;

                for ( let i = 0; i < objectTypes.length; i++ ) {

                    let option = document.createElement( "option" );
                    option.text = objectTypes[i].name;
                    option.value = objectTypes[i]._id;

                    self.modalNewPDObjectTypeSelect.add( option );
                }


            }, (message: string) => {
                console.warn( message );
            });

        } else {
            this.modalNewPDObjectTypeContainer.style.display = "none";
        }

    }


    private modalNewPDOKBtnListener(e: any): void {
        const propDef = this.createPropertyDefinition();

        this.modalNewPD.style.display = "none";
        this.modalNewPDDataTypeSelect.value = "1";
        this.modalNewPDObjectTypeContainer.style.display = "none";
        this.modalEditPD.style.display = "block";


        this.connection.createPropertyDefinition(
            propDef,
            (response: any) => {

                const { propertyDef } = response;

                this.availableProperties.push( propertyDef );

                let propDefItem = document.createElement( "li" );
                propDefItem.id = propertyDef._id;
                propDefItem.className = "ot-add-properties-property";

                let required = document.createElement( "input");
                required.type = "checkbox";
                required.id = propertyDef._id + "-checkbox";
                required.className = "ot-add-properties-modal-property-required-checkbox";

                let propDefName = document.createElement( "span" );
                propDefName.className = "ot-add-properties-modal-property-name";
                propDefName.innerHTML = propertyDef.name;

                let propDefDataType = document.createElement( "span" );
                propDefDataType.className = "ot-add-properties-modal-property-data-type";
                propDefDataType.innerHTML = this.parseDataType( propertyDef.dataType );

                propDefItem.appendChild( required );
                propDefItem.appendChild( propDefName );
                propDefItem.appendChild( propDefDataType );

                this.modalEditPDPropertyContainer.appendChild( propDefItem );


            },
            (message: string) => {
                console.warn( message );
            }


        )


    }



    private modalEditPDOKBtnListener(e: any): void {




        const propDefElements = this.modalEditPDPropertyContainer.children;

        for ( let i = 0; i < propDefElements.length; i++ ) {
            let checkbox = document.getElementById( propDefElements[i].id + "-checkbox" ) as HTMLInputElement;

            let result = this.availableProperties.filter( prop => prop._id === propDefElements[i].id );

            if ( result.length > 1 ) console.warn( "Warning, multiple properties with the same id found in the properties collection." );

            if ( ! result.length ){
                console.warn( "Selected property not found in the properties collection." );
                return;
            }

            let prop = result[0];


            if ( checkbox.checked ) {

                if ( this.selectedProperties.filter( p => p._id === prop._id ).length < 1 ) {
                    this.selectedProperties.push( prop );
                }

            } else {

                if ( this.selectedProperties.filter( p => p._id === prop._id ).length > 0 ) {

                    this.selectedProperties = this.selectedProperties.filter( p => p._id !== prop._id );

                }
            }
        }


        this.modalOTPropertiesContainer.innerHTML = "";

        for ( let i = 0; i < this.selectedProperties.length; i++ ) {

            let property = this.selectedProperties[i];

            let propDefItem = document.createElement( "li" );
            propDefItem.id = property._id;
            propDefItem.className = "ot-modal-property";

            let propDefName = document.createElement( "span" );
            propDefName.className = "ot-modal-property-name";
            propDefName.innerHTML = property.name;

            let propDefDataType = document.createElement( "span" );
            propDefDataType.className = "ot-modal-property-data-type";
            propDefDataType.innerHTML = this.parseDataType( property.dataType );


            let propDefRequiredCheckbox = document.createElement( "input" );
            propDefRequiredCheckbox.type = "checkbox";
            propDefRequiredCheckbox.className = "ot-modal-property-required-checkbox";



            propDefItem.appendChild( propDefName );
            propDefItem.appendChild( propDefRequiredCheckbox );
            propDefItem.appendChild( propDefDataType );

            this.modalOTPropertiesContainer.appendChild( propDefItem );

        }


        this.modalEditPD.style.display = "none";
        this.modalOT.style.display = "block";


    }



    private createPropertyDefinition(): IPropertyDefinition {

        const name = this.modalNewPDNameInput.value;
        const dataType = parseInt( this.modalNewPDDataTypeSelect.options[ this.modalNewPDDataTypeSelect.selectedIndex ].value );

        if ( dataType === PropertyDefinitionDatatypes.LOOKUP ) {

            return new PropertyDefinition(
                name,
                dataType,
                this.modalNewPDObjectTypeSelect.options[ this.modalNewPDObjectTypeSelect.selectedIndex ].value,
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




    private hideModals(): void {
        this.modalBackground.style.display  = "none";
        this.modalEditPD.style.display      = "none";
        this.modalNewPD.style.display       = "none";
        this.modalOT.style.display          = "block";
    }


    public enterScene(): void {
        this.registerEventListeners();
        this.populate();
    }



    public exitScene(exitType: string): void {
        super.exitScene( exitType );
        this.unregisterEventListeners();

        this.view.componentExited( this.name );
    }



    private populate(): void {

        this.connection.getObjectTypes(
            (response: any) => {

                const { objectTypes } = response;

                if ( objectTypes.length ) this.objectTypesContainer.innerHTML = "";

                for ( let i = 0; i < objectTypes.length; i++ ) {

                    let otItem = document.createElement( "div" );
                    otItem.id = objectTypes[i]._id;
                    otItem.className = "object-type-item";


                    let propDefTitle = document.createElement( "p" );
                    propDefTitle.className = "object-type-item-title";
                    propDefTitle.innerHTML = objectTypes[i].name;

                    let propDefType = document.createElement( "p" );
                    propDefType.className = "object-type-item-properties";
                    propDefType.innerHTML = objectTypes[i].properties.length;


                    otItem.appendChild( propDefTitle );
                    otItem.appendChild( propDefType );

                    this.objectTypesContainer.appendChild( otItem );

                }

            },
            (message: string) => {
                console.warn( message );
            }
        )


    }



    private populateEditPropertiesModal(): void {

        this.connection.getPropertyDefinitions(
            (response: any) => {
                const { properties } = response;

                this.availableProperties = properties;

                for ( let i = 0; i < properties.length; i++ ) {

                    let property = document.createElement( "li" );
                    property.id = properties[i]._id;
                    property.className = "ot-add-properties-property";

                    let checkbox = document.createElement( "input" );
                    checkbox.type = "checkbox";
                    checkbox.id = properties[i]._id + "-checkbox";
                    checkbox.className = "ot-add-properties-modal-property-required-checkbox";

                    let name = document.createElement( "span" );
                    name.id = properties[i]._id + "-name";
                    name.className = "ot-add-properties-modal-property-name";
                    name.innerHTML = properties[i].name;

                    let dataType = document.createElement( "span" );
                    dataType.id = properties[i]._id + "-data-type";
                    dataType.className = "ot-add-properties-modal-property-data-type";
                    dataType.innerHTML = this.parseDataType( properties[i].dataType );

                    property.appendChild( checkbox );
                    property.appendChild( name );
                    property.appendChild( dataType );

                    this.modalEditPDPropertyContainer.appendChild( property );

                }


            },
            (message: string) => {
                console.warn( message );
            }
        )


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