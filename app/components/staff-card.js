import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class StaffCardComponent extends Component {
  @service media;

  get getMobileClasses() {
    return this.media.mobile ? ' isMobileStaff' : null;
  }
}
