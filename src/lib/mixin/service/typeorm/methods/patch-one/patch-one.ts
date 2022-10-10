/**
 * @license
 * Copyright Kant Yazılım A.Ş. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://clara.ist/license
 */


import {
	NotFoundException,
	UnprocessableEntityException,
} from '@nestjs/common';
import { Equal } from 'typeorm';
import { FindOptionsWhere } from 'typeorm/find-options/FindOptionsWhere';

import { snakeToCamel } from '../../../../../helper';
import { ServiceOptions } from '../../../../../types';
import { ResourceObject } from '../../../../../types-common';
import { ResourceRequestObject } from '../../../../../types-common/request';
import { TypeormMixinService } from '../../typeorm.mixin';

export async function patchOne<T>(
	this: TypeormMixinService<T>,
	options: ServiceOptions<T>
): Promise<ResourceObject<T>> {
	const startTime = Date.now();
	const preparedResourceName = snakeToCamel(this.repository.metadata.name);
	const {
		route: { id: id },
	} = options;
	const body = options.body as ResourceRequestObject<T>['data'];
	const { id: idBody, attributes, relationships } = body;

	if (id !== parseInt(idBody, 10)) {
		throw new UnprocessableEntityException({
			source: { pointer: '/data/id' },
			detail: "Data 'id' must be equal to url param",
		});
	}

	const whereCondition = {
		id: Equal(id),
	} as unknown as FindOptionsWhere<T>;

	const target = await this.repository.findOne({
		where: whereCondition,
	});
	if (!target) {
		throw new NotFoundException({
			detail: `Resource '${preparedResourceName}' with id '${id}' does not exist`,
		});
	}
	const prepareParams = Date.now() - startTime;

	for (const attr in attributes) {
		target[attr] = attributes[attr];
	}
	const relationshipsArray = [];
	if (relationships) {
		for await (const relationshipsTarget of this.UtilsMethode.asyncIterateFindRelationships(
			relationships,
			this.repository
		)) {
			relationshipsArray.push(relationshipsTarget.propsName);
			target[relationshipsTarget.propsName] = relationshipsTarget.rel;
		}
	}
	const callQuery = Date.now() - startTime;

	return this.repository.save<T>(target).then((r) => {
		const returnData = Object.keys(r).reduce((acum, item) => {
			if (!relationshipsArray.includes(item)) {
				acum[item] = r[item];
			}

			return acum;
		}, {} as T);
		const resultTransform = this.transform.transformData(returnData, []);
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
			data: resultTransform,
		};
	});
}
