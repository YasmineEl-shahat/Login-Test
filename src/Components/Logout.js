let Logout = (props) =>{
    window.localStorage.removeItem("RegisterData");
    window.localStorage.removeItem("loginData");
    props.history.push("/");
}
export default Logout;