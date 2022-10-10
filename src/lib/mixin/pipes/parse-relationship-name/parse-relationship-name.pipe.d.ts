/**
 * @license
 * Copyright Kant Yazılım A.Ş. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://clara.ist/license
 */

import { PipeTransform } from '@nestjs/common';
import { Repository } from 'typeorm';

export declare class ParseRelationshipNamePipe<Entity> implements PipeTransform {
	protected repository: Repository<Entity>;
	constructor(repository: Repository<Entity>);
	transform(value: string): string;
}
