import Create from './Create.jsx'
import "../css/main.css";
import Admin from './Admin.jsx';
import { Route, Routes } from 'react-router-dom';
import Replica from './Replica.jsx';
import Home from './Home.jsx';
import Withdraw from './Withdraw.jsx';
import Balance from './Balance.jsx';
import Deposit from './deposit.jsx';
import History from './History.jsx';

function Main_p(){
    return(
        <div className="main_p">
            <br></br>
            <br></br>
            <Routes>
                <Route path='/trans' element={<History/>}></Route>
                <Route path='/deposit' element={<Deposit/>}></Route>
                <Route path='/balance' element={<Balance/>}></Route>
                <Route path='/withdraw' element={<Withdraw/>}></Route>
                <Route path="/create" element={<Create/>}></Route>
                <Route path='/home' element={<Home/>}></Route>
                <Route path="/admin" element={<Admin/>}></Route>
                <Route path="/admin/data" element={<Replica/>}></Route>
            </Routes>
        </div>
    );
}
export default Main_p;