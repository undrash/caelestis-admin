

import { PropertyDefinitionDatatypes } from "./PropertyDefinitionDatatypes";
import { IPropertyDefinition } from "../connection/models/IPropertyDefinition";
import { PropertyDefinition } from "../connection/models/PropertyDefinition";
import { ViewComponent } from "../core/ViewComponent";
import { View } from "../core/View";

// CSS
import "../_style/style-sheets/property-definitions.scss";
import "../_style/style-sheets/listing-menu-dropdown.scss";


// HTML
const modalTemplate = require("../_view-templates/property-definitions-add-modal.html");
const template = require("../_view-templates/property-definitions.html");
const dropDownMenuTemplate = require("../_view-templates/listing-menu-dropdown.html");






export class PropertyDefinitions extends ViewComponent {

    private propertyDefContainer: HTMLElement;
    private addBtn: HTMLButtonElement;

    private modalBackground: HTMLElement;
    private modalContainer: HTMLElement;
    private modalCancelBtn: HTMLButtonElement;
    private modalOKBtn: HTMLButtonElement;
    private modalPropName: HTMLInputElement;
    private modalPropDataType: HTMLSelectElement;
    private modalPropObjectType: HTMLSelectElement;
    private modalObjectTypeContainer: HTMLElement;

    private dropdownMenuBackground: HTMLElement;
    private dropdownMenu: HTMLElement;
    private dropdownMenuEdit: HTMLElement;
    private dropdownMenuDelete: HTMLElement;

    private activePropertyDef: string;

    private editPropertyDefNameInput: HTMLInputElement;

    constructor(view: View, container: HTMLElement) {
        super( view, container );


        this.container.innerHTML = template;


        this.propertyDefContainer       = document.getElementById( "property-definitions-container" );
        this.addBtn                     = document.getElementById( "property-definitions-add-btn" ) as HTMLButtonElement;

        this.modalBackground            = document.createElement( "div" );
        this.modalBackground.id         = "property-definitions-modal-background";
        this.modalBackground.innerHTML  = modalTemplate;

        this.container.appendChild( this.modalBackground );

        this.modalContainer             = document.getElementById("property-definitions-modal-container") as HTMLElement;
        this.modalPropName              = document.getElementById("pd-modal-input-name") as HTMLInputElement;
        this.modalPropDataType          = document.getElementById("pd-modal-select-data-type") as HTMLSelectElement;
        this.modalPropObjectType        = document.getElementById("pd-modal-select-object-type" ) as HTMLSelectElement;

        this.modalObjectTypeContainer   = document.getElementById("pd-modal-object-type-container" );

        this.modalCancelBtn             = document.getElementById( "pd-modal-add-cancel" ) as HTMLButtonElement;
        this.modalOKBtn                 = document.getElementById( "pd-modal-add-ok" ) as HTMLButtonElement;


        this.container.insertAdjacentHTML( "beforeend", dropDownMenuTemplate );

        this.dropdownMenuBackground     = document.getElementById( "listing-menu-dropdown-background" );
        this.dropdownMenu               = document.getElementById( "listing-menu-dropdown" );
        this.dropdownMenuEdit           = document.getElementById( "listing-menu-dropdown-item-edit" );
        this.dropdownMenuDelete         = document.getElementById( "listing-menu-dropdown-item-delete" );

        this.editPropertyDefNameInput   = document.createElement( "input" );
        this.editPropertyDefNameInput.className = "property-definition-item-edit-name-input";


        this.modalBackgroundListener                    = this.modalBackgroundListener.bind( this );
        this.cancelBtnListener                          = this.cancelBtnListener.bind( this );
        this.addBtnListener                             = this.addBtnListener.bind( this );
        this.okBtnListener                              = this.okBtnListener.bind( this );
        this.dataTypeChangeListener                     = this.dataTypeChangeListener.bind( this );
        this.propertyDefItemMousedownListener           = this.propertyDefItemMousedownListener.bind( this );
        this.dropdownMenuBackgroundListener             = this.dropdownMenuBackgroundListener.bind( this );
        this.dropDownMenuEditListener                   = this.dropDownMenuEditListener.bind( this );
        this.dropDownMenuDeleteListener                 = this.dropDownMenuDeleteListener.bind( this );
        this.editPropertyDefNameInputBlurListener       = this.editPropertyDefNameInputBlurListener.bind( this );
        this.editPropertyDefNameInputKeypressListener   = this.editPropertyDefNameInputKeypressListener.bind( this );


        this.enterScene();
    }



    private registerEventListeners(): void {

        this.addBtn.addEventListener( "click", this.addBtnListener );
        this.modalOKBtn.addEventListener( "click", this.okBtnListener );
        this.modalCancelBtn.addEventListener( "click", this.cancelBtnListener );
        this.modalBackground.addEventListener( "click", this.modalBackgroundListener );
        this.modalPropDataType.addEventListener( "change", this.dataTypeChangeListener );
        this.dropdownMenuBackground.addEventListener( "click", this.dropdownMenuBackgroundListener );
        this.dropdownMenuEdit.addEventListener( "click", this.dropDownMenuEditListener );
        this.dropdownMenuDelete.addEventListener( "click", this.dropDownMenuDeleteListener );
        this.editPropertyDefNameInput.addEventListener( "blur", this.editPropertyDefNameInputBlurListener );
        this.editPropertyDefNameInput.addEventListener( "keypress", this.editPropertyDefNameInputKeypressListener );



    }



