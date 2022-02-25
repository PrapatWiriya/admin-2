import Axios from "axios";

export const getHistorytunadmin = () => {
    return Axios.get("http://localhost:3001/historytun").then((response) => {
        return response.data
      }).catch((err) => console.log(err))
};

