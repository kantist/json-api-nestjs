/**
 * @license
 * Copyright Kant Yazılım A.Ş. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://clara.ist/license
 */

import { BindingsConfig, MethodName } from '../types';

declare const Bindings: BindingsConfig;
export { Bindings };
export declare function excludeMethod(names: Array<Partial<MethodName>>): Array<MethodName>;
