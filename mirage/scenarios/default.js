export default function (server) {
  window.server = server;

  // Staff
  server.create('staff', {
    firstName: 'any available',
    lastName: 'staff',
    img: 'assets/images/anyone.png',
    description: 'Maximize number of available appointment times.',
  });

  server.create('staff', {
    firstName: 'Lucy',
    lastName: 'Heartfilia',
    img: 'assets/images/lucy.jpg',
    description:
      'A teenage wizard and aspiring novelist who joins the titular guild due to its popularity, despite its members tendency to cause unintentional property damage',
  });

  server.create('staff', {
    firstName: 'Erza',
    lastName: 'Scarlet',
    img: 'assets/images/erza.jpg',
  });

  server.create('staff', {
    firstName: 'Hit',
    lastName: 'Assassin',
    img: 'assets/images/hit.jpg',
    description:
      'Hit is a tall, muscular humanoid with purple skin, flattened ears, a bald head, and red eyes. He wears a long, turtleneck, dark purple cyan undershirt, dark purple elbow and knee pads.',
  });

  server.create('staff', {
    firstName: 'Mavis',
    lastName: 'Vermilion',
    img: 'assets/images/mavis.png',
    description: 'The first guild master and co-founder of the Fairy Tail Guild.',
  });

  server.create('staff', {
    firstName: 'Saitama',
    lastName: 'Charanko',
    img: 'assets/images/saitama.png',
    description: 'Just an average guy who serves as an average hero',
  });

  // Appointment Cards
  server.create('apptCard', {
    serviceName: 'Tryout Clinics',
    staffId: 1,
  });
  server.create('apptCard', {
    serviceName: 'Stunt Clinics',
    staffId: 1,
  });
  server.create('apptCard', {
    serviceName: 'Black Belt',
    staffId: 1,
  });
}
