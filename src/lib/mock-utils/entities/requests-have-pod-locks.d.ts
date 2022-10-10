/**
 * @license
 * Copyright Kant Yazılım A.Ş. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://clara.ist/license
 */

export declare type IRequestsHavePodLocks = RequestsHavePodLocks;
export declare class RequestsHavePodLocks {
	id: number;
	protected getRequestId(): void;
	protected setRequestId(): void;
	requestId: number;
	protected getPodId(): void;
	protected setPodId(): void;
	podId: number;
	protected request_id: number;
	protected pod_id: number;
	createdAt: Date;
	updatedAt: Date;
	externalId: number;
}
