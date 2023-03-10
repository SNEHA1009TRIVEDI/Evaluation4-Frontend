import axios from "axios";
const makeRequest = async (method, url,token) => {
  const data = await axios({
    method: method,
    url: url,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
       Authorization: token,  
    },

    
  });
  return data;
};
export default makeRequest;