


import {ViewComponent} from "../core/ViewComponent";
import {View} from "../core/View";



// CSS
import "../_style/style-sheets/authentication-sign-up.scss";
import {AuthenticationNotifications} from "./AuthenticationNotifications";

// HTML
const template = require("../_view-templates/authentication-sign-up.html");




export class AuthenticationSignUp extends ViewComponent {
    private firstNameInput: HTMLInputElement;
    private lastNameInput: HTMLInputElement;
    private emailInput: HTMLInputElement;
    private passwordInput: HTMLInputElement;
    private languageSelect: HTMLSelectElement;
    private signUpBtn: HTMLButtonElement;
    private backToLogInBtn: HTMLElement;



    constructor(view: View, container: HTMLElement) {
        super( view, container );


        this.container.innerHTML = template;

        this.firstNameInput     = document.getElementById( "authentication-sign-up-first-name-input" ) as HTMLInputElement;
        this.lastNameInput      = document.getElementById( "authentication-sign-up-last-name-input" ) as HTMLInputElement;
        this.emailInput         = document.getElementById( "authentication-sign-up-email-input" ) as HTMLInputElement;
        this.passwordInput      = document.getElementById( "authentication-sign-up-password-input" ) as HTMLInputElement;
        this.languageSelect     = document.getElementById( "authentication-sign-up-language-select" ) as HTMLSelectElement;
        this.signUpBtn          = document.getElementById( "authentication-sign-up-btn" ) as HTMLButtonElement;
        this.backToLogInBtn     = document.getElementById( "authentication-sign-up-back-to-log-in" );


        this.signUpBtnListener      = this.signUpBtnListener.bind( this );
        this.backToLogInBtnListener = this.backToLogInBtnListener.bind( this );


        this.enterScene()
    }



    private registerEventListeners(): void {

        this.signUpBtn.addEventListener( "click", this.signUpBtnListener );
        this.backToLogInBtn.addEventListener( "click", this.backToLogInBtnListener );

    }



    private unregisterEventListeners(): void {

        this.signUpBtn.removeEventListener( "click", this.signUpBtnListener );
        this.backToLogInBtn.removeEventListener( "click", this.backToLogInBtnListener );

    }



    private signUpBtnListener(e: any): void {
        const firstName = this.firstNameInput.value;
        const lastName = this.lastNameInput.value;
        const email = this.emailInput.value;
        const password = this.passwordInput.value;
        const language = this.languageSelect.options[ this.languageSelect.selectedIndex ].value;



        this.connection.signUp(
            {
                firstName,
                lastName,
                email,
                password,
                language
            },
            (response: any) => {

                console.info( response );

                this.view.sendNotification( AuthenticationNotifications.AUTH_USER_SIGNED_UP );
            },
            (message: string) => {
                console.error( message );
            }
        )
    }



    private backToLogInBtnListener(e: any): void {
        this.sendSignal( AuthenticationNotifications.AUTH_SIGN_UP_SWITCH_COMPONENT );
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