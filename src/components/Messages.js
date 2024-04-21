import React from 'react';
import { Block } from 'baseui/block';
import CommonNavBar from './NavBar';

function Messages() {
  return (
    <Block>
      <CommonNavBar />
      <Block padding="scale600">
        <h1>Messages</h1>
        <p>This is your messages page. Here you can view and manage your messages.</p>
      </Block>
    </Block>
  );
}

export default Messages;
