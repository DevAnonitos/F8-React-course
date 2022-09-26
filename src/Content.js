import React from 'react'
import {useState, useEffect} from 'react';


// 1. useEffect(callback)
// 2. useEffect(callback, [])
// 3. useEffect(callback, [deps])

// luôn dược gọi khi Components mount vào

const tabs = ['posts', 'comments', 'albums']


const Content = () => {
  const [title, setTitle] = useState('');
  const [post, setPost]  = useState([]);
  const [type, setType] = useState('posts');
  const [show, setShow] = useState(false);

  useEffect(() =>{
    document.title = title;
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
    .then(res => res.json())
    .then(posts =>{
      setPost(posts);
    }, [type])
  })

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY >= 200){
        setShow(true);
      }else{
        setShow(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () =>{
      window.removeEventListener('scroll', handleScroll);
    }

  }, [])
  return (
    <div>
        {tabs.map(tab =>(
          <button className="btn" key={tab}
          onClick={() => setType(tab)}
          style={type === tab ? {
            color: "#f42f11",
            background: "#fe12ee"
          } : {}}
          >{tab}</button>
        ))}
        

        <input
          value={title}
          onChange={e => setTitle(e.target.value)}
         />
         {console.log("Render")}
         <ul>
          {post.map(post =>(
            <li key={post.id}>{post.title}</li>
          ))}
         </ul>
        <h1>Xin chào new</h1>

        {show && (
          <button style={{
            position: "fixed",
            right: 25,
            bottom: 25
          }}>
            ?
          </button>
        )}
    </div>
  )
}

export default Content