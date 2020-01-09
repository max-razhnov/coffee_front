import axios from 'axios';
import mockAdapter from 'axios-mock-adapter';

const mock = new mockAdapter(axios);

mock.onGet('/').reply(200, {
  data: []
});
