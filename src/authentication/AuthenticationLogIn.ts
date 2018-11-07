

import {ViewComponent} from "../core/ViewComponent";
import {View} from "../core/View";


// CSS
import "../_style/style-sheets/authentication-log-in.scss";
import {AuthenticationNotifications} from "./AuthenticationNotifications";

// HTML
const template = require("../_view-templates/authentication-log-in.html");






export class AuthenticationLogIn extends ViewComponent {
    private emailInput: HTMLInputElement;
    private passwordInput: HTMLInputElement;
    private logInBtn: HTMLButtonElement;
    private signUpBtn: HTMLElement;



    constructor(view: View, container: HTMLElement) {
        super( view, container );

        this.container.innerHTML = template;


        this.emailInput         = document.getElementById( "authentication-log-in-email-input" ) as HTMLInputElement;
        this.passwordInput      = document.getElementById( "authentication-log-in-password-input" ) as HTMLInputElement;
        this.logInBtn           = document.getElementById( "authentication-log-in-btn" ) as HTMLButtonElement;
        this.signUpBtn          = document.getElementById( "authentication-log-in-sign-up" );


        this.logInBtnListener   = this.logInBtnListener.bind( this );
        this.signUpBtnListener  = this.signUpBtnListener.bind( this );


        this.enterScene()
    }



    private registerEventListeners(): void {

        this.logInBtn.addEventListener( "click", this.logInBtnListener );
        this.signUpBtn.addEventListener( "click", this.signUpBtnListener );

    }



    private unregisterEventListeners(): void {

        this.logInBtn.removeEventListener( "click", this.logInBtnListener );
        this.signUpBtn.removeEventListener( "click", this.signUpBtnListener );

    }



    private logInBtnListener(e: any): void {
        const email = this.emailInput.value;
        const password = this.passwordInput.value;

        console.log( "email: " + email );
        console.log( "password: " + password );


        this.connection.login(
            {
                email,
                password
            },
            (response: any) => {

                console.log( response );

                this.view.sendNotification( AuthenticationNotifications.AUTH_USER_LOGGED_IN );


            },
            (message: string) => {
                console.error( message );
            }
        )

    }



    private signUpBtnListener(e: any): void {
        this.sendSignal( AuthenticationNotifications.AUTH_LOGIN_SWITCH_COMPONENT );
    }



    public enterScene(): void {
        this.registerEventListeners();

    }



    public exitScene(exitType: string): void {
        super.exitScene( exitType );
        this.unregisterEventListeners();

        console.info( "exit being called in authentication login view component" );

        this.view.componentExited( this.name );
    }


}