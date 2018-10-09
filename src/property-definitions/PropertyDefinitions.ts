

import { ViewComponent } from "../core/ViewComponent";
import { View } from "../core/View";

// CSS
import "../_style/style-sheets/property-definitions.scss";

// HTML
const template = require("../_view-templates/property-definitions.html" );





export class PropertyDefinitions extends ViewComponent {



    constructor(view: View, container: HTMLElement) {
        super( view, container );

        console.info( "PropertyDefinitions view component initiated." );


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
        this.unregisterEventListeners();

    }
}