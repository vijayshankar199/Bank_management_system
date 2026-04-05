import axios from "axios";
import "../css/deposit.css";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

function Deposit(){

    let accrerf = useRef();
    let amtref = useRef();
    let navigate = useNavigate();

    let deposit=()=>{
        let url="http://127.0.0.1:8000/Bank/deposit/";
        let input_data ={
            Account_no:accrerf.current.value,
            amount:amtref.current.value,
        }
        axios.post(url,input_data).then((resp)=>{
            console.log(resp);
            alert("AMOUNT SUCCESFULLY DEPOSIT");
            navigate("/home")
        }).catch((err)=>{
            console.log(err);
        });
        accrerf.current.value="";
        amtref.current.value="";
    }


    return(
        <div className=" deposit">
            <h1>DEPOSIT AMOUNT HERE:</h1>
            <label htmlFor="">ACCOUNT_NUMBER:
                <input ref={accrerf} type="text"/>
            </label>
            <label htmlFor="">AMOUNT:
                <input ref={amtref} type="text"/>
            </label>
            <button onClick={deposit}>DEPOSIT</button>
        </div>
    );
}
export default Deposit;