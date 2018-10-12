


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
    private modalOTNameInput: HTMLInputElement;
    private modalOTPropertiesContainer: HTMLElement;
    private modalOTAddPropertiesBtn: HTMLButtonElement;
    private modalOTCancelBtn: HTMLButtonElement;
    private modalOTOKBtn: HTMLButtonElement;



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


        this.modalOTNameInput           = document.getElementById( "ot-modal-input-name" ) as HTMLInputElement;
        this.modalOTPropertiesContainer = document.getElementById( "ot-modal-properties-container" );
        this.modalOTAddPropertiesBtn    = document.getElementById( "ot-modal-add-property-btn" ) as HTMLButtonElement;
        this.modalOTCancelBtn           = document.getElementById( "ot-modal-ok-btn" ) as HTMLButtonElement;
        this.modalOTOKBtn               = document.getElementById( "ot-modal-cancel-btn" ) as HTMLButtonElement;


        this.modalBackgroundListener    = this.modalBackgroundListener.bind( this );
        this.addBtnListener             = this.addBtnListener.bind( this );
        this.cancelBtnListener          = this.cancelBtnListener.bind( this );


        this.enterScene();
    }



    private registerEventListeners(): void {

        this.addBtn.addEventListener( "click", this.addBtnListener );
        this.modalBackground.addEventListener( "click", this.modalBackgroundListener );
        this.modalOTCancelBtn.addEventListener( "click", this.cancelBtnListener );


    }



    private unregisterEventListeners(): void {

        this.addBtn.removeEventListener( "click", this.addBtnListener );
        this.modalBackground.removeEventListener( "click", this.modalBackgroundListener );
        this.modalOTCancelBtn.removeEventListener( "click", this.cancelBtnListener );

    }



    private addBtnListener(e: any): void {
        this.modalBackground.style.display = "block";
    }



    private modalBackgroundListener(e: any): void {
        if ( e.target.id === this.modalBackground.id ) this.hideNewPropDefModal();
    }


    private cancelBtnListener(e: any): void {
        this.hideNewPropDefModal();
    }


    private hideNewPropDefModal(): void {
        this.modalBackground.style.display = "none";
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





}