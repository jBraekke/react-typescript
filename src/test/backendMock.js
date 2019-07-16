import nock from 'nock';

import klasser from './entities/klasse';


const apiMock = nock('http://localhost:1337/backend/api')
  .persist()
  .get('/klasse')
  .reply(200, klasser)

export default apiMock;