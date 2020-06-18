import Model, { attr, belongsTo } from '@ember-data/model';

export default class ApptCardModel extends Model {
  @attr('string') serviceName;

  @belongsTo('staff') staff;
}
