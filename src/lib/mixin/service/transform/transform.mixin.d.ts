/**
 * @license
 * Copyright Kant Yazılım A.Ş. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://clara.ist/license
 */

import { ApplicationConfig } from '@nestjs/core';
import { Repository } from 'typeorm';
import { ConfigParam } from '../../../types';
import { ResourceData, ResourceObject } from '../../../types-common';

export declare class TransformMixinService<T> {
	protected repository: Repository<T>;
	protected config: ConfigParam;
	protected applicationConfig: ApplicationConfig;
	private currentResourceName;
	private currentPrimaryField;
	private relationPrimaryField;
	private relationColumns;
	private commonColumns;
	private commonColumnsForRelation;
	private relationColumnsForRelation;
	private relationTarget;
	private isArrayRelations;
	private routePathFactory?;
	constructor(repository: Repository<T>, config: ConfigParam, applicationConfig: ApplicationConfig);
	transformRawData(data: any): T[];
	transformData<T>(data: T, include?: string[], table?: string): ResourceData<T>;
	transformInclude<T>(data: T[]): ResourceObject<T>['included'];
	private getPrefixArray;
	private getLink;
}
