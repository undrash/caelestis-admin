

import { PropertyDefinitionsView } from "../property-definitions/PropertyDefinitionsView";
import { MainMenuView } from "../main-menu/MainMenuView";
import { INotification } from "./INotification";
import { ViewExitTypes } from "./ViewExitTypes";
import { CoreEntity } from "./CoreEntity";
import { View } from "./View";
import {MainMenuNotifications} from "../main-menu/MainMenuNotifications";
import {ObjectTypesView} from "../object-types/ObjectTypesView";
import {ObjectsView} from "../objects/ObjectsView";
import {OptionsView} from "../options/OptionsView";
import {AuthenticationView} from "../authentication/AuthenticationView";





export class ViewManager extends CoreEntity {
    public NAME: string;
    private mainMenuView: View;
    private currentView: View;


    constructor() {
        super( "ViewManager" );
        this.initView();
    }


    private initView(): void {
        this.mainMenuView   = new MainMenuView();
        this.currentView    = new AuthenticationView();
    }


    private switchView(view: any, exitType?: string, callback?: Function): void {

        if ( ! exitType ) exitType = ViewExitTypes.DEFAULT;

        this.currentView.exitScene( exitType, () => {

            this.currentView = new view();

            if ( callback ) callback();

        });
    }



    public listNotificationInterests(): any[] {

        let notifications = [];

        notifications.push( MainMenuNotifications.MENU_ITEM_PROPERTY_DEFINITIONS );
        notifications.push( MainMenuNotifications.MENU_ITEM_OBJECT_TYPES );
        notifications.push( MainMenuNotifications.MENU_ITEM_OPTIONS );
        notifications.push( MainMenuNotifications.MENU_ITEM_OBJECTS );


        return notifications;
    }



    public handleNotification(notification: INotification) {

        console.info( "View manager notification arrived: " + notification.name );

        switch ( notification.name ) {

            case MainMenuNotifications.MENU_ITEM_PROPERTY_DEFINITIONS :

                this.switchView( PropertyDefinitionsView, null );

                break;

            case MainMenuNotifications.MENU_ITEM_OBJECT_TYPES :

                this.switchView( ObjectTypesView, null );

                break;


            case MainMenuNotifications.MENU_ITEM_OPTIONS :


                this.switchView( OptionsView, null );


                break;

            case MainMenuNotifications.MENU_ITEM_OBJECTS :

                this.switchView( ObjectsView, null );

                break;

            default :
                break;
        }

    }

}