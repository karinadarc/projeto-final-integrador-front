import BASE_URL from "../constants/BASE_URL";
import axios from "axios";

class BackendService {
  static getOptions() {
    let token = localStorage.getItem("token-integrador");
    if (!token) {
      window.location.href = "/";
    }
    return {
      headers: {
        Authorization: localStorage.getItem("token-integrador"),
      },
    };
  }

  static async like(postId) {
    try {
      let response = await axios.put(
        `${BASE_URL}/posts/${postId}/like`,
        { like: true },
        this.getOptions()
      );
      return response;
    } catch (error) {
      throw error.response.data.error;
    }
  }

  static async dislike(postId) {
    try {
      let response = await axios.put(
        `${BASE_URL}/posts/${postId}/like`,
        { like: false },
        this.getOptions()
      );
      return response;
    } catch (error) {
      throw error.response.data.error;
    }
  }
}

export default BackendService;
