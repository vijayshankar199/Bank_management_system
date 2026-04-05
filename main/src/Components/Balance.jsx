import "../css/balance.css";
import { useState,useRef } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


function Balance(){

    let accref = useRef();
    let[msg,setmsg] = useState();
    let navigate = useNavigate();

    let balance=()=>{
        let url="http://127.0.0.1:8000/Bank/balance/"+accref.current.value+"/";
        axios.get(url).then((resp)=>{
            console.log(resp);
            setmsg(resp.data.balance);

        }).catch((err)=>{
            console.log(err);
        });
        accref.current.value="";
        
    }
    let back=()=>{
        navigate("/home")
    }


    return(
        <div className="balance">
            <h1>ENTER THE ACCOUNT NUMBER HERE:</h1>
            <label htmlFor="">ACCOUNT NUMBER
                <input ref={accref} type="text"/>
            </label>
            <p>{msg}</p>
            <button onClick={balance}>CLICK HERE</button>
            <button onClick={back}>HOME</button>
        </div>
    );
}
export default Balance;