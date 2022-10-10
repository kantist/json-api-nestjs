/**
 * @license
 * Copyright Kant Yazılım A.Ş. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://clara.ist/license
 */


import { ConfigParam } from '../types';

export const DEFAULT_QUERY_PAGE = 1;
export const DEFAULT_PAGE_SIZE = 20;
export const DEFAULT_CONNECTION_NAME = 'default';

export const ConfigParamDefault: ConfigParam = {
	debug: true,
	maxExecutionTime: 5000,
	requiredSelectField: true,
};
