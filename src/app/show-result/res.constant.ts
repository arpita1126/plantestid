export const dummyRes = {
  access_token: 'wGvJN2jPpufskkq',
  model_version: 'plant_id:3.2.2',
  custom_id: null,
  input: {
    latitude: null,
    longitude: null,
    images: [
      'https://plant.id/media/imgs/bfca4fa237e2474282bb54deb12cc1c4.jpg',
    ],
    datetime: '2023-11-14T11:51:09.757640+00:00',
  },
  result: {
    is_plant: {
      probability: 0.99999356,
      binary: true,
      threshold: 0.5,
    },
    classification: {
      suggestions: [
        {
          id: '42ce0ebe51b9d1ab',
          name: 'Hernandia nymphaeifolia',
          probability: 0.4281369388841993,
          details: {
            language: 'en',
            entity_id: '42ce0ebe51b9d1ab',
          },
        },
        {
          id: 'c8013132d69064f0',
          name: 'Catalpa',
          probability: 0.3808377064781408,
          details: {
            language: 'en',
            entity_id: 'c8013132d69064f0',
          },
        },
        {
          id: '7e9c82c2278fe89f',
          name: 'Catalpa speciosa',
          probability: 0.09984010457992554,
          details: {
            language: 'en',
            entity_id: '7e9c82c2278fe89f',
          },
        },
        {
          id: '4aa8a393ccc7e169',
          name: 'Alangium chinense',
          probability: 0.08135741328055698,
          details: {
            language: 'en',
            entity_id: '4aa8a393ccc7e169',
          },
        },
        {
          id: '7aa784deefabef22',
          name: 'Jatropha',
          probability: 0.06935490666783775,
          details: {
            language: 'en',
            entity_id: '7aa784deefabef22',
          },
        },
        {
          id: '609741c18c60a5ab',
          name: 'Catalpa bignonioides',
          probability: 0.06477219611406326,
          details: {
            language: 'en',
            entity_id: '609741c18c60a5ab',
          },
        },
        {
          id: '8efe8975c8291b59',
          name: 'Cercis canadensis',
          probability: 0.040313034689265094,
          details: {
            language: 'en',
            entity_id: '8efe8975c8291b59',
          },
        },
      ],
    },
  },
  status: 'COMPLETED',
  sla_compliant_client: true,
  sla_compliant_system: true,
  created: 1699962669.75764,
  completed: 1699962670.579726,
};
