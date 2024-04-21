import React from 'react';
import { Block } from 'baseui/block';
import CommonNavBar from './NavBar';

function Settings() {
  return (
    <Block>
      <CommonNavBar />
      <Block padding="scale600">
        <h1>Settings</h1>
        <p>This is your settings page. You can update your preferences and account settings here.</p>
      </Block>
    </Block>
  );
}

export default Settings;
