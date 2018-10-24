


// CSS
import "../_style/style-sheets/objects-filter-component.scss";
import {ConnectionProxy} from "../connection/ConnectionProxy";
import {PropertyDefinitionDatatypes} from "../property-definitions/PropertyDefinitionDatatypes";

// HTML
const template = require( "../_view-templates/objects-filter-component.html" );






export class ObjectsFilterComponent {

    private connection: ConnectionProxy;
    private container: HTMLElement;
    private selectionBox: HTMLInputElement;
    private filterHeader: HTMLElement;
    private filterExpandCollapse: HTMLElement;
    private filterBody: HTMLElement;
    private objectTypeSelect: HTMLSelectElement;
    private propertySelect: HTMLSelectElement;
    private operatorSelect: HTMLSelectElement;
    private valueInput: HTMLInputElement;
    private valueSelect: HTMLSelectElement;

    public filterActive: boolean;






    constructor(container: HTMLElement) {

        this.filterActive = false;

        this.connection = new ConnectionProxy( "FilterComponentProxy" );

        this.container = document.createElement( "div" );
        this.container.className = "object-filter-item-container";

        this.container.innerHTML = template;

        this.selectionBox           = this.container.getElementsByClassName( "objects-filter-select-checkbox" )[0] as HTMLInputElement;
        this.filterHeader           = this.container.getElementsByClassName( "objects-filter-header" )[0] as HTMLElement ;
        this.filterExpandCollapse   = this.container.getElementsByClassName( "objects-filter-expand-collapse" )[0] as HTMLElement ;
        this.filterBody             = this.container.getElementsByClassName( "objects-filter-body" )[0] as HTMLElement;
        this.objectTypeSelect       = this.container.getElementsByClassName( "objects-filter-object-type-select" )[0] as HTMLSelectElement;
        this.propertySelect         = this.container.getElementsByClassName( "objects-filter-property-select" )[0] as HTMLSelectElement;
        this.operatorSelect         = this.container.getElementsByClassName( "objects-filter-operator-select" )[0] as HTMLSelectElement;
        this.valueInput             = this.container.getElementsByClassName( "objects-filter-value-input" )[0] as HTMLInputElement;
        this.valueSelect            = this.container.getElementsByClassName( "objects-filter-value-select" )[0] as HTMLSelectElement;

        container.appendChild( this.container );


        this.filterExpandCollapseListener   = this.filterExpandCollapseListener.bind( this );
        this.propertySelectChangeListener   = this.propertySelectChangeListener.bind( this );
        this.selectionBoxListener           = this.selectionBoxListener.bind( this );


        this.registerEventListeners();


        this.populate();
    }



    private registerEventListeners(): void {

        this.filterExpandCollapse.addEventListener( "click", this.filterExpandCollapseListener );
        this.propertySelect.addEventListener( "change", this.propertySelectChangeListener );
        this.selectionBox.addEventListener( "change", this.selectionBoxListener );

    }



    private unregisterEventListeners(): void {

        this.filterExpandCollapse.removeEventListener( "click", this.filterExpandCollapseListener );
        this.propertySelect.removeEventListener( "change", this.propertySelectChangeListener );
        this.selectionBox.removeEventListener( "change", this.selectionBoxListener );


    }



    private filterExpandCollapseListener(e: any): void {
        this.filterBody.style.display = this.filterBody.style.display === "none" ? "block" : "none";
    }



    private propertySelectChangeListener(e: any): void {

        const dataType = parseInt( this.propertySelect.options[ this.propertySelect.selectedIndex ].dataset.dataType );

        this.valueInput.value = "";
        this.valueInput.classList.remove( "objects-filter-value-input-checkbox" );
        this.valueSelect.innerHTML = "";
        this.valueSelect.style.display = "none";

        switch ( dataType ) {

            case PropertyDefinitionDatatypes.TEXT :

                this.valueInput.type = "text";
                this.valueInput.style.display = "block";

                break;

            case PropertyDefinitionDatatypes.NUMBER :

                this.valueInput.type = "number";
                this.valueInput.style.display = "block";

                break;

            case PropertyDefinitionDatatypes.LOOKUP :

                this.valueInput.style.display = "none";
                this.valueSelect.style.display = "block";

                const objectType = this.propertySelect.options[ this.propertySelect.selectedIndex ].dataset.objectType;


                this.connection.getObjectByType(
                    objectType,
                    (response: any) => {
                        const { objects } = response;

                        for ( let object of objects ) {

                            let option = document.createElement( "option" );
                            option.value = object._id;

                            const titleProp = object.properties.filter( (p: any) => p.propertyDef._id === object.type.nameProperty )[0];
                            option.text = titleProp.value;

                            this.valueSelect.add( option );
                        }

                    },
                    (message: string) => {
                        console.error( message );
                    }
                );


                break;

            case PropertyDefinitionDatatypes.DATE :

                this.valueInput.type = "date";
                this.valueInput.style.display = "block";

                break;

            case PropertyDefinitionDatatypes.BOOLEAN :

                this.valueInput.classList.add( "objects-filter-value-input-checkbox" );
                this.valueInput.type = "checkbox";
                this.valueInput.style.display = "block";


                break;


            default :
                break;

        }


    }



    private selectionBoxListener(e: any): void {
        this.filterActive = this.selectionBox.checked;
    }



    private populate(): void {


        this.connection.getPropertyDefinitions(
            (response: any) => {

                const { properties } = response;

                for ( let propertyDef of properties ) {

                    let otOption = document.createElement( "option" );
                    otOption.value = propertyDef._id;
                    otOption.text = propertyDef.name;
                    otOption.dataset.dataType = propertyDef.dataType;
                    otOption.dataset.objectType = propertyDef.objectType;


                    this.propertySelect.appendChild( otOption );

                }
            },
            (message: string) => {
                console.error( message );
            }
        )


    }



    public getSearchCondition(): any {

        const propertyDef = this.propertySelect.options[ this.propertySelect.selectedIndex ].value;
        const operator = parseInt( this.operatorSelect.options[ this.operatorSelect.selectedIndex ].value );
        const dataType = parseInt( this.propertySelect.options[ this.propertySelect.selectedIndex ].dataset.dataType );
        let value = null;



        switch ( dataType ) {

            case PropertyDefinitionDatatypes.LOOKUP :

                value = this.valueSelect.options[ this.valueSelect.selectedIndex ].value;

                break;

            case PropertyDefinitionDatatypes.NUMBER :

                value = parseInt( this.valueInput.value );

                break;

            case PropertyDefinitionDatatypes.BOOLEAN :

                value = this.valueInput.checked;

                break;

            default :

                value = this.valueInput.value;

                break;
        }


        return {
            propertyDef,
            operator,
            dataType,
            value
        }

    }

}