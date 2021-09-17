import axios from "axios";
let AssureRegister= async (props) =>{
    let error = "";
    let RegisterData = JSON.parse(window.localStorage.getItem("RegisterData"));
        if(RegisterData === null)
           props.history.push("/register");
       else{
           const {data} = await axios.get(`http://localhost:3000/registers`);
           let usernames = [], ids = [], emails=[];
           data.forEach((i) => {
               usernames.push(i.userName);
               ids.push(i.id);
               emails.push(i.email);
            });
           const user = usernames.find(i => i === RegisterData.userName) || emails.find(i => i === RegisterData.email);
           if(!user){
               const id = usernames.length + 1;
               console.log(id);
               const newUser = {
                   "id": id,
                   "userName": RegisterData.userName,
                   "email": RegisterData.email,
                   "password": RegisterData.password
               }
               await axios.post(`http://localhost:3000/registers`, newUser).then(res =>{
                   props.history.push("/");  
               }).catch(err =>{
                props.history.push({
                    pathname: "/register",
                    state: {err}
                });
               });
           }else if(usernames.find(i => i === RegisterData.userName)) {
               error = "!Already taken username";
               props.history.push({
                pathname: "/register",
                state: {error}
               });
           }else{
            error = "!Already taken email";
            props.history.push({
                pathname: "/register",
                state: {error}
            });
           }              
      
       }
    if(error){
        window.localStorage.removeItem("RegisterData");
    }
}
export default AssureRegister;