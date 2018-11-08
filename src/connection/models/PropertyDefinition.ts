

import {IPropertyDefinition} from "./IPropertyDefinition";

export class PropertyDefinition implements IPropertyDefinition {
    public name: string;
    public dataType: number;
    public objectType: string;
    public options: string;
    public requiredFor: string[];

    constructor(name: string, dataType: number, objectType: string, options: string, requiredFor: string[]) {
        this.name           = name;
        this.dataType       = dataType;
        this.objectType     = objectType;
        this.options        = options;
        this.requiredFor    = requiredFor;
    }
}