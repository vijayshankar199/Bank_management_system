import { useRef } from "react";
import "../css/withdraw.css";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Withdraw(){

    let accref = useRef();
    let amtref = useRef();
    let navigate = useNavigate();

    let postdata=()=>{
        let url = "http://127.0.0.1:8000/Bank/withdraw/";
        let input_type = {
            Account_no:accref.current.value,
            amount:amtref.current.value,
        }
        axios.post(url,input_type).then((resp)=>{
            console.log(resp);
            alert("successfully Withdraw amount");
            navigate("/home")
        }).catch((err)=>{
            console.log(err);
        })
        accref.current.value="";
        amtref.current.value="";
    }
    return(
        <div className="withdraw">
            <h1>WITHDRAW AMOUNT</h1>
            <label htmlFor="">ACCOUNT_NO:
                <input ref={accref} type="text"/>
            </label>
            <label htmlFor="">AMOUNT HERE:
                <input ref={amtref} type="text"/>
            </label>
            <button onClick={postdata}>WITHDRAW</button>
        </div>
    );
}
export default Withdraw;