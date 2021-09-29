import axios from "axios";
let AssureLogin= async (props) =>{
    let error = "";
    let loginData = JSON.parse(window.localStorage.getItem("loginData"));
        if(loginData === null)
           props.history.push("/login");
       else{
           const {data} = await axios.get(`http://localhost:3000/registers`);
           let usernames = [], emails=[];
           data.forEach(i => {
               usernames.push(i.userName)
               emails.push(i.email);
               });
           const user = usernames.find(i => i === loginData.userName) || emails.find(i => i === loginData.userName);
           if(user){
               const id = (usernames.indexOf(user) + 1 || emails.indexOf(user) + 1);
               await axios.get(`http://localhost:3000/registers/${id}`).then(res =>{
                   if(loginData.password === res.data.password){
                       loginData.userName = res.data.userName;
                       window.localStorage.setItem("loginData", JSON.stringify(loginData));
                       props.history.push("/");
                   }
                   else {
                       error = "!invalid password";
                       props.history.push({
                           pathname: "/login",
                           state: {error}
                       });
                   }
               }).catch(err =>{
                    error = "request Faild!";
                props.history.push({
                    pathname: "/login",
                    state: {error}
                });
               });
           }else {
               error = "!user not found";
               props.history.push({
                pathname: "/login",
                state: {error}
            });
           }              
      
       }

       if(error){
            window.localStorage.removeItem("loginData");
       }
}
export default AssureLogin;