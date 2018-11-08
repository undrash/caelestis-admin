

import {CoreEntity} from "../core/CoreEntity";
import {IPropertyDefinition} from "./models/IPropertyDefinition";

export class ConnectionProxy extends CoreEntity {
    private address: string;
    private static token: string;



    constructor(proxyName: string) {
        super( proxyName );

        // this.address = "http://192.168.0.101:4200";
        this.address = "http://localhost:4200";
    }



    public login(data: any, success:Function, failure: Function): void {

        this.httpRequest(
            "POST",
            "/api/v1/authentication/login",
            data,
            (response: any) => {
                ConnectionProxy.token = response.tokenData.token;

                success( response );
            },
            failure
        )

    }



    public signUp(data: any, success:Function, failure: Function): void {

        this.httpRequest(
            "POST",
            "/api/v1/authentication/sign-up",
            data,
            (response: any) => {
                ConnectionProxy.token = response.tokenData.token;

                success( response );
            },
            failure
        )

    }



    public getPropertyDefinitions(success: Function, failure: Function): void {
        console.info( "Proxy get property definitions executed." );

        this.httpRequest(
            "GET",
            "/api/v1/property-definitions/",
            null,
            success,
            failure
        );

    }



    public getPropertyDefinitionById(id: string, success: Function, failure: Function): void {
        this.httpRequest(
            "GET",
            "/api/v1/property-definitions/" + id,
            null,
            success,
            failure
        );
    }



    public createPropertyDefinition(data: IPropertyDefinition, success: Function, failure: Function): void {

        this.httpRequest(
            "POST",
            "/api/v1/property-definitions/",
            data,
            success,
            failure
        );
    }



    public editPropertyDefinitionName(data: any, success: Function, failure: Function): void {

        this.httpRequest(
          "PUT",
          "/api/v1/property-definitions/edit/",
          data,
          success,
          failure
        );
    }



    public deletePropertyDefinition(id: string, success: Function, failure: Function): void {
        this.httpRequest(
            "DELETE",
            "/api/v1/property-definitions/" + id,
            null,
            success,
            failure
        );
    }



    public setPropertyDefinitionRequired(data: any, success: Function, failure: Function): void {

        this.httpRequest(
            "PUT",
            "/api/v1/property-definitions/required",
            data,
            success,
            failure
        );

    }



    public getObjectTypes(success: Function, failure: Function): void {
        console.info( "Proxy get object type executed." );

        this.httpRequest(
            "GET",
            "/api/v1/object-types/",
            null,
            success,
            failure
        );

    }



    public getObjectTypeById(id: string, success: Function, failure: Function): void {
        this.httpRequest(
            "GET",
            "/api/v1/object-types/" + id,
            null,
            success,
            failure
        );
    }



    public createObjectType(data: any, success: Function, failure: Function): void {

        this.httpRequest(
            "POST",
            "/api/v1/object-types/",
            data,
            success,
            failure
        );

    }



    public editObjectType(data: any, success: Function, failure: Function): void {

        this.httpRequest(
            "PUT",
            "/api/v1/object-types/",
            data,
            success,
            failure
        );


    }



    public getOptions(success: Function, failure: Function): void {
        console.info( "Proxy get options executed." );

        this.httpRequest(
            "GET",
            "/api/v1/options/",
            null,
            success,
            failure
        );
    }



    public getOptionsById(id: string, success: Function, failure: Function): void {
        this.httpRequest(
            "GET",
            "/api/v1/options/" + id,
            null,
            success,
            failure
        );
    }



    public getObjects(success: Function, failure: Function): void {

        this.httpRequest(
            "GET",
            "/api/v1/objects/",
            null,
            success,
            failure
        );

    }



    public getObjectById(id: string, success: Function, failure: Function): void {
        this.httpRequest(
            "GET",
            "/api/v1/objects/" + id,
            null,
            success,
            failure
        );
    }



    //TODO should work via Search Conditions
    public getObjectByType(type: string, success: Function, failure: Function): void {
        this.httpRequest(
            "GET",
            "/api/v1/objects/type/" + type,
            null,
            success,
            failure
        );
    }



    public createObject(data: any, success: Function, failure: Function): void {

        this.httpRequest(
            "POST",
            "/api/v1/objects/",
            data,
            success,
            failure
        )

    }



    public editObject(data: any, success: Function, failure: Function): void {
        this.httpRequest(
            "PUT",
            "/api/v1/objects/",
            data,
            success,
            failure
        )
    }



    public deleteObject(id: string, success: Function, failure: Function): void {
        this.httpRequest(
            "DELETE",
            "/api/v1/objects/" + id,
            null,
            success,
            failure
        );
    }



    public searchForObjectsByConditions(data: any, success: Function, failure: Function): void {
        this.httpRequest(
            "POST",
            "/api/v1/objects/search",
            data,
            success,
            failure
        )
    }



    private httpRequest(method: string, endpoint: string, data: any, success: Function, failure: Function): XMLHttpRequest {

        let xhr = new XMLHttpRequest();

        xhr.open( method, this.address + endpoint, true );
        xhr.setRequestHeader('Content-type', 'application/json');
        xhr.setRequestHeader('Accept', 'application/json');
        if ( ConnectionProxy.token ) xhr.setRequestHeader('Authorization', ConnectionProxy.token );

        xhr.onload = () => {

            let response = JSON.parse( xhr.responseText );

            if ( response.success ) {

                if ( success ) success( response );

            } else {

                if ( failure ) failure( response.message );
            }
        };

        if ( data ) {
            xhr.send( JSON.stringify( data ) );
        } else {
            xhr.send();
        }

        return xhr;
    }


}