import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { setAllIdeas, setCountry, setMyIdeas, setProfession, setStacks } from '../../storage/slises/dataSlise';
import { useDispatch, useSelector } from 'react-redux';

import Header from '../header/Header';
import Main from '../main/Main';

function App() {
  const id = useSelector(state => state.user.id)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setProfession());
    dispatch(setStacks());
    dispatch(setCountry());
    dispatch(setAllIdeas());
  }, [])

  return (
    <BrowserRouter>
      <div className='wrapApp'>
        <Header />
        <Main />
      </div>
    </BrowserRouter>
  );
}

export default App;
