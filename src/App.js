import { useState, useEffect, useLayoutEffect, useRef, useContext, useImperativeHandle} from 'react';
import './App.css';
import Content from './Content';
import Text from './Text';
import Todo from './ToDo'
import Context from './Context';
import Video from './Video';
import { useStore, actions } from './store';

import Heading from './components/Heading';
import Graph from './components/Graph'
import Button from './components/Button';

const gifts = [
  'CPU i9',
  'RAM 64Gb RGB', 
  'Akko 3861v2',
  'SSD 1TB',
  'Case 2092'
]


function App() {
  const [counter, setCounter] = useState(1);
  const [info, setInfo] = useState({
    name: "Nguyễn Văn Sơn",
    age: 19,
    address: "Q6, TP.HCM"
  });
  const [gift, setGift] = useState();
  const [name, setName] = useState('');
  // todoList
  const storageJobs = JSON.parse(localStorage.getItem('jobs'));
  const [jobs, setJobs] = useState(storageJobs ?? []);
  const [job, setJob] = useState('');
  const [show, setShow] = useState(false);
  const [count, setCount] = useState(180);
  const [avt, setAvt] = useState();
  const [counterr, setCounterr] = useState(0);
  const [couunt, setCouunt] = useState(60);

  const [state, dispatch] = useStore();
  const {todos, todoInput} = state;
  console.log('todoInput: ', todoInput)

  const timerId = useRef();

  const videoRef = useRef();

  const handlePlay = () =>{
    videoRef.current.play();
  }

  const handlePause = () =>{
    videoRef.current.pause();
  }

  const handleStart = () =>{
    timerId.current = setInterval(() =>{
      setCouunt(prevState => prevState - 1)
    }, 1000)
  }

  const handleStop = () =>{
    clearInterval(timerId.current)
  }


  useLayoutEffect(() =>{
    if(counterr > 3){
      setCounterr(0);
    }
  }, [counterr])

  const handleRun = () =>{
    setCounterr(counterr + 1);
  }

  useEffect(() => {
    return () =>{
      avt && URL.revokeObjectURL(avt.preview);
    }
  }, [avt]);

  const handleView = (e) =>{
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);
    console.log(file);
    setAvt(file);
  }
  

  useEffect(() => {
    const timerId = setInterval(() =>{
      setCount(prevState => prevState - 1);
    }, 1000)

    return () =>{
      clearInterval(timerId)
    }
  }, [])

  const handleIncrease = () =>{
    setCounter(counter + (Math.random() * 100 + 1));
  }
  
  const handleInfo = () =>{
    setInfo({
      ...info,
      bio: "Yêu màu hồng ghét sự giả dối ^^!",
    });
  }

  const randomGift = () =>{
    const index = Math.floor(Math.random() * gifts.length);
    setGift(gifts[index]);
  }


  const handleSubmit = () =>{
    setJobs(prev => {
      const newJob = [...prev, job]

      const jsonJobs = JSON.stringify(newJob);
      localStorage.setItem('jobs', jsonJobs);
      
      return newJob;
    });
    setJob('');
  }

  const handleAdd = () =>{
    dispatch(actions.addTodoInput(todoInput))
  }



  return (
    <div className="App">
      <h1>{counter}</h1>
      <p>{JSON.stringify(info)}</p>
      <button onClick={handleIncrease}>+</button>
      <button onClick={handleInfo}>+</button>

      <div style={{padding: 32, margin: 40}}>
        <h1>{gift || 'Chưa có thưởng'}</h1>
        <button className="btn" onClick={randomGift}>Lấy thưởng</button>
      </div>
      {/* one way binding */}
      <div style={{padding: 32, margin: 40}}>
        <input value={name} onChange={e => setName(e.target.value)}/>
        <button className="btn" onClick={() => setName('nguyen van bmdf')}>Change</button>
      </div>

      {/* TODO List */}
      <div style={{padding: 34}}>
        <input value={job} onChange={e => setJob(e.target.value)}/>

        <button className="btn" onClick={handleSubmit}>Add</button>

        <ul>
          {jobs.map((job, index) => (<li key={index}>{jobs}</li>) 
  
          )}
        </ul>
        <button className="btn" onClick={() => setShow(!show)}>show</button>
        {show && <Content />}
      </div>

      <div style={{padding: 34}}>
        {/* <h1>{count}</h1> */}
      </div>
      <div style={{padding: 34}}>
        <input
            type="file"
            onChange={handleView} 
        />
        {avt && (<img src={avt.preview} alt='name' style={{width: "80%"}} />)}
      </div>

      <div style={{padding: 34}}>
        <h1>{counterr}</h1>
        <button onClick={handleRun}>Run</button>
      </div>

      <div style={{padding: 34}}>
        <h1>{couunt}</h1>
        <button onClick={handleStart}>-+</button>
        <button onClick={handleStop}>!</button>
      </div>

      <div style={{padding: 34}}>
        <Text />
      </div>

      <div style={{padding: 34}}>
        <Todo />
      </div>

      <div style={{padding: 34}}>
        <Context />
      </div>

      <div style={{padding: 34}}>
        <input
          value={todoInput}
          placeholder="Enter todo ..."
          onChange={e => {
            dispatch(actions.setTodoInput(e.target.value));
          }}
        />
        <button onClick={handleAdd} className="btn">Click add</button>
        {todos.map((todo,index) => (
          <li key={index}>{todo}</li>
        ))}
      </div>
      <div style={{padding: 34}}>
        <Video ref={videoRef} />
        <button className="btn" onClick={handlePlay}>Play</button>
        <button className="btn"onClick={handlePause}>Pause</button>
      </div>
      <div style={{padding: 34}}>
        <Heading />
        <Graph />
        <Button primary />
      </div>
    </div>
  );
}

export default App;


