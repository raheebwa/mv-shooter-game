import "babel-polyfill";

const baseUrl =
    "https://us-central1-js-capstone-backend.cloudfunctions.net/api/";

const postData = async(url = "", data = {}, method = "POST") => {
    const response = await fetch(url, {
        method: method,
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
        },
        referrerPolicy: "no-referrer",
        body: JSON.stringify(data),
    });
    return JSON.stringify(await response.json());
};

const getData = async(url = "") => {
    const response = await fetch(url, {
        method: "GET",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
        },
        referrerPolicy: "no-referrer",
    });
    return JSON.stringify(await response.json());
};

const ApiConsumer = {
    async getGameID() {
        let result;
        if (localStorage.getItem("game_id") !== null) {
            result = localStorage.getItem("game_id");
        } else {
            const qaz = await postData(`${baseUrl}games/`, {
                name: "Ramar's Shooter Game",
            });

            const res = JSON.parse(qaz);
            const realID = res.result.match(new RegExp("ID: " + "(.*)" + " added"));
            result = realID[1];
            localStorage.setItem("game_id", result);
        }
        return result;
    },
    async postGameScore() {
        const currScore = {
            user: "John Doe",
            score: Math.floor(Math.random() * 100) + 10,
        };
        const response = await postData(
            `${baseUrl}games/${await this.getGameID()}/scores/`,
            currScore
        );

        return response;
    },
    async getScores() {
        const response = await getData(
            `${baseUrl}games/${await this.getGameID()}/scores/`
        );
        const allScores = await response;

        return JSON.parse(allScores).result;
    },
};

(async() => {
    console.log(await ApiConsumer.getScores());
})();

export default ApiConsumer;