/**
 * @license
 * Copyright Kant Yazılım A.Ş. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://clara.ist/license
 */

import { Relationship, ResourceRequestObject } from '../types-common';
import { QueryParams } from './query.types';
import { JsonApiServiceMethode } from './service.types';

export interface ControllerTypes<Entity> {
    serviceMixin: JsonApiServiceMethode<Entity>;
    getAll: (query: QueryParams<Entity>, ...rest: any[]) => ReturnType<JsonApiServiceMethode<Entity>['getAll']>;
    getOne: (id: number, query: QueryParams<Entity>, ...rest: any[]) => ReturnType<JsonApiServiceMethode<Entity>['getOne']>;
    deleteOne: (id: number, ...rest: any[]) => ReturnType<JsonApiServiceMethode<Entity>['deleteOne']>;
    postOne: (body: ResourceRequestObject<Entity>['data'], ...rest: any[]) => ReturnType<JsonApiServiceMethode<Entity>['postOne']>;
    patchOne: (id: number, body: ResourceRequestObject<Entity>['data'], ...rest: any[]) => ReturnType<JsonApiServiceMethode<Entity>['patchOne']>;
    getRelationship: (id: number, relName: string, ...rest: any[]) => ReturnType<JsonApiServiceMethode<Entity>['getRelationship']>;
    deleteRelationship: (id: number, relName: string, body: Exclude<Relationship<Entity>['data'], 'links'>, ...rest: any[]) => ReturnType<JsonApiServiceMethode<Entity>['deleteRelationship']>;
    postRelationship: (id: number, relName: string, body: Exclude<Relationship<Entity>['data'], 'links'>, ...rest: any[]) => ReturnType<JsonApiServiceMethode<Entity>['postRelationship']>;
    patchRelationship: (id: number, relName: string, body: Exclude<Relationship<Entity>['data'], 'links'>, ...rest: any[]) => ReturnType<JsonApiServiceMethode<Entity>['patchRelationship']>;
}
