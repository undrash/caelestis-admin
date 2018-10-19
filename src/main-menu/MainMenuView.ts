

import { SystemConstants } from "../core/SystemConstants";
import { INotification } from "../core/INotification";
import { View } from "../core/View";


// CSS
import "../_style/style-sheets/main-menu.scss";
import {MainMenuNotifications} from "./MainMenuNotifications";

// HTML template
const template = require("../_view-templates/main-menu.html" );






export class MainMenuView extends View {

    private menuItemPropDef: HTMLElement;
    private menuItemObjType: HTMLElement;
    private menuItemObj: HTMLElement;


    constructor() {
        super( "MainMenuView" );

        console.info( "Main menu view initiated!" );

        this.container                  = document.getElementById( SystemConstants.MAIN_MENU_CONTAINER );

        this.container.innerHTML        = template;

        this.menuItemPropDef            = document.getElementById( "menu-item-property-definitions" );
        this.menuItemObjType            = document.getElementById( "menu-item-object-types" );
        this.menuItemObj                = document.getElementById( "menu-item-objects" );


        this.menuItemPropDefListener    = this.menuItemPropDefListener.bind( this );
        this.menuItemObjTypeListener    = this.menuItemObjTypeListener.bind( this );
        this.menuItemObjListener        = this.menuItemObjListener.bind( this );

        this.enterScene();
    }



    private registerEventListeners(): void {

        this.menuItemPropDef.addEventListener( "click", this.menuItemPropDefListener );
        this.menuItemObjType.addEventListener( "click", this.menuItemObjTypeListener );
        this.menuItemObj.addEventListener( "click", this.menuItemObjListener );

    }



    private unregisterEventListeners(): void {

        this.menuItemPropDef.removeEventListener( "click", this.menuItemPropDefListener );
        this.menuItemObjType.removeEventListener( "click", this.menuItemObjTypeListener );
        this.menuItemObj.removeEventListener( "click", this.menuItemObjListener );

    }



    public listNotificationInterests(): string[] {
        let notifications = super.listNotificationInterests();

        return notifications;
    }



    private menuItemPropDefListener(e: any): void {
        this.sendNotification( MainMenuNotifications.MENU_ITEM_PROPERTY_DEFINITIONS );
    }



    private menuItemObjTypeListener(e: any): void {
        this.sendNotification( MainMenuNotifications.MENU_ITEM_OBJECT_TYPES );
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



            default :
                break;
        }

    }
}
