import 'babel-polyfill';

const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';

const postData = async (url = '', data = {}) => {
  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(data),
  });
  return response.json(); // parses JSON response into native JavaScript objects
};

// postData(`${baseUrl}games/`, { name: "Ramar's Shooter Game" }).then((res) => {
//     console.log(res);
// });

const ApiConsumer = {
  async getGameID() {
    const qaz = await postData(`${baseUrl}games/`, {
      name: "Ramar's Shooter Game",
    });
    return qaz;
  },
  // async postGameScore() {
  //     const currScore = {
  //         user: "John Doe",
  //         score: 42,
  //     };
  //     const response = await fetch(`${baseUrl}/games/${this.getGameID}/scores/`, {
  //         mode: "cors",
  //         method: POST,
  //         body: json.stringify(currScore),
  //     });
  //     return response.json();
  // },
  // async getScores() {
  //     //   const response = await fetch(`${baseUrl}/games/${this.getGameID}/scores/`, {
  //     //   mode: 'cors',
  //     // });
  //     // const allScores = await response.json();
  //     const allScores = {
  //         result: [{
  //                 user: "John Doe",
  //                 score: 42,
  //             },
  //             {
  //                 user: "Peter Parker",
  //                 score: 35,
  //             },
  //             {
  //                 user: "Wonder Woman",
  //                 score: 50,
  //             },
  //         ],
  //     };
  //     return JSON.stringify(allScores);
  // },
};

// (async () => {
//   console.log(await ApiConsumer.getGameID());
// })();

export default ApiConsumer;