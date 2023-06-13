import React, { useEffect } from 'react';
import './App.css';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { fetchUsers } from './store/reducers/ActionCreators';
import { PostContainer } from './components/PostContainer';

function App() {

  // const { users, error, isLoading } = useAppSelector(state => state.userReducer);
  // const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(fetchUsers())
  // }, [])


  return (
    <div className="App">
      {/* {isLoading && <h1>Loading...</h1>}
    {error && <h1>ERROR</h1>}
      {JSON.stringify(users, null, 2)} */}
      <PostContainer />
    </div>
  );
}

export default App;
