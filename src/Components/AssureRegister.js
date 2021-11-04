import axios from "axios";
let AssureRegister= async (props) =>{
    let error = "";
    let RegisterData = JSON.parse(window.localStorage.getItem("RegisterData"));
    let loginData = JSON.parse(window.localStorage.getItem("loginData"));
    if (loginData)  {
        props.history.push("/");
    }
    else if(RegisterData === null)
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
            const newUser = {
                "id": id,
                "userName": RegisterData.userName,
                "email": RegisterData.email,
                "password": RegisterData.password
            }
            await axios.post(`http://localhost:3000/registers`, newUser).then(res =>{
                window.localStorage.removeItem("RegisterData");
                window.localStorage.setItem("success", "success");

                props.history.push("/login");
            }).catch(err =>{
            error = "Request error!"
            props.history.push({
                pathname: "/register",
                state: {error}
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