

import {View} from "../core/View";
import {INotification} from "../core/INotification";






export class ObjectTypesView extends View {



    constructor() {
        super( "ObjectTypesView" );

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