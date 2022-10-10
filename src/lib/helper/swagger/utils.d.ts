/**
 * @license
 * Copyright Kant Yazılım A.Ş. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://clara.ist/license
 */

import { ColumnType } from 'typeorm/driver/types/ColumnTypes';
import { RelationTypeInFunction } from 'typeorm/metadata/types/RelationTypeInFunction';
import { Entity } from '../../types';

export declare function getRelationsOptions(entity: Entity): Record<string, RelationTypeInFunction>;
export declare function getOptionsFiled(entity: Entity): {};
export declare function jsonSchemaBody(entity: Entity, currentField: string[]): {
    data: {
        type: string;
        properties: {
            type: {
                type: string;
                enum: string[];
            };
            attributes: {
                type: string;
                properties: {};
                required: string[];
            };
            relationships: {
                type: string;
                properties: {};
                required: string[];
            };
        };
        required: string[];
    };
};
export declare function jsonSchemaResponse(entity: Entity, currentField: string[]): {
    type: string;
    properties: {
        meta: {
            type: string;
            properties: {
                debug: {
                    type: string;
                    properties: {
                        callQuery: {
                            type: string;
                        };
                        prepareParams: {
                            type: string;
                        };
                        transform: {
                            type: string;
                        };
                    };
                };
            };
        };
        data: {
            type: string;
            properties: {
                type: {
                    type: string;
                    enum: string[];
                };
                id: {
                    type: string;
                };
                attributes: {
                    type: string;
                    properties: {};
                };
                relationships: {
                    type: string;
                    properties: {};
                    required: string[];
                };
                links: {
                    type: string;
                    properties: {
                        self: {
                            type: string;
                        };
                    };
                    required: string[];
                };
            };
            required: string[];
        };
    };
    required: string[];
};
export declare function getColumOptions(entity: Entity): Record<string, ColumnType>;
export declare function getFakeObject(): void;
export declare function createApiModels(entity: Entity): Function;
