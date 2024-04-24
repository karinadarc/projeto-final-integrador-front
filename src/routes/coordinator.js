export const goToLoginPage = (navigate) => {
  navigate("/login");
};

export const goToSignupPage = (navigate) => {
  navigate("/signup");
};

export const goToHomePage = (navigate) => {
  navigate("/home");
};

export const goToCommentsPage = (navigator, postId) => {
  navigator(`/comments/${postId}`);
};
