import { useState } from 'react';
import './App.css';
// import { MyButton } from './components/button';
// import { User } from './components/user';
// import { content } from './components/admin-page';
// import { RenderList } from './components/render-list';
import { StateHook } from './components/state-hook';


function App() {
  const [count, setCount] = useState(0);

  function handleCount(){
    setCount(count+1);
  }

  return <>
    <h1>Welcome to my first react app.</h1>

    {/* Component to render and more than one times. */}
    <h3>Counter Update together.</h3>
    <StateHook count={count} onClick={handleCount}/>
    <StateHook count={count} onClick={handleCount}/>
    
  </>
}

export default App;
