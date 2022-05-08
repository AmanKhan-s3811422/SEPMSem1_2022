import axios from "axios";

async function getWord() {
    const response = await axios.get('http://localhost:4000/api/words');
    return response.data.word
}

export {
    getWord
  };