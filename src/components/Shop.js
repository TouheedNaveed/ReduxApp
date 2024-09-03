import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../state/index'
const Shop = () => {
    const dispatch = useDispatch();
    const {withdrawMoney,depositMoney} =bindActionCreators(actionCreators,dispatch);
    return (
        <div className='container text-center my-5'>
            <h1>Deposit/Withdraw Money</h1>
            <div className="my-3">
                <button className='btn btn-primary mx-2'onClick={()=>{withdrawMoney(10)}}>-</button>
                <span>Update Balance</span>
                <button className='btn btn-primary mx-2'onClick={()=>{depositMoney(10)}}>+</button>
            </div>
        </div>
    )
}

export default Shop
