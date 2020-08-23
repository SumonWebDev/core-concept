import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
const products=[
  {name:'Photoshop',price:'$99.6'},
{name:'Illustrator',price:'$33.7'},
{name:'BabyDoll',price:'$33.7'},
]
  
  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product>
       <p style={{color:'red',fontSize:'50px'}}>Creating React App</p>
       <Person name="munna" job="actress"></Person>
       <Person name="sumon" job="Teacher"></Person>
       <Person name="afia kabir" job="Tik-tok konna"></Person>
      </header>
    </div>
  );
}
function Counter(){
  const [count,setCount] = useState(10);
  const handleIncrease=()=>{
    const newCount=count +1;
    setCount(newCount);
  }
  return(
    <div>
<h1>count:{count}</h1>
<button onClick={()=>setCount(count -1)}>Decrease</button>
<button onClick={handleIncrease}>Increase</button>
    </div>
  )
}

function Product(props){
   const productStyle={
    border:'2px solid gray',
    borderRadius:'4px',
    backgroundColor:'green',
    height:'350px',
    width:'300px',
    float:'left',
    margin:'10px'  

  }
  return(
    <div style={productStyle}>
      <h2>{props.product.name}</h2>
      <h1>{props.product.price}</h1>
      <button style={{fontSize:'30px',padding:'10px',borderRadius:'10px'}}>Buy Now</button>
    </div>
  )
}

function Person(props){
  return(
    <div style={{border:'2px solid gold',width:'400px',margin:'10px',color:'green'}}>
      <h1>My name: {props.name}</h1>
      <p>My Profession:{props.job}</p>
    </div>
  )
}

export default App;
