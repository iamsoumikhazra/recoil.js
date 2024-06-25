import './App.css';
import { useRecoilState, useRecoilValue } from 'recoil';
import { countAtom } from './store/atoms/count';

function App() {
  const [count, setCount] = useRecoilState(countAtom);
  
  return (
    <>
      <button onClick={() => setCount(count + 2)}>Count: {count}</button>
    </>
  );
}

export default App;
