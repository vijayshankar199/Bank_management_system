import "../css/replica.css";
import axios from "axios";
import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";

function Replica(){

    let[data,setdata] = useState([]);
    let navigate = useNavigate();
    useEffect(()=>{
    let url = "http://127.0.0.1:8000/Bank/user/";
        axios.get(url).then((resp)=>{
            console.log(resp);
            setdata(resp.data)
        }).catch((err)=>{
            console.log(err);
        });
    },[])

    let back=()=>{
        navigate("/home")
    }

    return(
        <div className="replica">
            <h1>Customers Details</h1>

            {
                data.map((i)=>(
                    <div key={i.Account_no} className="rep">
                        <p>NAME:{i.name}</p>
                        <p>ACCOUNT_NO:{i.Account_no}</p>
                        <p>Account_type:{i.Account_type}</p>
                        <p>AMOUNT:{i.amt}</p>
                        <p>PIN:{i.pin}</p>
                        <p>START_DATE:{i.strt_date}</p>
                    </div>
            ))
            }
            <button onClick={back}>Home</button>
            
        </div>
    );
}
export default Replica;
