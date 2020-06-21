import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default class SingleRoute extends Route {
  model() {
    return hash({
      apptCards: this.store.peekAll('appt-card').filter((appt, index) => {
        if (index === 0) return appt;
      }),
      staff: this.store.peekAll('staff'),
    });
  }

  setupController(controller, model) {
    super.setupController(controller, model);

    const selectedCard = model.apptCards.firstObject.id;

    if (model.apptCards.length === 1) {
      this.controller.selectedAppt = selectedCard;
      this.controller.showStaff = true;
    }
  }
}
