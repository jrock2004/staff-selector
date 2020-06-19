import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { fadeOut } from 'ember-animated/motions/opacity';
import move from 'ember-animated/motions/move';

export default class StaffController extends Controller {
  anyStaffImg = 'https://img2.pngio.com/profile-male-persona-profile-male-user-avatar-svg-png-icon-free-user-avatar-png-981_878.png';
  anyStaffDesc = 'Maximize number of available appointment times.';

  @tracked showStaff = false;
  @tracked selectedAppt = null;

  @service store;

  *transition({ insertedSprites, removedSprites, duration }) {
    let left = document.getElementsByClassName('appt-container')[0].getBoundingClientRect().left || window.innerWidth;
    for (let sprite of removedSprites) {
      yield fadeOut(sprite)
    }

    for (let sprite of insertedSprites) {
      sprite.startAtPixel({x: left})
      move(sprite, {duration: duration / 2});
    }
  }

  @action
  toggleShowStaff(apptSelected) {
    if (this.selectedAppt && this.selectedAppt === apptSelected.id) {
      this.selectedAppt = null;
      this.showStaff = !this.showStaff;
    } else {
      this.selectedAppt = apptSelected.id;
      this.showStaff = true;
    }
  }

  @action
  setStaff(staff) {
    let appt = this.store.peekRecord('appt-card', this.selectedAppt);

    appt.staff = staff;

    this.selectedAppt = null;
    this.showStaff = !this.showStaff;
  }
}
