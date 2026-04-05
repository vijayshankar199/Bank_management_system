import axios from "axios";
import "../css/admin.css";
import { useRef } from "react";
import { useNavigate } from 'react-router-dom';

function Admin(){
    let nameref = useRef();
    let pwdref = useRef();
    let navigate = useNavigate();
    
    let getdata=()=>{
    let url= "http://127.0.0.1:8000/Bank/admin/";
    let input_data = {
        "name":nameref.current.value,
        "password":pwdref.current.value,
    }
    axios.post(url,input_data).then((resp)=>{
        console.log(resp);
        alert("Admin login Success");
        navigate("/admin/data");
    }).catch((err)=>{
        console.log(err);
        alert("ERROR MAN CHECK CONSOLE!!!!");
    });
    nameref.current.value="";
    pwdref.current.value="";
    }

    return(
        <div className="admin">
            <label htmlFor="">USERNAME
                <input ref={nameref} type="text"/>
            </label>
            <label htmlFor="">PASSWORD
                <input ref={pwdref} type="password"/>
            </label>
            <button onClick={getdata}>LOGIN</button>
        </div>
    );
}
export default Admin;