import { RequestMethod } from '@nestjs/common';
import { controllerMethod, PipeFabric } from '.';
export declare type BindingsConfig = {
    [key in MethodName]: Binding;
};
export interface Binding {
    path: string;
    method: RequestMethod;
    name: MethodName;
    implementation: controllerMethod;
    parameters: {
        decorator: Function;
        property?: string;
        mixins: PipeFabric[];
    }[];
}
export declare type MethodName = 'getAll' | 'getOne' | 'getRelationship' | 'getDirectAll' | 'getDirectOne' | 'deleteOne' | 'deleteRelationship' | 'postOne' | 'postRelationship' | 'patchOne' | 'patchRelationship';
