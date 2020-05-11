import fetchMock from 'fetch-mock';
import { getData, postData } from './apiConsumer';

it('should return a string when data is posted', async () => {
  fetchMock.mock('http://fake.com', {
    result: 'Game with ID: Zl4d7IVkemOTTVg2fUdz added.',
  });
  const data = await getData('http://fake.com');
  expect(typeof data).toBe('string');
  fetchMock.reset();
});

it('should return string when data is posted', async () => {
  fetchMock.mock('http://fake.com', { user: 'John Doe', score: 42 });
  const data = await postData(
    'http://fake.com', { user: 'John Doe', score: 42 },
    'GET',
  );
  expect(typeof data).toBe('string');
  fetchMock.reset();
});