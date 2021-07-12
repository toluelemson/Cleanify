import { createServer, Model } from 'miragejs';
import { v4 as uuidv4 } from 'uuid';

function makeServer({ environment = 'test' } = {}) {
  const initServer = createServer({
    environment,
    models: {
      product: Model,
    },

    seeds(server) {
      server.create('product', {
        _id: uuidv4(),
        name: 'Office Cleaning',
        image: '/images/office.jpg',
        description: 'Business centers and offices daily have heavy traffic of staff, visitors and support personnel. This makes all rooms dirty in no time.',
        brand: 'Apple',
        category: 'cleaning',
        price: 89.99,
        countInStock: 5,
        date: '23/4/2021',
        numReviews: 12,
      });
      server.create('product', {
        _id: uuidv4(),
        name: 'House Cleaning',
        image: '/images/cleaning1.jpg',
        description: 'Are you too tired or simply do not want to clean the apartment yourself? Order cleaning from our company! The company for cleaning premises Smile Cleaning is not only prompt cleaning of housing using modern equipment, but also an affordable price of the service! You can calculate the cost of cleaning an apartment right now using a simple and understandable calculator.',
        category: 'cleaning',
        price: 52.99,
        countInStock: 7,
        date: '23/4/2021',
        numReviews: 8,
      });
      server.create('product', {
        _id: uuidv4(),
        name: 'Aparment Cleaning',
        image: '/images/apartment.jpg',
        description: 'Cleanliness and order in the house is the key to your good mood and well-being. Smile Cleaning specialists are always ready to help you with cleaning your apartment or house and to perform all the services provided.',
        category: 'cleaning',
        price: 99.99,
        countInStock: 5,
        date: '23/4/2021',
        numReviews: 12,
      });
      server.create('product', {
        _id: uuidv4(),
        name: 'Aparment Cleaning',
        image: '/images/apartment.jpg',
        description: 'Cleanliness and order in the house is the key to your good mood and well-being. Smile Cleaning specialists are always ready to help you with cleaning your apartment or house and to perform all the services provided.',
        category: 'cleaning',
        price: 99.99,
        countInStock: 5,
        date: '23/4/2021',
        numReviews: 12,
      });
    },
    routes() {
      this.namespace = 'api';
      this.get('/', (schema) => schema.products.all());
      this.get('/product/:id', (schema, request) => schema.products.find(request.params.id));
      this.get('/cart/:id', (schema, request) => schema.products.find(request.params.id));
    },
  });

  return initServer;
}

export default makeServer;
