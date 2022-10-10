/**
 * @license
 * Copyright Kant Yazılım A.Ş. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://clara.ist/license
 */

import { DynamicModule } from '@nestjs/common';
import { Addresses, Comments, Pods, Requests, RequestsHavePodLocks, Roles, Users } from './entities';

export * from './entities';
export declare const entities: (typeof Users | typeof Addresses | typeof Roles | typeof Comments | typeof RequestsHavePodLocks | typeof Requests | typeof Pods)[];
export declare function mockDBTestModule(): DynamicModule;
