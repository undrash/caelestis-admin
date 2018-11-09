


import { SystemConstants } from "../core/SystemConstants";
import { INotification } from "../core/INotification";
import { ViewComponent } from "../core/ViewComponent";
import { ISignal } from "../core/ISignal";
import { View } from "../core/View";
import {Options} from "./Options";
import {OptionsCreateModal} from "./OptionsCreateModal";




// HTML
const optionsViewTemplate = require("../_view-templates/options-view.html");


export class OptionsView extends View {
    private options: ViewComponent;
    private optionsContainer: HTMLElement;
    private optionsCreateModal: ViewComponent;
    private optionsCreateModalContainer: HTMLElement;



    constructor() {
        super( "OptionsView" );

        this.container      = document.createElement( "div" );
        this.container.id   = "options-view-container";

        document.getElementById( SystemConstants.MAIN_CONTAINER ).appendChild( this.container );

        this.container.innerHTML = optionsViewTemplate;

        this.optionsContainer               = document.getElementById( "options-container" );
        this.optionsCreateModalContainer    = document.getElementById( "create-options-container" );

        this.container.appendChild( this.optionsContainer );


        this.options = new Options( this, this.optionsContainer );
        this.optionsCreateModal = new OptionsCreateModal( this, this.optionsCreateModalContainer );

    }



    public enterScene(): void {


    }



    public exitScene(exitType: string, callback: Function): void {

        this.exitCallback = callback;


        this.options.exitScene( exitType );
        this.optionsCreateModal.exitScene( exitType );

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