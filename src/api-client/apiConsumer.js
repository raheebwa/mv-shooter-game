/* eslint-disable no-useless-concat */
import 'babel-polyfill';

const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';

const postData = async (url = '', data = {}, method = 'POST') => {
  const response = await fetch(url, {
    method,
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(data),
  });
  return JSON.stringify(await response.json());
};

const getData = async (url = '') => {
  const response = await fetch(url, {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    referrerPolicy: 'no-referrer',
  });
  return JSON.stringify(await response.json());
};

const ApiConsumer = {
  async getGameID(url = baseUrl) {
    let result;
    if (localStorage.getItem('game_id') !== null) {
      result = localStorage.getItem('game_id');
    } else {
      const qaz = await postData(`${url}games/`, {
        name: "Ramar's Shooter Game",
      });

      const res = JSON.parse(qaz);
      const realID = res.result.match(new RegExp('ID: ' + '(.*)' + ' added'));
      const [cleanID] = realID[1];
      localStorage.setItem('game_id', cleanID);
    }
    return result;
  },
  async postGameScore(user, score, url = baseUrl) {
    const currScore = {
      user,
      score,
    };
    const response = await postData(
      `${url}games/${await this.getGameID()}/scores/`,
      currScore,
    );

    return response;
  },
  async getScores(url = baseUrl) {
    const response = await getData(
      `${url}games/${await this.getGameID()}/scores/`,
    );
    const allScores = await response;

    return JSON.parse(allScores).result;
  },
};

export { ApiConsumer, getData, postData };