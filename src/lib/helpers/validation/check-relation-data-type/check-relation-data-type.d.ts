import { RelationMetadata } from 'typeorm/metadata/RelationMetadata';
import { ValidationError, BaseData } from '../../../types';
export declare function checkRelationDataType(relationData: BaseData | BaseData[], relationMetadata: RelationMetadata): Promise<ValidationError[]>;
