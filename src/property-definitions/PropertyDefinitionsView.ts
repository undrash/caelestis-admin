

import {INotification} from "../core/INotification";
import {View} from "../core/View";
import {ISignal} from "../core/ISignal";
import {ViewComponent} from "../core/ViewComponent";
import {SystemConstants} from "../core/SystemConstants";
import {PropertyDefinitions} from "./PropertyDefinitions";






export class PropertyDefinitionsView extends View {
    private propertyDefinitions: ViewComponent;
    private propertyDefinitionsContainer: HTMLElement;


    constructor() {
        super( "PropertyDefinitionsView" );

        this.container = document.createElement( "div" );
        this.container.id = "property-definitions-view-container";

        document.getElementById( SystemConstants.MAIN_CONTAINER ).appendChild( this.container );

        this.propertyDefinitionsContainer = document.createElement( "div" );

        this.container.appendChild( this.propertyDefinitionsContainer );

        this.propertyDefinitions = new PropertyDefinitions( this, this.propertyDefinitionsContainer );

    }


    public enterScene(): void {


    }



    public exitScene(exitType: string, callback: Function): void {

        this.exitCallback = callback;

        this.propertyDefinitions.exitScene( exitType );


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