/**
 * @license
 * Copyright Kant Yazılım A.Ş. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://clara.ist/license
 */

import { MethodName } from './binding.types';
import { ConfigParam } from './module.types';

export declare type DecoratorOptions = Partial<{
    allowMethod: Array<MethodName>;
} & ConfigParam>;
