import React from 'react';
import './Logout.css';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../features/userSlice';

const Logout = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="logout">
      <h1>Hello, <span className="user__name">{user?.name}</span>!</h1>
      <button className="logout__button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Logout;
