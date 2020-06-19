import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default class StaffRoute extends Route {
  beforeModel() {

    this.store.push({
      data: [
        {
          id: 1,
          type: 'staff',
          attributes: {
            firstName: 'any available',
            lastName: 'staff',
            img: 'assets/images/anyone.png',
            description: 'Maximize number of available appointment times.'
          }
        },
        {
          id: 2,
          type: 'staff',
          attributes: {
            firstName: 'Lucy',
            lastName: 'Heartfilia',
            img: 'assets/images/lucy.jpg',
            description: 'A teenage wizard and aspiring novelist who joins the titular guild due to its popularity, despite its members tendency to cause unintentional property damage'
          }
        },
        {
          id: 3,
          type: 'staff',
          attributes: {
            firstName: 'Erza',
            lastName: 'Scarlet',
            img: 'assets/images/erza.jpg',
            description: null,
          }
        },
        {
          id: 4,
          type: 'staff',
          attributes: {
            firstName: 'Hit',
            lastName: 'Assassin',
            img: 'assets/images/hit.jpg',
            description: 'Hit is a tall, muscular humanoid with purple skin, flattened ears, a bald head, and red eyes. He wears a long, turtleneck, dark purple cyan undershirt, dark purple elbow and knee pads.'
          }
        },
        {
          id: 5,
          type: 'staff',
          attributes: {
            firstName: 'Mavis',
            lastName: 'Vermilion',
            img: 'assets/images/mavis.png',
            description: 'The first guild master and co-founder of the Fairy Tail Guild.'
          }
        },
        {
          id: 6,
          type: 'staff',
          attributes: {
            firstName: 'Saitama',
            lastName: 'Charanko',
            img: 'assets/images/saitama.png',
            description: 'Just an average guy who serves as an average hero'
          }
        }
      ]
    });

    let anyone = this.store.peekRecord('staff', 1);

    this.store.push({
      data: [
        {
          id: 1,
          type: 'appt-card',
          attributes: {
            serviceName: 'Tryout Clinics',
          }
        },
        {
          id: 2,
          type: 'appt-card',
          attributes: {
            serviceName: 'Stunt Clinics',
            staff: anyone
          }
        }
      ]
    });

    let card = this.store.peekRecord('appt-card', 1);
    card.staff = anyone;

    card = this.store.peekRecord('appt-card', 2);
    card.staff = anyone;
  }

  model() {
    return hash({
      apptCards: this.store.peekAll('appt-card'),
      staff: this.store.peekAll('staff')
    })
  }

  setupController(controller, model) {
    super.setupController(controller, model);

    const selectedCard = model.apptCards.firstObject.id;

    this.controller.selectedAppt = selectedCard;
    this.controller.showStaff = true;

    const filteredStaff = model.staff.filter((staff, index) => {
      let isEven = index%2 === 0;

      if (isEven)
        return staff;
    });

    this.controller.filteredStaff = filteredStaff;
  }
}
