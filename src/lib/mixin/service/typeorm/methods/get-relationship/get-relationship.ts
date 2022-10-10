/**
 * @license
 * Copyright Kant Yazılım A.Ş. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://clara.ist/license
 */


import { NotFoundException } from '@nestjs/common';
import { Equal } from 'typeorm';
import { FindOptionsRelations } from 'typeorm/find-options/FindOptionsRelations';
import { FindOptionsSelect } from 'typeorm/find-options/FindOptionsSelect';
import { FindOptionsWhere } from 'typeorm/find-options/FindOptionsWhere';
import { snakeToCamel } from '../../../../../helper';
import { ServiceOptions } from '../../../../../types';
import { Meta, Relationship } from '../../../../../types-common';
import { TypeormMixinService } from '../../typeorm.mixin';

export async function getRelationship<T>(
	this: TypeormMixinService<T>,
	options: ServiceOptions<T>
): Promise<
  {
    meta?: Partial<Meta>;
  } & Relationship<T>
> {
	const startTime = Date.now();
	const preparedResourceName = snakeToCamel(this.repository.metadata.name);
	const { relName, id } = options.route;
	const prepareParams = Date.now() - startTime;
	const whereCondition = {
		id: Equal(id),
	} as unknown as FindOptionsWhere<T>;

	const findOptionsRelations = {
		[relName]: true,
	} as FindOptionsRelations<T>;

	const primaryColumns =
    this.repository.metadata.primaryColumns[0].propertyName;
	const relPrimaryColumns = this.repository.metadata.relations.filter(
		(i) => i.propertyName === relName
	)[0].inverseEntityMetadata.primaryColumns[0].propertyName;

	const findOptionsSelect = {
		[primaryColumns]: true,
		[relName]: {
			[relPrimaryColumns]: true,
		},
	} as FindOptionsSelect<T>;

	const callQuery = Date.now() - startTime;

	const result = await this.repository.findOne({
		select: findOptionsSelect,
		where: whereCondition,
		relations: findOptionsRelations,
	});
	if (!result) {
		throw new NotFoundException({
			detail: `Resource '${preparedResourceName}' with id '${id}' does not exist`,
		});
	}

	const transform = Date.now() - startTime;
	const debug = {
		prepareParams,
		callQuery: callQuery - prepareParams,
		transform: transform - callQuery,
	};

	return {
		meta: {
			...(this.config.debug ? { debug } : {}),
		},
		data: this.transform.transformData(result, [relName])['relationships'][
			relName
		]['data'],
	};
}
