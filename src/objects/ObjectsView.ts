

import {View} from "../core/View";
import {INotification} from "../core/INotification";
import {ISignal} from "../core/ISignal";
import {ViewComponent} from "../core/ViewComponent";
import {SystemConstants} from "../core/SystemConstants";
import {ObjectsListing} from "./ObjectsListing";
import {ObjectsFilter} from "./ObjectsFilter";

// HTML
const objectsViewTemplate = require("../_view-templates/objects-view.html");




export class ObjectsView extends View {
    private objectsFilter: ViewComponent;
    private objectsFilterContainer: HTMLElement;

    private objectsListing: ViewComponent;
    private objectsListingContainer: HTMLElement;


    constructor() {
        super( "ObjectsView" );

        this.container = document.createElement( "div" );
        this.container.id = "objects-view-container";

        document.getElementById( SystemConstants.MAIN_CONTAINER ).appendChild( this.container );

        this.container.innerHTML = objectsViewTemplate;

        this.objectsFilterContainer = document.getElementById( "objects-filter-container" );
        this.objectsListingContainer = document.getElementById( "objects-object-listing-container" );

        this.objectsFilter = new ObjectsFilter( this, this.objectsFilterContainer );
        this.objectsListing = new ObjectsListing( this, this.objectsListingContainer );

    }



    public enterScene(): void {


    }



    public exitScene(exitType: string, callback: Function): void {

        this.exitCallback = callback;

        this.objectsFilter.exitScene( exitType );
        this.objectsListing.exitScene( exitType );

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