import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import CreateElement from './createElement';
import NormalClassComponent from './practice/normalClassComponent';
import PureClassComponent from './practice/pureClassComponent';
import UseEffectHook from './practice/useEffect'

function App() {
  const [hi, setHi] = useState('Hello');

  useEffect(() => {
    const interval = setInterval(() => {
      setHi('Hello');
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <CreateElement />
      <NormalClassComponent hi={hi} />
      <PureClassComponent hi={hi} />
      <UseEffectHook/>
    </div>
  );
}

export default App;