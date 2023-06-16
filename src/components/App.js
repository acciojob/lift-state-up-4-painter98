
import React,{useState} from "react";
import './../styles/App.css';

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

    cartItems.splice(idx,1)
    setCartItems([...cartItems]);
    console.log('delete items',cartItems);
}

  return (
    <div className="parent">
        {/* Do not remove the main div */}
        <h1>Parent Component</h1>
        <form>
            Item Name<input type="text" id="itemName" onChange={(e)=>setName(e.target.value)}/>
            Item Price<input type="number" id="itemPrice" onChange={(e)=>setPrice(e.target.value)}/>
            <button onClick={items}>Add Items</button>
        </form>
        <div className="child">
        <h2>Child Component</h2>
        <ul>
            {
              cartItems &&
                cartItems.map((item,idx)=>{
                    return <li>
                    {item.name} - ${item.price}
                    <button onClick={()=>deleting(idx)}>Remove</button>
                </li>
            })
            }
          </ul>
        </div>
    </div>
  )
}

export default App
