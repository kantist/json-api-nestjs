/**
 * @license
 * Copyright Kant Yazılım A.Ş. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://clara.ist/license
 */

import { Binding, ConfigParam, Entity, NestController } from '../../../types';

export declare function patchOne(controller: NestController, entity: Entity, binding: Binding<'patchOne'>, config: ConfigParam): void;
