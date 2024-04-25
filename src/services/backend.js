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

  static handleRequestError(error) {
    const message = error.response.data.error || "Erro Inesperado";
    console.error(message);
    throw message;
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
      this.handleRequestError(error);
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
      this.handleRequestError(error);
    }
  }

  static async novoPost(content) {
    try {
      let response = await axios.post(
        `${BASE_URL}/posts`,
        { content: content },
        this.getOptions()
      );
      return response;
    } catch (error) {
      this.handleRequestError(error);
    }
  }

  static async getComments(postId) {
    try {
      let response = await axios.get(
        `${BASE_URL}/postcomments/${postId}`,
        this.getOptions()
      );
      return response.data;
    } catch (error) {
      this.handleRequestError(error);
    }
  }

  static async getPosts() {
    try {
      let response = await axios.get(`${BASE_URL}/posts/`, this.getOptions());
      return response.data;
    } catch (error) {
      this.handleRequestError(error);
    }
  }

  static async likeComment(commentId) {
    try {
      let response = await axios.put(
        `${BASE_URL}/postcomments/${commentId}/like`,
        { like: true },
        this.getOptions()
      );
      return response;
    } catch (error) {
      this.handleRequestError(error);
    }
  }

  static async dislikeComment(commentId) {
    try {
      let response = await axios.put(
        `${BASE_URL}/postcomments/${commentId}/like`,
        { like: false },
        this.getOptions()
      );
      return response;
    } catch (error) {
      this.handleRequestError(error);
    }
  }

  static async novoComment(content, postId) {
    try {
      let response = await axios.post(
        `${BASE_URL}/postcomments/${postId}`,
        { content: content },
        this.getOptions()
      );
      return response;
    } catch (error) {
      this.handleRequestError(error);
    }
  }
}

export default BackendService;
