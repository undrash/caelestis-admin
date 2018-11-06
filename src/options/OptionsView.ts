


import { SystemConstants } from "../core/SystemConstants";
import { INotification } from "../core/INotification";
import { ViewComponent } from "../core/ViewComponent";
import { ISignal } from "../core/ISignal";
import { View } from "../core/View";
import {Options} from "./Options";






export class OptionsView extends View {
    private options: ViewComponent;
    private optionsContainer: HTMLElement;



    constructor() {
        super( "OptionsView" );

        this.container      = document.createElement( "div" );
        this.container.id   = "options-view-container";

        document.getElementById( SystemConstants.MAIN_CONTAINER ).appendChild( this.container );


        this.optionsContainer = document.createElement( "div" );

        this.container.appendChild( this.optionsContainer );


        this.options = new Options( this, this.optionsContainer );

    }



    public enterScene(): void {


    }



    public exitScene(exitType: string, callback: Function): void {

        this.exitCallback = callback;


        this.options.exitScene( exitType );

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