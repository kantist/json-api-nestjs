import { RelationMetadata } from 'typeorm/metadata/RelationMetadata';
import { ValidationError, BaseData } from '../../../types';
export declare function checkRelationDataBasicInfo(relationData: BaseData | BaseData[], relationMetadata: RelationMetadata, isDataRequired?: boolean): Promise<ValidationError[]>;
