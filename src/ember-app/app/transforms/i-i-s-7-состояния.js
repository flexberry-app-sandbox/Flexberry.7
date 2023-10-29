import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import СостоянияEnum from '../enums/i-i-s-7-состояния';

export default FlexberryEnum.extend({
  enum: СостоянияEnum,
  sourceType: 'IIS.7.Состояния'
});
