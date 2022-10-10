/**
 * @license
 * Copyright Kant Yazılım A.Ş. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://clara.ist/license
 */


import { BadRequestException, PipeTransform } from '@nestjs/common';
import { Repository } from 'typeorm';
import { getEntityName, snakeToCamel } from '../../../helper';

export class ParseRelationshipNamePipe<Entity> implements PipeTransform {
	constructor(protected repository: Repository<Entity>) {}

	transform(value: string): string {
		const relation = this.repository.metadata.relations.find((relation) => {
			return relation.propertyPath === value;
		});

		if (!relation) {
			const name = snakeToCamel(getEntityName(this.repository.target));
			throw new BadRequestException([
				{
					detail: `Relation '${value}' does not exist in resource '${name}'`,
				},
			]);
		}

		return value;
	}
}
