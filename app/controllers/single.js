import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { fadeIn, fadeOut } from 'ember-animated/motions/opacity';

export default class SingleController extends Controller {
  @tracked showStaff = false;
  @tracked selectedAppt = null;

  @service store;
  @service media;

  *transition({ insertedSprites, removedSprites }) {
    removedSprites.forEach((sprite) => {
      fadeOut(sprite, { duration: 750 });
    });

    insertedSprites.forEach((sprite) => {
      fadeIn(sprite, { duration: 750 });
    });
  }

  @action
  toggleShowStaff(apptSelected) {
    if (this.selectedAppt && this.selectedAppt === apptSelected.id) {
      this.showStaff = !this.showStaff;
      this.selectedAppt = null;
    } else {
      this.selectedAppt = apptSelected.id;
      this.showStaff = true;
    }
  }

  @action
  setStaff(staff) {
    let appt = this.store.peekRecord('appt-card', this.selectedAppt);

    appt.staff = staff;

    // For single service we do not want to close staff
    // this.toggleShowStaff(appt);
  }

  constructor(owner, args) {
    super(owner, args);

    this.transition = this.transition.bind(this);
  }
}
