import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { fadeIn, fadeOut } from 'ember-animated/motions/opacity';
// import move from 'ember-animated/motions/move';

export default class StaffController extends Controller {
  @tracked showStaff = false;
  @tracked selectedAppt = null;

  @service store;
  @service media;

  // get getMobileClasses() {
  //   return this.media.mobile ? ' isMobile' : null;
  // }

  *transition({ insertedSprites, removedSprites }) {
    console.log(arguments[0]);
    // let left = document.getElementsByClassName('appt-container')[0].getBoundingClientRect().left || window.innerWidth;
    // let top = document.getElementsByClassName('appt-container')[0].getBoundingClientRect().top || window.innerHeight;
    // let isMobile = this.media.isMobile || false;

    removedSprites.forEach((sprite) => {
      fadeOut(sprite, { duration: 750 });
      // if (isMobile) {
      //   sprite.endAtPixel({y: top})
      // } else {
      //   sprite.endAtPixel({x: left})
      // }

      // fadeOut(sprite, {duration: 500});
      // yield move(sprite, {duration: duration * (3 / 4)});
    });

    insertedSprites.forEach((sprite) => {
      fadeIn(sprite, { duration: 750 });
      // if (isMobile) {
      //   sprite.startAtPixel({y: top})
      // } else {
      //   sprite.startAtPixel({x: left})
      // }

      // move(sprite, {duration: duration * (3 / 4)});
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

    this.toggleShowStaff(appt);
  }

  constructor(owner, args) {
    super(owner, args);

    this.transition = this.transition.bind(this);
  }
}
