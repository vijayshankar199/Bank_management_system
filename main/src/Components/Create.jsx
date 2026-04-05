import { useRef } from "react";
import axios from "axios";
import "../css/create.css";
import { useNavigate } from "react-router-dom";

function Create(){

    let nameref = useRef();
    let acref = useRef();
    let actyperef = useRef();
    let amtref = useRef();
    let pinref = useRef();
    let strtref = useRef();
    let navigate = useNavigate();

    let createdata=()=>{
        
    let url = "http://127.0.0.1:8000/Bank/create/";
        let input_data = {
            name: nameref.current.value,
            Account_no: acref.current.value,
            Account_type: actyperef.current.value,
            amt: Number(amtref.current.value),   
            pin: Number(pinref.current.value),   
            strt_date: strtref.current.value
        };
        axios.post(url,input_data).then((resp)=>{
            console.log(resp.data);
            alert("ACCOUNT CREATED SUCCESSFULLY....!")
            navigate('/home');
        }).catch((err)=>{
            console.log(err);
        });
        nameref.current.value="";
        acref.current.value="";
        actyperef.current.value="";
        amtref.current.value="";
        pinref.current.value="";
        strtref.current.value="";
    }
    return(
        <div className="create">
            <label htmlFor="">NAME
                <input ref={nameref} type="text"/>
            </label>
            <label htmlFor="">ACCOUNT_NUMBER
                <input ref={acref} type="text"/>
            </label>
            <label htmlFor="">ACCOUNT_TYPE
                <input ref={actyperef} type="text"/>
            </label>
            <label htmlFor="">AMOUNT
                <input ref={amtref} type="text"/>
            </label>
            <label htmlFor="">PIN
                <input ref={pinref} type="text"/>
            </label>
            <label htmlFor="">TODAY'S DATE
                <input ref={strtref} type="date"/>
            </label>
            <button onClick={createdata}>CREATE ACCOUNT</button>
        </div>
    );
}
export default Create;
