import axios from "axios";

const url = "http://localhost:8000";

export const addUsers = async (data) => {
  try {
    await axios.post(`${url}/add`, data);
  } catch (error) {
    console.log("Error Found", error.message);
  }
};

export const getUsers = async () => {
  try {
    const response = await axios.get(`${url}/users`);
    return response.data ;
  } catch (error) {
    console.log("Error Found", error.message);
  }
};

export const setConversation=async(data)=>{
 try {
    const response = await axios.post(`${url}/conversation`,data);
    console.log(response);
 } catch (error) {
    console.log("Error Found", error.message);
 }
}

export const getConversation =async(data)=>{

    try {
        const response = await axios.post(`${url}/conversation/get`,data);
    return response.data;
    } catch (error) {
        console.log("Error Found", error.message);
    }

}

export const newMessage =async(data)=>{

  try {
      const response = await axios.post(`${url}/message/add`,data);
  return response.data;
  } catch (error) {
      console.log("Error Found", error.message);
  }

}


export const getMessage =async(id)=>{

  try {
      const response = await axios.get(`${url}/message/get/${id}`);
  return response.data;
  } catch (error) {
      console.log("Error Found", error.message);
  }

}

export const uploadFile =async(data)=>{
try {
  const response = await axios.post(`${url}/upload/file`,data)
  console.log(response)
} catch (error) {
  console.log("Error Found", error.message);
}
}