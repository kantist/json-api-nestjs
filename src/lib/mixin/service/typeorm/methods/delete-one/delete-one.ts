/**
 * @license
 * Copyright Kant Yazılım A.Ş. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://clara.ist/license
 */


import { NotFoundException } from '@nestjs/common';

import { snakeToCamel } from '../../../../../helper';
import { ServiceOptions } from '../../../../../types';
import { TypeormMixinService } from '../../typeorm.mixin';

export async function deleteOne<T>(
	this: TypeormMixinService<T>,
	options: ServiceOptions<T>
): Promise<void> {
	const preparedResourceName = snakeToCamel(this.repository.metadata.name);
	const { id } = options.route;

	const builder = this.repository.createQueryBuilder(preparedResourceName);
	builder.where({ id });

	const result = await builder.getOne();
	if (!result) {
		throw new NotFoundException({
			detail: `Resource '${preparedResourceName}' with id '${id}' does not exist`,
		});
	}

	await this.repository
		.createQueryBuilder(preparedResourceName)
		.delete()
		.where({ id })
		.execute();

	return void 0;
}
