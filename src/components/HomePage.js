import React from 'react';
import { Block } from 'baseui/block';
import { Routes, Route } from 'react-router-dom';
import Profile from './Profile';
import Messages from './Messages';
import Settings from './Settings';

export function HomePage() {
  return (
    <Block>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Block>
  );
}

export default HomePage;
