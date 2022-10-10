/**
 * @license
 * Copyright Kant Yazılım A.Ş. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://clara.ist/license
 */

import { EntityMetadata, Repository, SelectQueryBuilder } from 'typeorm';
import { ObjectLiteral } from 'typeorm/common/ObjectLiteral';
import { RelationMetadata } from 'typeorm/metadata/RelationMetadata';
import { Filter, ServiceOptions } from '../../../../types';
import { ResourceRequestObject } from '../../../../types-common/request';

export declare type ResultQueryExpression = {
    expression: string;
    params: {
        name: string;
        val: string;
    } | null;
    selectInclude?: string;
};
export declare class UtilsMethode {
	static relationNameMapByEntity: Map<string, Set<string>>;
	static getParamName(field: string, i: number): string;
	static applyQueryFiltersTarget<T>(builder: SelectQueryBuilder<T>, filter: Filter<T>['target'], metadata: EntityMetadata): ResultQueryExpression[];
	static applyQueryFilterRelation<T>(builder: SelectQueryBuilder<T>, filter: Filter<T>['relation'], metadata: EntityMetadata): ResultQueryExpression[];
	static asyncIterateFindRelationships<T>(relationships: ResourceRequestObject<T>['data']['relationships'], repository: Repository<T>): AsyncIterable<{
        propsName: string;
        type: string;
        rel: ObjectLiteral | ObjectLiteral[];
        id: string | string[];
    }>;
	static validateRelationRequestData<T>(repository: Repository<T>, id: number, relName: string, body: ServiceOptions<T>['body']): Promise<{
        item: T;
        rel: ObjectLiteral | ObjectLiteral[];
        relationItem: RelationMetadata;
    }>;
}
