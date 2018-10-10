

import { ViewComponent } from "../core/ViewComponent";
import { View } from "../core/View";

// CSS
import "../_style/style-sheets/property-definitions.scss";
import {PropertyDefinitionDatatypes} from "./PropertyDefinitionDatatypes";

// HTML
const modalTemplate = require("../_view-templates/property-definitions-add-modal.html");
const template = require("../_view-templates/property-definitions.html" );





export class PropertyDefinitions extends ViewComponent {

    private propertyDefContainer: HTMLElement;
    private addBtn: HTMLButtonElement;
    private modalBackground: HTMLElement;


    constructor(view: View, container: HTMLElement) {
        super( view, container );

        console.info( "PropertyDefinitions view component initiated." );


        this.container.innerHTML = template;


        this.propertyDefContainer = document.getElementById( "property-definitions-container" );
        this.addBtn               = document.getElementById( "property-definitions-add-btn" ) as HTMLButtonElement;

        this.modalBackground      = document.createElement( "div" );
        this.modalBackground.id = "property-definitions-modal-background";
        this.modalBackground.innerHTML = modalTemplate;

        this.container.appendChild( this.modalBackground );


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
        this.unregisterEventListeners();

    }



    private populate(): void {

        this.connection.getPropertyDefinitions(
            (response: any) => {
                const { properties } = response;

                if ( properties.length ) this.propertyDefContainer.innerHTML = "";

                for ( let i = 0; i < properties.length; i++ ) {

                    let propDefItem = document.createElement( "div" );
                    propDefItem.id = properties[i]._id;
                    propDefItem.className = "property-definition-item";


                    let propDefTitle = document.createElement( "p" );
                    propDefTitle.className = "property-definition-item-title";
                    propDefTitle.innerHTML = properties[i].name;

                    let propDefType = document.createElement( "p" );
                    propDefType.className = "property-definition-item-type";
                    propDefType.innerHTML = this.parseDataType( properties[i].dataType );


                    propDefItem.appendChild( propDefTitle );
                    propDefItem.appendChild( propDefType );

                    this.propertyDefContainer.appendChild( propDefItem );
                }
            },
            (message: string) => {
                console.warn( message );
            }
        )

    }



    private parseDataType( datatype: number): string {

        let val: string = "";

        switch ( datatype ) {

            case PropertyDefinitionDatatypes.BOOLEAN :
                val = "BOOLEAN";
                break;

            case PropertyDefinitionDatatypes.NUMBER :
                val = "NUMBER";
                break;

            case PropertyDefinitionDatatypes.DATE :
                val = "DATE";
                break;

            case PropertyDefinitionDatatypes.TEXT :
                val = "TEXT";
                break;

            case PropertyDefinitionDatatypes.LOOKUP :
                val = "LOOKUP";
                break;

            default :
                break;
        }

        return val;
    }
}