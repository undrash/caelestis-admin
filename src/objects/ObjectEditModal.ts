

import { PropertyDefinitionDatatypes } from "../property-definitions/PropertyDefinitionDatatypes";
import { ObjectNotifications } from "./ObjectNotifications";
import { ViewComponent } from "../core/ViewComponent";
import { View } from "../core/View";


// CSS
import "../_style/style-sheets/objects-edit-modal.scss";

// HTML
const template = require( "../_view-templates/objects-edit-modal.html" );






export class ObjectEditModal extends ViewComponent {

    private objectId: string;

    private propertiesContainer: HTMLElement;
    private cancelBtn: HTMLButtonElement;
    private createBtn: HTMLButtonElement;





    constructor(view: View, container: HTMLElement) {
        super( view, container );

        this.objectId               = null;

        this.container.innerHTML    = template;

        this.propertiesContainer    = document.getElementById( "objects-edit-properties-container" );
        this.cancelBtn              = document.getElementById( "objects-edit-cancel-btn" ) as HTMLButtonElement;
        this.createBtn              = document.getElementById( "objects-edit-create-btn" ) as HTMLButtonElement;


        this.cancelBtnListener              = this.cancelBtnListener.bind( this );
        this.createBtnListener              = this.createBtnListener.bind( this );

        this.enterScene();
    }


    private registerEventListeners(): void {

        this.cancelBtn.addEventListener( "click", this.cancelBtnListener );
        this.createBtn.addEventListener( "click", this.createBtnListener );


    }



    private unregisterEventListeners(): void {

        this.cancelBtn.removeEventListener( "click", this.cancelBtnListener );
        this.createBtn.removeEventListener( "click", this.createBtnListener );

    }



    private cancelBtnListener(e: any): void {
        this.sendSignal( ObjectNotifications.OBJECTS_EDIT_HIDE );
    }



    private createBtnListener(e: any): void {

    }



    public enterScene(): void {
        this.registerEventListeners();

    }



    public exitScene(exitType: string): void {
        super.exitScene( exitType );
        this.unregisterEventListeners();

        this.view.componentExited( this.name );
    }



    public loadObject(id: string): void {

    }

}
