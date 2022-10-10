/**
 * @license
 * Copyright Kant Yazılım A.Ş. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://clara.ist/license
 */

import { ElementType, EntityProps, EntityRelation } from './common';

declare type ValueOf<T> = T[keyof T];
declare type Includes<T> = {
    [P in EntityRelation<T>]: ResourceData<ElementType<T[P]>>;
};
export declare type PageProps = {
    totalItems: number;
    pageNumber: number;
    pageSize: number;
};
export declare type Meta = PageProps & {
    debug?: {
        prepareParams: number;
        callQuery: number;
        transform: number;
    };
};
export declare type Links = {
    self: string;
    related?: string;
};
export declare type Attributes<D> = {
    [P in EntityProps<D>]: ElementType<D[P]>;
};
export declare type RelationshipData<T> = Pick<ResourceData<T>, 'type' | 'id'>;
export declare type Relationship<T> = {
    data?: T extends (infer U)[] ? RelationshipData<T>[] : RelationshipData<T>;
    links?: Links;
};
export declare type Relationships<T> = {
    [P in EntityRelation<T>]: Relationship<T[P]>;
};
export declare type ResourceData<T> = {
    type: string;
    id: string;
    attributes?: Attributes<Omit<T, 'id'>>;
    relationships?: Partial<Relationships<T>>;
    links?: Links;
};
export declare type ResourceObject<T> = {
    meta?: Partial<Meta>;
    data: ResourceData<T> | ResourceData<T>[];
    included?: ValueOf<Includes<T>>[];
};
export {};
