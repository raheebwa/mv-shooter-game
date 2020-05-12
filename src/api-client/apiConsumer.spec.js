import fetchMock from 'fetch-mock';
import { getData, postData } from './apiConsumer';

const testUrl = 'http://someurl.test/';

afterEach(() => {
  fetchMock.reset();
  fetchMock.restore();
});

it('should return a string when data is posted', async () => {
  fetchMock.mock(testUrl, {
    result: 'Game with ID: Zl4d7IVkemOTTVg2fUdz added.',
  });
  const data = await getData(testUrl);
  expect(typeof data).toBe('string');
});

it('should return string when data is posted', async () => {
  fetchMock.mock(testUrl, { user: 'John Doe', score: 42 });
  const data = await postData(testUrl, { user: 'John Doe', score: 42 }, 'GET');
  expect(typeof data).toBe('string');
});