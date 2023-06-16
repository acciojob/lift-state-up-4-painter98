
import React,{useState} from "react";
import './../styles/App.css';
import Cart from './Cart.js';

let itemArray = [];
const App = () => {
  let [cartItems,setCartItems] = useState([]);
  let [name,setName] = useState('');
  let [price,setPrice] = useState(0);

  function items(e){
    e.preventDefault();

    let obj = {
      name,
      price
    }
    cartItems.push(obj);
    setCartItems([...cartItems]);
  }

  function deleting(idx){
    /*let newItem = cartItems.filter((item,id) => {
      console.log(item);

      return id!==idx
    })*/
    cartItems.splice(idx,1)
    setCartItems([...cartItems]);
    //console.log(idx,newItem.length,newItem,cartItems.length);
    console.log('delete items',cartItems);
}

  return (
    <div className="parent">
        {/* Do not remove the main div */}
        <h1>Parent Component</h1>
        <form onSubmit={(e)=>items(e)}>
            Item Name<input type="text" id="itemName" onChange={(e)=>setName(e.target.value)}/>
            Item Price<input type="number" className="itemPrice" onChange={(e)=>setPrice(e.target.value)}/>
            <button>Add Items</button>
        </form>
        <h2>Child Component</h2>
        <ul className="child">
            {
                cartItems.map((item,idx)=>{
                    return <Cart idx={idx} item={item} ondelete={deleting}/>
            })
            }
            </ul>
    </div>
  )
}

export default App
