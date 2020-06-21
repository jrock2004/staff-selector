import Component from '@glimmer/component';

export default class StaffListComponent extends Component {
  get filteredStaff() {
    let selectedAppt = +this.args.selectedAppt;

    if (selectedAppt === 2) {
      return this.args.staffList.filter((staff, index) => {
        let isEven = index % 2 === 0;

        if (isEven) return staff;
      });
    } else {
      return this.args.staffList;
    }
  }
}
