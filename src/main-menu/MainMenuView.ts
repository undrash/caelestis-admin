

import {SystemConstants} from "../core/SystemConstants";
import { INotification } from "../core/INotification";
import { View } from "../core/View";


// CSS
import "../_style/style-sheets/main-menu.scss";

// HTML template
const template = require("../_view-templates/main-menu.html" );





export class MainMenuView extends View {



    constructor() {
        super( "MainMenuView" );

        console.info( "Main menu view initiated!" );

        this.container = document.getElementById( SystemConstants.MAIN_MENU_CONTAINER );

        this.container.innerHTML = template;
    }



    private registerEventListeners(): void {


    }



    private unregisterEventListeners(): void {


    }



    public listNotificationInterests(): string[] {
        let notifications = super.listNotificationInterests();

        return notifications;
    }



    public enterScene(): void {
        this.registerEventListeners();


    }



    public exitScene(exitType: string): void {
        this.unregisterEventListeners();

    }



    public handleNotification(notification: INotification): void {

        switch ( notification.name ) {



            default :
                break;
        }

    }
}