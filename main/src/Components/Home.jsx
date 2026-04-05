import { useNavigate } from "react-router-dom";
import "../css/home.css";

function Home(){

    let navigate = useNavigate();
    let accdata=()=>{
        navigate("/create")
    }
    let withdraw=()=>{
        navigate("/withdraw")
    }
    let balance=()=>{
        navigate("/balance")
    }
    let deposit=()=>{
        navigate("/deposit")
    }
    let history=()=>{
        navigate("/trans")
    }
    let admin=()=>{
        navigate("/admin")
    }
    return(
        <div className="home">
            <button>WELCOME BANK MANAGEMENT SYSTEM</button>
            <button onClick={accdata}>NEW ACCOUNT</button>
            <button onClick={withdraw}>WITHDRAW</button>
            <button onClick={balance}>BALANCE ENQUIREY</button>
            <button onClick={deposit}>DEPOSIT</button>
            <button onClick={history}>TRANSACTIONS HISTORY</button>
            <button onClick={admin}>ADMIN</button>
        </div>
    );
}

export default Home;
