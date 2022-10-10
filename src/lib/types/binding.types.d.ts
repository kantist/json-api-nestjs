/**
 * @license
 * Copyright Kant Yazılım A.Ş. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://clara.ist/license
 */

import { RequestMethod } from '@nestjs/common';
import { ControllerTypes } from './controller.types';
import { PipeFabric } from './module.types';

export declare type MethodName = 'getAll' | 'getOne' | 'getRelationship' | 'deleteOne' | 'deleteRelationship' | 'postOne' | 'postRelationship' | 'patchOne' | 'patchRelationship';
declare type MapNameToTypeMethod = {
    getAll: RequestMethod.GET;
    getOne: RequestMethod.GET;
    patchOne: RequestMethod.PATCH;
    patchRelationship: RequestMethod.PATCH;
    postOne: RequestMethod.POST;
    postRelationship: RequestMethod.POST;
    deleteOne: RequestMethod.DELETE;
    deleteRelationship: RequestMethod.DELETE;
    getRelationship: RequestMethod.GET;
};
export interface Binding<T extends MethodName> {
    path: string;
    method: MapNameToTypeMethod[T];
    name: T;
    implementation: ControllerTypes<any>[T];
    parameters: {
        decorator: ParameterDecorator;
        property?: string;
        mixins: PipeFabric[];
    }[];
}
export declare type BindingsConfig = {
    [Key in MethodName]: Binding<Key>;
};
export {};
