import React from 'react'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../state/index'
import { useDispatch,useSelector } from 'react-redux'
const Shop = () => {
const balance=useSelector(state=>state.amount)
    const dispatch = useDispatch();
    const {withdrawMoney,depositMoney} =bindActionCreators(actionCreators,dispatch);
    return (
        <div className='container text-center my-5'>
            <h1>Deposit/Withdraw Money</h1>
            <div className="my-3">
                <button className='btn btn-primary mx-2'onClick={()=>{withdrawMoney(10)}}>-</button>
                <span>Update Balance {(balance)}</span>
                <button className='btn btn-primary mx-2'onClick={()=>{depositMoney(10)}}>+</button>
            </div>
        </div>
    )
}

export default Shop
