

import {CoreEntity} from "./CoreEntity";

export class ConnectionProxy extends CoreEntity {
    private address: string;



    constructor(proxyName: string) {
        super( proxyName );

        this.address = "http://138.68.82.238:4200";
    }


}