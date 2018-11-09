


import {ViewComponent} from "../core/ViewComponent";
import {View} from "../core/View";


// CSS
import "../_style/style-sheets/options-create-modal.scss";

// HTML
const template = require( "../_view-templates/options-create-modal.html" );



export class OptionsCreateModal extends ViewComponent {



    constructor(view: View, container: HTMLElement) {
        super( view, container );


        this.container.innerHTML = template;



        this.enterScene();
    }



    private registerEventListeners(): void {


    }


    private unregisterEventListeners(): void {


    }


    public enterScene(): void {
        this.registerEventListeners();

    }



    public exitScene(exitType: string): void {
        super.exitScene( exitType );
        this.unregisterEventListeners();

        this.view.componentExited( this.name );
    }


}