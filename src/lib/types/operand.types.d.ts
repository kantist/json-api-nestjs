export declare enum FilterOperand {
    eq = "eq",
    gt = "gt",
    gte = "gte",
    in = "in",
    like = "like",
    lt = "lt",
    lte = "lte",
    ne = "ne",
    nin = "nin",
    regexp = "regexp",
    some = "some"
}
export declare type ConvertedFilter = {
    condition: string;
    parameters: {
        [key: string]: any;
    };
    type: 'where' | 'andWhere';
}[];
export declare type ReversOperand = '= :EXPRESSION' | '> :EXPRESSION' | '>= :EXPRESSION' | 'IN (:...EXPRESSION)' | 'LIKE %:EXPRESSION%' | '< :EXPRESSION' | '<= :EXPRESSION' | '<> :EXPRESSION' | 'NOT IN (:...EXPRESSION)' | 'REGEXP ' | '&& :EXPRESSION';
export declare const OperandsMap: {
    eq: string;
    regexp: string;
    gt: string;
    gte: string;
    in: string;
    like: string;
    lt: string;
    lte: string;
    ne: string;
    nin: string;
    some: string;
};
