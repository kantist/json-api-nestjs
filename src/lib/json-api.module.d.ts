/**
 * @license
 * Copyright Kant Yazılım A.Ş. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://clara.ist/license
 */

import { DynamicModule } from '@nestjs/common';
import { ModuleOptions } from '../lib/types';

export declare class JsonApiModule {
	private static connectionName;
	static forRoot(options: ModuleOptions): DynamicModule;
}
