

import {View} from "../core/View";
import {INotification} from "../core/INotification";
import {ISignal} from "../core/ISignal";
import {ViewComponent} from "../core/ViewComponent";
import {SystemConstants} from "../core/SystemConstants";
import {ObjectsListing} from "./ObjectsListing";
import {ObjectsFilter} from "./ObjectsFilter";

// HTML
const objectsViewTemplate = require("../_view-templates/objects-view.html");

// CSS
import "../_style/style-sheets/objects-view.scss";
import {ObjectNotifications} from "./ObjectNotifications";
import {ObjectCreateModal} from "./ObjectCreateModal";



export class ObjectsView extends View {
    private objectsFilter: ViewComponent;
    private objectsListing: ViewComponent;
    private objectCreateModal: ViewComponent;

    private objectsFilterContainer: HTMLElement;
    private objectsListingContainer: HTMLElement;
    private objectCreateModalContainer: HTMLElement;

    private objectsViewModalBackground: HTMLElement;


    constructor() {
        super( "ObjectsView" );

        this.container = document.createElement( "div" );
        this.container.id = "objects-view-container";

        document.getElementById( SystemConstants.MAIN_CONTAINER ).appendChild( this.container );

        this.container.innerHTML = objectsViewTemplate;

        this.objectsViewModalBackground = document.getElementById( "objects-view-modal-background" );

        this.objectsFilterContainer     = document.getElementById( "objects-filter-container" );
        this.objectsListingContainer    = document.getElementById( "objects-object-listing-container" );
        this.objectCreateModalContainer = document.getElementById( "objects-object-create-modal-container" );

        this.objectsFilter      = new ObjectsFilter( this, this.objectsFilterContainer );
        this.objectsListing     = new ObjectsListing( this, this.objectsListingContainer );
        this.objectCreateModal  = new ObjectCreateModal( this, this.objectCreateModalContainer );


        this.objectsViewModalBackgroundClickHandler = this.objectsViewModalBackgroundClickHandler.bind( this );


        this.enterScene();
    }



    private registerEventListeners(): void {

        this.objectsViewModalBackground.addEventListener( "click", this.objectsViewModalBackgroundClickHandler );

    }

    private unregisterEventListeners(): void {

        this.objectsViewModalBackground.removeEventListener( "click", this.objectsViewModalBackgroundClickHandler );
    }


    private objectsViewModalBackgroundClickHandler(e: any): void {

        if ( e.target.id === this.objectsViewModalBackground.id ) {
            this.objectsViewModalBackground.style.display = "none";
        }


    }


    public enterScene(): void {
        this.registerEventListeners();


    }



    public exitScene(exitType: string, callback: Function): void {
        this.unregisterEventListeners();

        this.exitCallback = callback;

        this.objectsFilter.exitScene( exitType );
        this.objectsListing.exitScene( exitType );
        this.objectCreateModal.exitScene( exitType );

    }



    public listNotificationInterests(): string[] {
        let notifications = super.listNotificationInterests();

        return notifications;
    }



    private objectListingAddBtnClicked(): void {

        this.objectsViewModalBackground.style.display = "block";
        ( this.objectCreateModal as ObjectCreateModal ).populateObjectTypes();

    }


    private hideObjectCreateModal(): void {
        this.objectsViewModalBackground.style.display = "none";
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

            case ObjectNotifications.OBJECTS_LISTING_ADD_BTN_CLICKED :

                this.objectListingAddBtnClicked();

                break;

            case ObjectNotifications.OBJECTS_CREATE_HIDE :

                this.hideObjectCreateModal();

                break;

            case ObjectNotifications.OBJECTS_CREATE_OBJECT_CREATED :

                this.hideObjectCreateModal();
                ( this.objectsListing as ObjectsListing ).createListItemFromObject( signal.data );

                break;


            default:
                break;
        }

    }
}