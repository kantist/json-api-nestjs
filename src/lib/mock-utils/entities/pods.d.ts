/**
 * @license
 * Copyright Kant Yazılım A.Ş. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://clara.ist/license
 */

import { IRequests } from '.';

export declare type IPods = Pods;
export declare class Pods {
	id: number;
	name: string;
	createdAt: Date;
	updatedAt: Date;
	lockedRequests: IRequests[];
}
