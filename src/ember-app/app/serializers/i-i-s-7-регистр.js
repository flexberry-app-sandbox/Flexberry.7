import { Serializer as РегистрSerializer } from
  '../mixins/regenerated/serializers/i-i-s-7-регистр';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(РегистрSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
