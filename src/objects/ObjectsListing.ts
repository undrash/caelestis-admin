




import {ViewComponent} from "../core/ViewComponent";
import {View} from "../core/View";


// HTML
const template = require("../_view-templates/objects-listing.html");

// CSS
import "../_style/style-sheets/objects-listing.scss";


export class ObjectsListing extends ViewComponent {

    private objectsContainer: HTMLElement;


    constructor(view: View, container: HTMLElement) {
        super( view, container );


        this.container.innerHTML = template;

        this.objectsContainer = document.getElementById( "object-listing-objects-container" );

        this.enterScene();
    }



    private registerEventListeners(): void {


    }



    private unregisterEventListeners(): void {


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

                    let objItem = document.createElement( "div" );
                    objItem.id = objects[i]._id;
                    objItem.className = "object-item";


                    let objName = document.createElement( "span" );
                    objName.className = "object-item-name";


                    for ( let j = 0; j < objects[i].properties.length; j++ ) {

                        if ( objects[i].properties[j].propertyDef === objects[i].nameProperty ) {

                            objName.innerHTML = objects[i].properties[j].value;
                            break;
                        }

                    }


                    let objType = document.createElement( "span" );
                    objType.className = "object-item-type";

                    let objProperties = document.createElement( "span" );
                    objProperties.className = "object-item-properties";
                    objProperties.innerHTML = objects[i].properties.length;

                    objItem.appendChild( objName );
                    objItem.appendChild( objProperties );
                    objItem.appendChild( objType );

                    this.objectsContainer.appendChild( objItem );

                    this.connection.getObjectTypeById(
                        objects[i].type,
                        (response: any) => {

                            const { objectType } = response;
                            objType.innerHTML = objectType.name;

                        },
                        (message: string) => {
                            console.warn( message );
                        }
                    )

                }
            },
            (message: string) => {
                console.warn( message );
            }
        )

    }



}