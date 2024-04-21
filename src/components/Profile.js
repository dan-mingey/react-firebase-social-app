import React from 'react';
import { Block } from 'baseui/block';
import CommonNavBar from './NavBar';

function Profile() {
  return (
    <Block>
      <CommonNavBar />
      <Block padding="scale600">
        <h1>Profile Page</h1>
        <p>Welcome to your profile. Here you can view and update your information.</p>
      </Block>
    </Block>
  );
}

export default Profile;
