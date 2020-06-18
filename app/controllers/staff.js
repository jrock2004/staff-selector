import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class StaffController extends Controller {
  anyStaffImg = 'https://img2.pngio.com/profile-male-persona-profile-male-user-avatar-svg-png-icon-free-user-avatar-png-981_878.png';
  anyStaffDesc = 'Maximize number of available appointment times.';

  @tracked showStaff = false;
  @tracked selectedAppt = null;

  @service store;

  @action
  toggleShowStaff(apptSelected) {
    if (this.selectedAppt && this.selectedAppt === apptSelected.id) {
      this.selectedAppt = null;
      this.showStaff = !this.showStaff;
    } else {
      this.selectedAppt = apptSelected.id;
      this.showStaff = !this.showStaff;
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
