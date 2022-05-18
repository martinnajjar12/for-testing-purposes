import { useTransition, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { filtered } from './reduxStore';

const Transition = () => {
  const [input, setInput] = useState('');
  const result = useSelector(state => state);
  const dispatch = useDispatch();
  const [isPending, startTransition] = useTransition();

  const changeHandler = e => {
    startTransition(() => {
      setInput(e.target.value);
    });
  };

  useEffect(() => {
    dispatch(filtered(input));
  }, [input, dispatch]);

  return (
    <div className="App-header">
      <h1>React 18</h1>
      <input type="search" onChange={changeHandler} />
      <ul>
        {isPending ? (
          <p>Loading...</p>
        ) : (
          result.map(item => <li key={uuidv4()}>{item}</li>)
        )}
      </ul>
    </div>
  );
};

export default Transition;
