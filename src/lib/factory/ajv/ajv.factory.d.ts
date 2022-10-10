/**
 * @license
 * Copyright Kant Yazılım A.Ş. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://clara.ist/license
 */

import { FactoryProvider } from '@nestjs/common/interfaces/modules/provider.interface';
import AjvCall from 'ajv';
import { DataSource } from 'typeorm';
import { ModuleOptions } from '../../types';

export declare function AjvCallFactory(dataSource: DataSource, options: ModuleOptions): AjvCall;
export declare const ajvFactory: FactoryProvider<AjvCall>;
