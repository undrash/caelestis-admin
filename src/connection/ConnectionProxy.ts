

import {CoreEntity} from "../core/CoreEntity";
import {IPropertyDefinition} from "./models/IPropertyDefinition";

export class ConnectionProxy extends CoreEntity {
    private address: string;



    constructor(proxyName: string) {
        super( proxyName );

        this.address = "http://192.168.0.101:4200";
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
        console.info( "Proxy create property definition executed." );

        this.httpRequest(
            "POST",
            "/api/v1/property-definitions/",
            data,
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
        )

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



    public getObjects(success: Function, failure: Function): void {

        this.httpRequest(
            "GET",
            "/api/v1/objects/",
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


    private httpRequest(method: string, endpoint: string, data: any, success: Function, failure: Function): XMLHttpRequest {

        let xhr = new XMLHttpRequest();

        xhr.open( method, this.address + endpoint, true );
        xhr.setRequestHeader('Content-type', 'application/json');
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