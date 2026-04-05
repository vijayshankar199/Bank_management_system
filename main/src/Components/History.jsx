import axios from "axios";
import "../css/history.css";
import { useRef,useState } from "react";
import { useNavigate } from "react-router-dom";

function History(){

    let[msg,setmsg] = useState([]);
    let navigate = useNavigate();
    let accref = useRef();
    
    let history=()=>{
        let url = "http://127.0.0.1:8000/Bank/transactions/"+accref.current.value+"/";
        axios.get(url).then((resp)=>{
            console.log(resp);
            setmsg(resp.data);

        }).catch((err)=>{
            console.log(err);
        });
    }
    let back=()=>{
        navigate("/home")
    }

    return(
        <div className="history">
            <h1>TRANSACTION HISTORY HERE</h1>
            <label htmlFor="">ACCOUNT_NUMBER:
                <input ref={accref} type="text"/>
            </label>
            <button onClick={history}>Check</button>
            <button onClick={back}>Home</button>
            <div className="history-list">

                {msg.length === 0 && <p>No transactions found</p>}

                {msg.map((t)=>(
                    <div key={t.txt_no} className="history-box">
                        <p><b>ACCOUNT:</b> {t.Account_no}</p>
                        <p><b>TYPE:</b> {t.txt_type}</p>
                        <p><b>TXT_no:</b> {t.txt_no}</p><br></br>
                    </div>
                ))}

            </div>
        </div>
    );
}
export default History;