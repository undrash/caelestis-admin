



import {ViewComponent} from "../core/ViewComponent";
import {View} from "../core/View";


// CSS
import "../_style/style-sheets/options.scss";

// HTML
const template = require( "../_view-templates/options.html" );






export class Options extends ViewComponent {

    private optionsContainer: HTMLElement;


    constructor(view: View, container: HTMLElement) {

        super( view, container );


        this.container.innerHTML = template;


        this.optionsContainer = document.getElementById( "options-list-container" );



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

        console.info( "exit being called in options" );

        this.view.componentExited( this.name );
    }



    private populate(): void {

        this.connection.getOptions(
            (response: any) => {

                const { options } = response;

                if ( options.length ) this.optionsContainer.innerHTML = "";

                for ( let option of options ) {

                    let optionItem = document.createElement( "div" );
                    optionItem.id = option._id;
                    optionItem.className = "options-item";

                    let optionTitle = document.createElement( "p" );
                    optionTitle.className = "options-item-title";
                    optionTitle.innerHTML = option.name;

                    let optionCount = document.createElement( "p" );
                    optionCount.className = "options-item-option-count";
                    optionCount.innerHTML = option.options.length;


                    optionItem.appendChild( optionTitle );
                    optionItem.appendChild( optionCount );

                    this.optionsContainer.appendChild( optionItem );

                }


            },
            (message: string) => {

            }
        )
    }

}