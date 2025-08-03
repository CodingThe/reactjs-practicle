import { lazy, Suspense, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import CreateElement from './createElement';
import NormalClassComponent from './practice/normalClassComponent';
import PureClassComponent from './practice/pureClassComponent';
import UseEffectHook from './practice/useEffect'
import UseRef from './practice/useRef';
import EnhancedComponemt from './practice/hoc/normalFunction'
import UseFetch from './practice/customHook/useFetch';
import { About } from './practice/routing/about';
import { Home } from './practice/routing/home';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import User from './practice/dynamicRouting/user'
function App() {
  const [hi, setHi] = useState('Hello');

  useEffect(() => {
    const interval = setInterval(() => {
      setHi('Hello');
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const {data,loading} = UseFetch("https://jsonplaceholder.typicode.com/posts");
  console.log(data);
  
  // lazy loading
  const Celebrity = lazy(()=>import('./practice/lazyLoading/celebrity'))

  return (
    <div className="App">
      <CreateElement />
      <NormalClassComponent hi={hi} />
      <PureClassComponent hi={hi} />
      <UseEffectHook/>
      <UseRef/>
      {/* hoc */}
      <EnhancedComponemt name="babu bhaiya"></EnhancedComponemt>
      {/* api fetch custom hook */}
      {loading ? <p>loading</p> : <p><div>
      <h1>Posts</h1>
      {/* {data.map((post) => (
        <div key={post.id} style={{ marginBottom: '1rem', border: '1px solid #ccc', padding: '10px' }}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))} */}
    </div></p>}
    {/* routing */}
      <Router>
        <nav>
          <Link to="/">home</Link>
          <Link to="/about">About</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
        </Routes>
      </Router>
      {/* lazy loading */}
      <h1>lazy loading</h1>
      <Suspense fallback={<p>loading</p>}>
        <Celebrity/>
      </Suspense>

      {/* dynamic routing */}
      <Router>
        <nav>
          <Link to="/user/1">User 1</Link>
          <Link to="/user/2">User 2</Link>
        </nav>
        <Routes>
          <Route path="/user/:id" element={<User/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;