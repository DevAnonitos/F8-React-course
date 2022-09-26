import React from 'react'
import { useMemo, useState, useEffects, useRef, useReducer } from 'react'

// useReducer
// init State

const initialState = 0;

// action

const up_Action = '+';
const down_Action = '-n';

// reducer

const reducer = (state, action) =>{
  switch (action){
    case up_Action:
      return state + 1;
    case down_Action:
      return state - 1
    default:
      throw new Error('Invalid cannot');
  }

}

const Text = () => {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [product, setProduct] = useState([])
  const [couter, dispatch] = useReducer(reducer,initialState)
  const handleSubmit = () =>{
    setProduct([...product, {
      name,
      price: parseInt(price)
    }])
    setName('')
    setPrice('')
    nameRef.current.focus()
  }

  const nameRef = useRef();

  const total = useMemo(() =>{
    const result = product.reduce((result, product) => result + product.price, 0);
    return result;
  }, [product])

  return (
    <div style={{padding: 34}}>
        <input
          ref={nameRef}
          value={name}
          placeholder="Enter Name...."
          onChange={e => setName(e.target.value)}
        />
        <br/>
        <input
          value={price}
          placeholder="Enter Price..."
          onChange={e => setPrice(e.target.value)}
        />
        <br/>
        <button className="btn" style={{padding: 20}} onClick={handleSubmit}>Add</button>
        <br />
        Total:{total}
        <ul>
          {
            product.map((product, index) =>(
              <li key={index}>{product.name} - {product.price}</li>
            ))
          }
        </ul>
        <div style={{padding: 34}}>
          <h1>{couter}</h1>
          <button onClick={() => dispatch(down_Action)}>-</button>
          <button onClick={() => dispatch(up_Action)}>+</button>

        </div>
    </div>
  )
}

export default Text