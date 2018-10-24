

import { ViewComponent } from "../core/ViewComponent";
import { View } from "../core/View";

// CSS
import "../_style/style-sheets/objects-filters.scss";
import {ObjectsFilterComponent} from "./ObjectsFilterComponent";
import {ObjectNotifications} from "./ObjectNotifications";

// HTML
const template = require( "../_view-templates/objects-filters.html" );






export class ObjectsFilters extends ViewComponent {

    private filtersContainer: HTMLElement;
    private objectTypeSelect: HTMLSelectElement;
    private addFilterBtn: HTMLButtonElement;
    private searchBtn: HTMLButtonElement;

    private filters: ObjectsFilterComponent[];



    constructor(view: View, container: HTMLElement) {
        super(view, container);

        this.filters = [];

        this.container.innerHTML = template;

        this.objectTypeSelect   = document.getElementById( "objects-filters-object-type-select" ) as HTMLSelectElement;
        this.filtersContainer   = document.getElementById( "objects-filters-container" );
        this.addFilterBtn       = document.getElementById( "objects-filters-add-filter-btn" ) as HTMLButtonElement;
        this.searchBtn          = document.getElementById( "objects-filters-search-btn" ) as HTMLButtonElement;



        this.addFilterBtnListener   = this.addFilterBtnListener.bind( this );
        this.searchBtnListener      = this.searchBtnListener.bind( this );

        this.enterScene();

    }



    private registerEventListeners(): void {

        this.addFilterBtn.addEventListener( "click", this.addFilterBtnListener );
        this.searchBtn.addEventListener( "click", this.searchBtnListener );


    }



    private unregisterEventListeners(): void {

        this.addFilterBtn.removeEventListener( "click", this.addFilterBtnListener );
        this.searchBtn.removeEventListener( "click", this.searchBtnListener );

    }



    private addFilterBtnListener(e: any): void {

        this.filters.push( new ObjectsFilterComponent( this.filtersContainer ) );

    }



    private searchBtnListener(e: any): void {

        const objectType = this.objectTypeSelect.options[ this.objectTypeSelect.selectedIndex ].value;

        let data = {
            types: [ objectType ],
            conditions: []
        };

        for ( let filter of this.filters ) {
            if  ( filter.filterActive ) data.conditions.push( filter.getSearchCondition() );
        }


        this.connection.searchForObjectsByConditions(
            data,
            (response: any) => {
                const { objects } = response;
                console.log( objects );

                this.sendSignal( ObjectNotifications.OBJECTS_FILTER_RESULT, objects );
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
                    let otOption = document.createElement( "option" );
                    otOption.value = objectType._id;
                    otOption.text = objectType.name;

                    this.objectTypeSelect.appendChild( otOption );
                }

            },
            (message: string) => {
                console.error( message );
            }
        );


    }


}