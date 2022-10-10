/**
 * @license
 * Copyright Kant Yazılım A.Ş. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://clara.ist/license
 */

import { IUsers } from '.';

export declare type IAddresses = Addresses;
export declare class Addresses {
	id: number;
	city: string;
	state: string;
	country: string;
	arrayField: string[];
	createdAt: Date;
	updatedAt: Date;
	user: IUsers;
}
