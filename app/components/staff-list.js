import Component from '@glimmer/component';
import move from 'ember-animated/motions/move';
import { fadeOut } from 'ember-animated/motions/opacity';

export default class StaffListComponent extends Component {
  get filteredStaff() {
    let selectedAppt = +this.args.selectedAppt;

    if (selectedAppt === 2) {
      return this.args.staffList.filter((staff, index) => {
        let isEven = index%2 === 0;

        if (isEven)
          return staff;
      });
    } else {
      return this.args.staffList;
    }
  }

  * transition({ keptSprites, removedSprites }) {
    for (let sprite of keptSprites) {
      move(sprite);
    }

    for (let sprite of removedSprites) {
      fadeOut(sprite);
    }
  }
}
