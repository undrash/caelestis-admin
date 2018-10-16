

import {ViewComponent} from "../core/ViewComponent";
import {View} from "../core/View";


// HTML
const template = require("../_view-templates/objects-listing.html");

// CSS
import "../_style/style-sheets/objects-listing.scss";
import {ObjectNotifications} from "./ObjectNotifications";


export class ObjectsListing extends ViewComponent {

    private objectsContainer: HTMLElement;
    private addBtn: HTMLButtonElement;


    constructor(view: View, container: HTMLElement) {
        super( view, container );


        this.container.innerHTML = template;

        this.objectsContainer = document.getElementById( "object-listing-objects-container" );
        this.addBtn = document.getElementById( "object-listing-add-btn" ) as HTMLButtonElement;



        this.addBtnEventListener = this.addBtnEventListener.bind( this );


        this.enterScene();
    }



    private registerEventListeners(): void {

        this.addBtn.addEventListener( "click", this.addBtnEventListener );

    }


    private unregisterEventListeners(): void {

        this.addBtn.removeEventListener( "click", this.addBtnEventListener );

    }



    private addBtnEventListener(e: any): void {
        this.sendSignal( ObjectNotifications.OBJECTS_LISTING_ADD_BTN_CLICKED );
    }


    public enterScene(): void {
        this.registerEventListeners();
        this.populate();
    }



    public exitScene(exitType: string): void {
        super.exitScene( exitType );
        this.unregisterEventListeners();

        this.view.componentExited( this.name );
    }


    private populate(): void {

        this.connection.getObjects(
            (response: any) => {
                const { objects } = response;

                console.log( objects );

                if ( objects.length ) this.objectsContainer.innerHTML = "";

                for ( let i = 0; i < objects.length; i++ ) {

                    this.createListItemFromObject( objects[i] );

                }
            },
            (message: string) => {
                console.warn( message );
            }
        )

    }


    public createListItemFromObject(object: any): void {


        let objItem = document.createElement( "div" );
        objItem.id = object._id;
        objItem.className = "object-item";


        let objName = document.createElement( "span" );
        objName.className = "object-item-name";


        for ( let j = 0; j < object.properties.length; j++ ) {

            if ( object.properties[j].propertyDef === object.nameProperty ) {

                objName.innerHTML = object.properties[j].value;
                break;
            }

        }


        let objType = document.createElement( "span" );
        objType.className = "object-item-type";

        let objProperties = document.createElement( "span" );
        objProperties.className = "object-item-properties";
        objProperties.innerHTML = object.properties.length;

        objItem.appendChild( objName );
        objItem.appendChild( objProperties );
        objItem.appendChild( objType );

        this.objectsContainer.appendChild( objItem );

        this.connection.getObjectTypeById(
            object.type,
            (response: any) => {

                const { objectType } = response;
                objType.innerHTML = objectType.name;

            },
            (message: string) => {
                console.warn( message );
            }
        )

    }



}
