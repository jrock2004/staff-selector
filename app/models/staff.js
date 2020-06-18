import Model, { attr, hasMany } from '@ember-data/model';

export default class StaffModel extends Model {
  @attr('string') firstName;
  @attr('string') lastName;
  @attr('string') img;
  @attr('string') description;

  @hasMany('appt-card') apptCards;

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
