/**
 * @license
 * Copyright Kant Yazılım A.Ş. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://clara.ist/license
 */

import { ControllerTypes, JsonApiServiceMethode, QueryParams } from '../../../types';
import { Relationship, ResourceRequestObject } from '../../../types-common';
import { TypeormMixinService } from '../../service/typeorm/typeorm.mixin';

export declare class JsonBaseController<Entity> implements ControllerTypes<Entity> {
	serviceMixin: TypeormMixinService<Entity>;
	getAll(query: QueryParams<Entity>, rest: any): ReturnType<JsonApiServiceMethode<Entity>['getAll']>;
	getOne(id: number, query: QueryParams<Entity>, rest: any): ReturnType<JsonApiServiceMethode<Entity>['getOne']>;
	deleteOne(id: number, rest: any): ReturnType<JsonApiServiceMethode<Entity>['deleteOne']>;
	postOne(body: ResourceRequestObject<Entity>['data'], rest: any): ReturnType<JsonApiServiceMethode<Entity>['postOne']>;
	patchOne(id: number, body: ResourceRequestObject<Entity>['data'], rest: any): ReturnType<JsonApiServiceMethode<Entity>['patchOne']>;
	getRelationship(id: number, relName: string, rest: any): ReturnType<JsonApiServiceMethode<Entity>['getRelationship']>;
	deleteRelationship(id: number, relName: string, body: Exclude<Relationship<Entity>['data'], 'links'>, rest: any): ReturnType<JsonApiServiceMethode<Entity>['deleteRelationship']>;
	patchRelationship(id: number, relName: string, body: Exclude<Relationship<Entity>['data'], 'links'>, rest: any): ReturnType<JsonApiServiceMethode<Entity>['patchRelationship']>;
	postRelationship(id: number, relName: string, body: Exclude<Relationship<Entity>['data'], 'links'>, rest: any): ReturnType<JsonApiServiceMethode<Entity>['postRelationship']>;
}
