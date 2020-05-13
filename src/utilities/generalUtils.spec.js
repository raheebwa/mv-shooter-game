import { randomNumber, dynamicsort } from './generalUtils';

const unsorted = [{
  name: 'rama',
  score: 40,
},
{
  name: 'bad',
  score: 20,
},

{
  name: 'badr',
  score: 200,
},
];

const sortedScoreAsc = [{
  name: 'bad',
  score: 20,
},
{
  name: 'rama',
  score: 40,
},

{
  name: 'badr',
  score: 200,
},
];

const sortedScoreDesc = [{
  name: 'badr',
  score: 200,
},
{
  name: 'rama',
  score: 40,
},
{
  name: 'bad',
  score: 20,
},
];

it('should return a  random number', () => {
  expect(typeof randomNumber()).toBe('number');
});

it('should sort array descending by score', () => {
  const sortedToD = unsorted.sort(dynamicsort('score', 'desc'));

  expect(sortedToD).toEqual(sortedScoreDesc);
});

it('should sort array ascending by score', () => {
  const sortedToA = unsorted.sort(dynamicsort('score', 'asc'));

  expect(sortedToA).toEqual(sortedScoreAsc);
});