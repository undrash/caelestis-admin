

import {View} from "../core/View";
import {INotification} from "../core/INotification";
import {ISignal} from "../core/ISignal";
import {ViewComponent} from "../core/ViewComponent";
import {SystemConstants} from "../core/SystemConstants";
import {Objects} from "./Objects";






export class ObjectsView extends View {
    private objects: ViewComponent;
    private objectsContainer: HTMLElement;


    constructor() {
        super( "ObjectsView" );

        this.container = document.createElement( "div" );
        this.container.id = "objects-view-container";

        document.getElementById( SystemConstants.MAIN_CONTAINER ).appendChild( this.container );

        this.objectsContainer = document.createElement( "div" );
        this.container.appendChild( this.objectsContainer );

        this.objects = new Objects( this, this.objectsContainer );

    }



    public enterScene(): void {


    }



    public exitScene(exitType: string, callback: Function): void {

        this.exitCallback = callback;

        this.objects.exitScene( exitType );

    }



    public listNotificationInterests(): string[] {
        let notifications = super.listNotificationInterests();

        return notifications;
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