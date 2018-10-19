

import { SystemConstants } from "../core/SystemConstants";
import { INotification } from "../core/INotification";
import { ViewComponent } from "../core/ViewComponent";
import { ObjectTypes } from "./ObjectTypes";
import { ISignal } from "../core/ISignal";
import { View } from "../core/View";






export class ObjectTypesView extends View {
    private objectTypes: ViewComponent;
    private objectTypesContainer: HTMLElement;


    constructor() {
        super( "ObjectTypesView" );

        this.container = document.createElement( "div" );
        this.container.id = "object-types-view-container";

        document.getElementById( SystemConstants.MAIN_CONTAINER ).appendChild( this.container );

        this.objectTypesContainer = document.createElement( "div" );
        this.container.appendChild( this.objectTypesContainer );

        this.objectTypes = new ObjectTypes( this, this.objectTypesContainer );
    }



    public listNotificationInterests(): string[] {
        let notifications = super.listNotificationInterests();

        return notifications;
    }



    public enterScene(): void {


    }



    public exitScene(exitType: string, callback: Function): void {
        this.exitCallback = callback;

        this.objectTypes.exitScene( exitType );

    }



    public handleNotification(notification: INotification): void {

        switch ( notification.name ) {



            default :
                break;
        }

    }



    public handleSignal(signal: ISignal) {
        console.log( "Signal received in " + this.NAME + ": " + signal.name );

        switch ( signal.name ) {

            default:
                break;
        }

    }
}
