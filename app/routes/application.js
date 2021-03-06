import Route from '@ember/routing/route';

export default class ApplicationRoute extends Route {
  beforeModel() {
    // Lets remove all records now that we support multiple routes
    this.store.peekAll('appt-card').forEach((appt) => {
      appt.unloadRecord();
    });

    this.store.push({
      data: [
        {
          id: 1,
          type: 'staff',
          attributes: {
            firstName: 'any available',
            lastName: 'staff',
            img: 'assets/images/anyone.png',
            description: 'Maximize number of available appointment times.',
          },
        },
        {
          id: 2,
          type: 'staff',
          attributes: {
            firstName: 'Lucy',
            lastName: 'Heartfilia',
            img: 'assets/images/lucy.jpg',
            description:
              'A teenage wizard and aspiring novelist who joins the titular guild due to its popularity, despite its members tendency to cause unintentional property damage',
          },
        },
        {
          id: 3,
          type: 'staff',
          attributes: {
            firstName: 'Erza',
            lastName: 'Scarlet',
            img: 'assets/images/erza.jpg',
            description: null,
          },
        },
        {
          id: 4,
          type: 'staff',
          attributes: {
            firstName: 'Hit',
            lastName: 'Assassin',
            img: 'assets/images/hit.jpg',
            description:
              'Hit is a tall, muscular humanoid with purple skin, flattened ears, a bald head, and red eyes. He wears a long, turtleneck, dark purple cyan undershirt, dark purple elbow and knee pads.',
          },
        },
        {
          id: 5,
          type: 'staff',
          attributes: {
            firstName: 'Mavis',
            lastName: 'Vermilion',
            img: 'assets/images/mavis.png',
            description: 'The first guild master and co-founder of the Fairy Tail Guild.',
          },
        },
        {
          id: 6,
          type: 'staff',
          attributes: {
            firstName: 'Saitama',
            lastName: 'Charanko',
            img: 'assets/images/saitama.png',
            description: 'Just an average guy who serves as an average hero',
          },
        },
      ],
    });

    let anyone = this.store.peekRecord('staff', 1);

    this.store.push({
      data: [
        {
          id: 1,
          type: 'appt-card',
          attributes: {
            serviceName: 'Tryout Clinics',
          },
        },
        {
          id: 2,
          type: 'appt-card',
          attributes: {
            serviceName: 'Stunt Clinics',
          },
        },
        {
          id: 3,
          type: 'appt-card',
          attributes: {
            serviceName: 'Black Belt',
          },
        },
      ],
    });

    this.store.peekAll('appt-card').forEach((appt) => {
      appt.staff = anyone;
    });
  }
}
