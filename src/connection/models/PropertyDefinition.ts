

import {IPropertyDefinition} from "./IPropertyDefinition";

export class PropertyDefinition implements IPropertyDefinition {
    public name: string;
    public dataType: number;
    public requiredFor: string[];

    constructor(name: string, dataType: number, requiredFor: string[]) {
        this.name           = name;
        this.dataType       = dataType;
        this.requiredFor    = requiredFor;
    }
}