const axios = require("axios");

//**A 
const getHome = async () => {
    try {
        const response = await axios.get("http://localhost:4000/")
        console.log(`Connection OK -- Welcome Home page....`);
    } catch (error) {
        console.log(error.message);
    }

}

getHome();
//**A

//**B

const getCharData = async () => {
    try {
        const response = await axios.get("http://localhost:4000/characters")
        console.log(response.data);
    } catch (error) {
        console.log(error.message);
    }

}

getCharData();
//**B

//**C
const getBlood = async (blood) => {
    try {
        const response = await axios.get(`http://localhost:4000/char/${blood}`);

        console.log(response.data);
    } catch (error) {
        console.log(error.message)
    }
}

getBlood("Pure-blood");
//**C

//**D
const quatable = async () => {
    try {
        const response = await axios.get("https://api.quotable.io/random");
        console.log(response.data.content);
    } catch (error) {
        console.log(error.message);
    }
}
quatable();

//**D


//**E
const getPokemonApi = async (name) => {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        console.log(response.data);
    } catch (error) {
        console.log(error.message);
    }
}

getPokemonApi("bulbasaur");
//**E