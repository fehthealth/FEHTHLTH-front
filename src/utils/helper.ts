export const getToken = () => {
  let token = "";
  try {
    const user: any = sessionStorage.getItem("user");
    token = window.sessionStorage !== undefined && JSON?.parse(user)?.token;
  } catch (error) {
    console.log(error);
  }
  return token;
};
