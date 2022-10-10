/**
 * @license
 * Copyright Kant Yazılım A.Ş. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://clara.ist/license
 */


import { Inject } from '@nestjs/common';

import { JSON_API_SERVICE_POSTFIX } from '../../constants';
import { getProviderName } from '../../helper';

export function InjectService(): PropertyDecorator {
	return (target, key) => {
		Inject(getProviderName(target.constructor, JSON_API_SERVICE_POSTFIX))(
			target,
			key
		);
	};
}
