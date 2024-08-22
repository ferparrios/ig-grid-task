import axios from "axios";

const postsApi = axios.create({
  baseURL: "https://662029f13bf790e070af2cd8.mockapi.io/api/v1",
})

export const getPost = async () => {
  try {
    const response =  await postsApi.get('/posts')
    return response.data
  } catch (error) {
    throw error
  }
}