    private unregisterEventListeners(): void {

        this.addBtn.removeEventListener( "click", this.addBtnListener );
        this.modalOKBtn.removeEventListener( "click", this.okBtnListener );
        this.modalCancelBtn.removeEventListener( "click", this.cancelBtnListener );
        this.modalBackground.removeEventListener( "click", this.modalBackgroundListener );
        this.modalPropDataType.removeEventListener( "change", this.dataTypeChangeListener );
        this.dropdownMenuBackground.removeEventListener( "click", this.dropdownMenuBackgroundListener );
        this.dropdownMenuEdit.removeEventListener( "click", this.dropDownMenuEditListener );
        this.dropdownMenuDelete.removeEventListener( "click", this.dropDownMenuDeleteListener );
        this.editPropertyDefNameInput.removeEventListener( "blur", this.editPropertyDefNameInputBlurListener );
        this.editPropertyDefNameInput.removeEventListener( "keypress", this.editPropertyDefNameInputKeypressListener );

    }

    //<editor-fold desc="Event Listeners">

    private addBtnListener(e: any): void {
        this.modalBackground.style.display = "block";
        this.modalContainer.style.display = "block";
    }



    private cancelBtnListener(e: any): void {
        this.hideNewPropDefModal();
    }



    private modalBackgroundListener(e: any): void {
        if ( e.target.id === this.modalBackground.id ) this.hideNewPropDefModal();
    }



    private propertyDefItemMousedownListener(e: any): void {
        if ( e.which === 3 ) {
            this.dropdownMenu.style.top = e.pageY + "px";
            this.dropdownMenu.style.left = e.pageX + "px";

            this.activePropertyDef = e.target.id;
            this.dropdownMenuBackground.style.display = "block";
        }
    }



    private hideNewPropDefModal(): void {
        this.modalPropName.value = "";
        this.modalPropDataType.value = "1";
        this.modalBackground.style.display = "none";
        this.modalObjectTypeContainer.style.display = "none";
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

                propDefItem.addEventListener( "mousedown", this.propertyDefItemMousedownListener );


                if ( propertyDef.dataType === PropertyDefinitionDatatypes.LOOKUP ) {

                    this.connection.getObjectTypeById(
                        propertyDef.objectType,
                        (response: any) => {
                            const { objectType } = response;

                            propDefType.innerHTML += " - " + objectType.name;
                        },
                        (message: string) => {
                            console.warn( message );
                        }
                    );

                }


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
            });

        } else {
            this.modalObjectTypeContainer.style.display = "none";
        }

    }



    private dropdownMenuBackgroundListener(e: any): void {
        if ( e.target.id == this.dropdownMenuBackground.id ) this.dropdownMenuBackground.style.display = "none";
    }



    private dropDownMenuEditListener(e: any): void {
        console.info( "edit clicked" );
        this.dropdownMenuBackground.style.display = "none";
        const listItem = document.getElementById( this.activePropertyDef );

        const title: HTMLElement = listItem.getElementsByClassName( "property-definition-item-title" )[0] as HTMLElement;
        title.style.display = "none";

        listItem.appendChild( this.editPropertyDefNameInput );
        this.editPropertyDefNameInput.value = title.innerHTML;
        this.editPropertyDefNameInput.focus();

    }



    private dropDownMenuDeleteListener(e: any): void {
        console.info( "delete clicked" );
        this.dropdownMenuBackground.style.display = "none";

        const deletePropDefId = this.activePropertyDef;
        this.activePropertyDef = null;

        this.connection.deletePropertyDefinition(
            deletePropDefId,
            (response: any) => {

                const { message } = response;
                console.info( message );

                const listItem = document.getElementById( deletePropDefId );

                listItem.parentElement.removeChild( listItem );

            },
            (message: string) => {
                console.error( message );
            }
        )
    }



    private editPropertyDefNameInputBlurListener(e: any): void {

        const title: HTMLElement = this.editPropertyDefNameInput.parentElement.getElementsByClassName( "property-definition-item-title" )[0] as HTMLElement;
        title.style.display = "block";

        this.editPropertyDefNameInput.value = "";
        this.editPropertyDefNameInput.parentElement.removeChild( this.editPropertyDefNameInput );

    }



    private editPropertyDefNameInputKeypressListener(e: any): void {

        if ( e.which !== 13 ) return;

        const title: HTMLElement = this.editPropertyDefNameInput.parentElement.getElementsByClassName( "property-definition-item-title" )[0] as HTMLElement;
        const id: string = this.editPropertyDefNameInput.parentElement.id;
        const name: string = this.editPropertyDefNameInput.value;

        this.editPropertyDefNameInput.blur();

        this.connection.editPropertyDefinitionName(
            {
                id,
                name
            },
            (response: any) => {
                title.innerHTML = name;
            },
            (message: string) => {
                console.warn( message );
            }
        )

    }

    //</editor-fold desc="Event Listeners">

    public enterScene(): void {
        this.registerEventListeners();

        this.populate();

    }



    public exitScene(exitType: string): void {
        super.exitScene( exitType );
        this.unregisterEventListeners();

        console.info( "exit being called in property definitions" );

        this.view.componentExited( this.name );
    }

    //<editor-fold desc="Custom Operations">

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

                    propDefItem.addEventListener( "mousedown", this.propertyDefItemMousedownListener );

                    if ( properties[i].dataType === PropertyDefinitionDatatypes.LOOKUP ) {

                        this.connection.getObjectTypeById(
                            properties[i].objectType,
                            (response: any) => {
                                const { objectType } = response;

                                propDefType.innerHTML += " - " + objectType.name;
                            },
                            (message: string) => {
                                console.warn( message );
                            }
                        );

                    }

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

    //</editor-fold desc="Custom Operations">
}