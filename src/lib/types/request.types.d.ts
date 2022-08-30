export declare const enum SortDirection {
    DESC = "DESC",
    ASC = "ASC"
}
export declare type Pagination = {
    number: number;
    size: number;
};
export declare type FilterRule = {
    [key: string]: string | string[];
};
export declare type Filters = {
    [key: string]: FilterRule;
};
export declare type Includes = string[];
export declare type SortRules = {
    [key: string]: SortDirection;
};
export declare const enum QueryField {
    filter = "filter",
    sort = "sort",
    include = "include",
    page = "page"
}
export interface QueryParams {
    [QueryField.filter]: Filters;
    [QueryField.include]: Includes;
    [QueryField.sort]: SortRules;
    [QueryField.page]: Pagination;
    needAttribute?: boolean;
}
export interface RouteParams {
    id?: string;
    relName?: string;
    relId?: string;
}
export declare type RequestRelationshipsData = RequestRelationshipsObject['data'];
export declare type RequestResourceData = RequestResourceObject['data'];
export interface RequestResourceObject {
    data: {
        attributes: RequestAttributesObject;
        relationships: {
            [key: string]: RequestRelationshipsObject;
        };
    } & BaseData;
}
export interface RequestRelationshipsObject {
    data: BaseData | BaseData[];
}
export interface RequestAttributesObject {
    [key: string]: any;
}
export interface BaseData {
    type: string;
    id: string;
    attributes?: RequestAttributesObject;
}
