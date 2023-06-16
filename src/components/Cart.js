import React,{useState} from 'react';

function Cart({idx,item,ondelete}){
//console.log('inside cart');
    return (
                <li>
                    {item.name}-{item.price}
                    <button onClick={()=>ondelete(idx)}>Remove</button>
                </li>
            )
}

export default Cart;