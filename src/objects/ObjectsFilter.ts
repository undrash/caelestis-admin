


import {ViewComponent} from "../core/ViewComponent";
import {View} from "../core/View";


export class ObjectsFilter extends ViewComponent {



    constructor(view: View, container: HTMLElement) {
        super( view, container );

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