

import { SystemConstants } from "../core/SystemConstants";
import { INotification } from "../core/INotification";
import { View } from "../core/View";


// CSS
import "../_style/style-sheets/main-menu.scss";
import {MainMenuNotifications} from "./MainMenuNotifications";
import {AuthenticationNotifications} from "../authentication/AuthenticationNotifications";

// HTML template
const template = require("../_view-templates/main-menu.html" );






export class MainMenuView extends View {

    private menuItemPropDef: HTMLElement;
    private menuItemObjType: HTMLElement;
    private menuItemOptions: HTMLElement;
    private menuItemObj: HTMLElement;


    constructor() {
        super( "MainMenuView" );

        console.info( "Main menu view initiated!" );

        this.container                  = document.getElementById( SystemConstants.MAIN_MENU_CONTAINER );

        this.container.innerHTML        = template;

        this.menuItemPropDef            = document.getElementById( "menu-item-property-definitions" );
        this.menuItemObjType            = document.getElementById( "menu-item-object-types" );
        this.menuItemOptions            = document.getElementById( "menu-item-options" );
        this.menuItemObj                = document.getElementById( "menu-item-objects" );


        this.menuItemPropDefListener    = this.menuItemPropDefListener.bind( this );
        this.menuItemObjTypeListener    = this.menuItemObjTypeListener.bind( this );
        this.menuItemOptionsListener    = this.menuItemOptionsListener.bind( this );
        this.menuItemObjListener        = this.menuItemObjListener.bind( this );

        this.enterScene();
    }



    private registerEventListeners(): void {

        this.menuItemPropDef.addEventListener( "click", this.menuItemPropDefListener );
        this.menuItemObjType.addEventListener( "click", this.menuItemObjTypeListener );
        this.menuItemObj.addEventListener( "click", this.menuItemObjListener );
        this.menuItemOptions.addEventListener( "click", this.menuItemOptionsListener );

    }



    private unregisterEventListeners(): void {

        this.menuItemPropDef.removeEventListener( "click", this.menuItemPropDefListener );
        this.menuItemObjType.removeEventListener( "click", this.menuItemObjTypeListener );
        this.menuItemObj.removeEventListener( "click", this.menuItemObjListener );
        this.menuItemOptions.removeEventListener( "click", this.menuItemOptionsListener );
    }



    public listNotificationInterests(): string[] {
        let notifications = super.listNotificationInterests();

        notifications.push( AuthenticationNotifications.AUTH_USER_LOGGED_IN );

        return notifications;
    }



    private menuItemPropDefListener(e: any): void {
        this.sendNotification( MainMenuNotifications.MENU_ITEM_PROPERTY_DEFINITIONS );
    }



    private menuItemObjTypeListener(e: any): void {
        this.sendNotification( MainMenuNotifications.MENU_ITEM_OBJECT_TYPES );
    }



    private menuItemOptionsListener(e: any): void {
        this.sendNotification( MainMenuNotifications.MENU_ITEM_OPTIONS );
    }



    private menuItemObjListener(e: any): void {
        this.sendNotification( MainMenuNotifications.MENU_ITEM_OBJECTS );
    }



    public enterScene(): void {
        this.registerEventListeners();


    }



    public exitScene(exitType: string): void {
        this.unregisterEventListeners();

    }



    public handleNotification(notification: INotification): void {

        switch ( notification.name ) {

            case AuthenticationNotifications.AUTH_USER_LOGGED_IN :

                document.getElementById( SystemConstants.MAIN_CONTAINER ).style.width = "calc(100% - 300px)";
                document.getElementById( SystemConstants.MAIN_MENU_CONTAINER ).style.display = "block";

                break;


            default :
                break;
        }

    }
}
