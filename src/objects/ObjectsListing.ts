

import {ViewComponent} from "../core/ViewComponent";
import {View} from "../core/View";
import {ObjectNotifications} from "./ObjectNotifications";

// CSS
import "../_style/style-sheets/objects-listing.scss";


// HTML
const template = require("../_view-templates/objects-listing.html");
const dropDownMenuTemplate = require("../_view-templates/listing-menu-dropdown.html");



export class ObjectsListing extends ViewComponent {

    private objectsContainer: HTMLElement;
    private addBtn: HTMLButtonElement;

    private dropdownMenuBackground: HTMLElement;
    private dropdownMenu: HTMLElement;
    private dropdownMenuEdit: HTMLElement;
    private dropdownMenuDelete: HTMLElement;

    private activeObject: string;

    constructor(view: View, container: HTMLElement) {
        super( view, container );


        this.container.innerHTML = template;

        this.objectsContainer           = document.getElementById( "object-listing-objects-container" );
        this.addBtn                      = document.getElementById( "object-listing-add-btn" ) as HTMLButtonElement;


        this.container.insertAdjacentHTML( "beforeend", dropDownMenuTemplate );

        this.dropdownMenuBackground     = document.getElementById( "listing-menu-dropdown-background" );
        this.dropdownMenu               = document.getElementById( "listing-menu-dropdown" );
        this.dropdownMenuEdit           = document.getElementById( "listing-menu-dropdown-item-edit" );
        this.dropdownMenuDelete         = document.getElementById( "listing-menu-dropdown-item-delete" );



        this.addBtnEventListener                = this.addBtnEventListener.bind( this );
        this.objectItemMousedownListener        = this.objectItemMousedownListener.bind( this );
        this.dropdownMenuBackgroundListener     = this.dropdownMenuBackgroundListener.bind( this );
        this.dropDownMenuEditListener           = this.dropDownMenuEditListener.bind( this );
        this.dropDownMenuDeleteListener         = this.dropDownMenuDeleteListener.bind( this );

        this.enterScene();
    }



    private registerEventListeners(): void {

        this.addBtn.addEventListener( "click", this.addBtnEventListener );
        this.dropdownMenuBackground.addEventListener( "click", this.dropdownMenuBackgroundListener );
        this.dropdownMenuEdit.addEventListener( "click", this.dropDownMenuEditListener );
        this.dropdownMenuDelete.addEventListener( "click", this.dropDownMenuDeleteListener );
    }


    private unregisterEventListeners(): void {

        this.addBtn.removeEventListener( "click", this.addBtnEventListener );
        this.dropdownMenuBackground.removeEventListener( "click", this.dropdownMenuBackgroundListener );
        this.dropdownMenuEdit.removeEventListener( "click", this.dropDownMenuEditListener );
        this.dropdownMenuDelete.removeEventListener( "click", this.dropDownMenuDeleteListener );

    }



    private addBtnEventListener(e: any): void {
        this.sendSignal( ObjectNotifications.OBJECTS_LISTING_ADD_BTN_CLICKED );
    }


    private objectItemMousedownListener(e: any): void {
        if ( e.which === 3 ) {
            this.dropdownMenu.style.top = e.pageY + "px";
            this.dropdownMenu.style.left = e.pageX + "px";

            this.activeObject = e.target.id;
            this.dropdownMenuBackground.style.display = "block";
        }
    }


    private dropdownMenuBackgroundListener(e: any): void {
        if ( e.target.id == this.dropdownMenuBackground.id ) this.dropdownMenuBackground.style.display = "none";
    }


    private dropDownMenuEditListener(e: any): void {
        console.info( "edit clicked" );
        this.dropdownMenuBackground.style.display = "none";
    }


    private dropDownMenuDeleteListener(e: any): void {
        console.info( "delete clicked" );
        this.dropdownMenuBackground.style.display = "none";
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

            if ( object.properties[j].propertyDef._id === object.type.nameProperty ) {

                objName.innerHTML = object.properties[j].value;
                break;
            }

        }


        let objType = document.createElement( "span" );
        objType.className = "object-item-type";
        objType.innerHTML = object.type.name;

        let objProperties = document.createElement( "span" );
        objProperties.className = "object-item-properties";
        objProperties.innerHTML = object.properties.length;

        objItem.appendChild( objName );
        objItem.appendChild( objProperties );
        objItem.appendChild( objType );

        this.objectsContainer.appendChild( objItem );


        objItem.addEventListener( "mousedown", this.objectItemMousedownListener );

    }



}
