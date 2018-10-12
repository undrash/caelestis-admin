


import { ViewComponent } from "../core/ViewComponent";
import { View } from "../core/View";

// CSS
import "../_style/style-sheets/object-types.scss";

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
    private modalNewPDDataTypeSelect: HTMLSelectElement;
    private modalNewPDObjectTypeSelect: HTMLSelectElement;
    private modalNewPDCancelBtn: HTMLButtonElement;
    private modalNewPDOKBtn: HTMLButtonElement;




    constructor(view: View, container: HTMLElement) {
        super( view, container );

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


    }



    private unregisterEventListeners(): void {

        this.addBtn.removeEventListener( "click", this.modalOTaddBtnListener );
        this.modalBackground.removeEventListener( "click", this.modalBackgroundListener );
        this.modalOTCancelBtn.removeEventListener( "click", this.modalOTCancelBtnListener );
        this.modalOTEditPropertiesBtn.removeEventListener( "click", this.modalOTEditPropertiesListener );
        this.modalEditPDCancelBtn.removeEventListener( "click", this.modalEditPDCancelBtnListener );
        this.modalEditPDNewPropBtn.removeEventListener( "click", this.modalEditPDNewPropBtnListener );
        this.modalNewPDCancelBtn.removeEventListener( "click", this.modalNewPDCancelBtnListener );

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

                for ( let i = 0; i < properties.length; i++ ) {

                    // TODO


                }


            },
            (message: string) => {
                console.warn( message );
            }
        )


    }





}