/**
 * @license
 * Copyright Kant Yazılım A.Ş. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://clara.ist/license
 */

import { Repository } from 'typeorm';
import { ConfigParam, JsonApiServiceMethode, ServiceOptions } from '../../../types';
import { Meta, Relationship, ResourceObject } from '../../../types-common';
import { TransformMixinService } from '../transform/transform.mixin';
import { UtilsMethode } from './utils/utils-methode';

export declare class TypeormMixinService<Entity> implements JsonApiServiceMethode<Entity> {
	protected repository: Repository<Entity>;
	protected config: ConfigParam;
	protected transform: TransformMixinService<Entity>;
	protected UtilsMethode: typeof UtilsMethode;
	constructor(repository: Repository<Entity>, config: ConfigParam, transform: TransformMixinService<Entity>);
	getAll(this: TypeormMixinService<Entity>, options: ServiceOptions<Entity>): Promise<ResourceObject<Entity>>;
	getOne(options: ServiceOptions<Entity>): Promise<ResourceObject<Entity>>;
	deleteOne(options: ServiceOptions<Entity>): Promise<void>;
	postOne(options: ServiceOptions<Entity>): Promise<ResourceObject<Entity>>;
	patchOne(options: ServiceOptions<Entity>): Promise<ResourceObject<Entity>>;
	getRelationship(options: ServiceOptions<Entity>): Promise<{
        meta?: Partial<Meta>;
    } & Relationship<Entity>>;
	deleteRelationship(options: ServiceOptions<Entity>): Promise<void>;
	postRelationship(options: ServiceOptions<Entity>): Promise<{
        meta?: Partial<Meta>;
    } & Relationship<Entity>>;
	patchRelationship(options: ServiceOptions<Entity>): Promise<{
        meta?: Partial<Meta>;
    } & Relationship<Entity>>;
}
