

import { ViewComponent } from "../core/ViewComponent";
import { View } from "../core/View";

// CSS
import "../_style/style-sheets/objects-filter.scss";
import {ObjectNotifications} from "./ObjectNotifications";

// HTML
const template = require("../_view-templates/objects-filter.html");






export class ObjectsFilter extends ViewComponent {

    private objectTypeSelect: HTMLSelectElement;
    private propertySelect: HTMLSelectElement;
    private operatorSelect: HTMLSelectElement;
    private valueInput: HTMLInputElement;
    private searchBtn: HTMLButtonElement;





    constructor(view: View, container: HTMLElement) {
        super( view, container );

        this.container.innerHTML = template;


        this.objectTypeSelect   = document.getElementById( "objects-filter-object-type-select" ) as HTMLSelectElement;
        this.propertySelect     = document.getElementById( "objects-filter-property-select" ) as HTMLSelectElement;
        this.operatorSelect     = document.getElementById( "objects-filter-operator-select" ) as HTMLSelectElement;
        this.valueInput         = document.getElementById( "objects-filter-value-input" ) as HTMLInputElement;
        this.searchBtn          = document.getElementById( "objects-filter-search-btn" ) as HTMLButtonElement;



        this.searchBtnListener  = this.searchBtnListener.bind( this );


        this.enterScene();
    }



    private registerEventListeners(): void {

        this.searchBtn.addEventListener( "click", this.searchBtnListener );

    }



    private unregisterEventListeners(): void {

        this.searchBtn.removeEventListener( "click", this.searchBtnListener );

    }



    private searchBtnListener(e: any): void {

        const objectTypeId          = this.objectTypeSelect.options[ this.objectTypeSelect.selectedIndex ].value;
        const propertyDef           = this.propertySelect.options[ this.propertySelect.selectedIndex ].value;
        const dataType              = this.propertySelect.options[ this.propertySelect.selectedIndex ].dataset.dataType;
        const operator              = parseInt( this.operatorSelect.options[ this.operatorSelect.selectedIndex ].value );
        let value: any              = this.valueInput.value;


        if ( ! isNaN( value ) ) value = parseInt( value );


        this.connection.searchForObjectsByConditions(
            {
                types: [ objectTypeId ],
                conditions: [
                    {
                        propertyDef,
                        operator,
                        dataType,
                        value
                    }
                ]
            },
            (response: any) => {
                const { objects } = response;

                this.sendSignal( ObjectNotifications.OBJECTS_FILTER_RESULT, objects )
            },
            (message: string) => {
                console.error( message );
            }
        )




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

        this.connection.getObjectTypes(
            (response: any) => {

                const { objectTypes } = response;

                for ( let objectType of objectTypes ) {

                    let otOption    = document.createElement( "option" );
                    otOption.value  = objectType._id;
                    otOption.text   = objectType.name;

                    this.objectTypeSelect.appendChild( otOption );
                }


            },
            (message: string) => {

                console.error( message );

            }
        );


        this.connection.getPropertyDefinitions(
            (response: any) => {
                const { properties } = response;

                for ( let property of properties ) {

                    let otOption = document.createElement( "option" );

                    otOption.value              = property._id;
                    otOption.text               = property.name;
                    otOption.dataset.dataType   = property.dataType;

                    this.propertySelect.appendChild( otOption );
                }
            },
            (message: string) => {
                console.error( message );
            }
        )


    }


}
