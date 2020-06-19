import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class ApptCardComponent extends Component {
  get isSelected() {
    return this.args.appt.id === this.args.selectedAppt;
  }

  @action
  selectCard() {
    this.args.toggleShowStaffEvent(this.args.appt);
  }
}
