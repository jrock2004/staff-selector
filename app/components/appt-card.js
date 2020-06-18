import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ApptCardComponent extends Component {
  @tracked isSelected2 = false;

  get isSelected() {
    return this.args.appt.id === this.args.selectedAppt;
  }

  // get staff() {
  //   console.log('staff was fired');

  //   const apptStaffId = this.args.appt.staff.get('id');
  //   console.log(apptStaffId);

  //   let temp = this.args.staffList.find(staff => {
  //     console.log(staff.id, apptStaffId);

  //     return staff.id === apptStaffId;
  //   });

  //   console.log('------');


  //   return temp;
  // }

  @action
  selectCard() {
    this.args.toggleShowStaffEvent(this.args.appt);
  }
}
