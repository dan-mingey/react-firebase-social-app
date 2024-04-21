import React from 'react';
import { AppNavBar } from 'baseui/app-nav-bar';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';

function CommonNavBar() {
  const navigate = useNavigate();

  const mainItems = [
    { label: 'Profile', path: '/profile' },
    { label: 'Messages', path: '/messages' },
    { label: 'Settings', path: '/settings' }
  ];

  const handleMainItemSelect = (item) => {
    navigate(item.path);
  };

  const logout = () => {
    auth.signOut().then(() => navigate('/signin'));
  };

  const userItems = [
    { label: 'Logout', onClick: logout }
  ];

  return (
    <AppNavBar
      title="AppName"
      mainItems={mainItems}
      onMainItemSelect={handleMainItemSelect}
      userItems={userItems}
      username={auth.currentUser ? auth.currentUser.email : 'User'}
      overrides={{
         PrimaryMenuContainer: {
              style: {
                justifyContent: "left",
              },
            },
            AppName: {
              style: {
                marginRight: "50px",
              },
            },
       }}
      
    />
  );
}

export default CommonNavBar;
