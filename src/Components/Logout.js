let Logout = (props) =>{
    console.log("here");
    window.localStorage.removeItem("RegisterData");
    window.localStorage.removeItem("loginData");
    props.history.push("/");
}
export default Logout;