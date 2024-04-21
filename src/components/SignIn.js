import React, { useState } from 'react';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory
import { Input } from 'baseui/input';
import { Button } from 'baseui/button';
import { Block } from 'baseui/block';
import { HeadingXLarge, ParagraphSmall, LabelMedium } from 'baseui/typography';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const handleSignIn = async () => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
      navigate('/'); // Use navigate function to redirect
    } catch (error) {
      console.error("Error signing in", error);
    }
  };

  return (
    <Block
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      width="100%"
      backgroundColor="#f5f5f5"
    >
      <HeadingXLarge marginTop="scale100" marginBottom="scale400">My App</HeadingXLarge>
      <ParagraphSmall marginBottom="scale1000">A templated website to copy</ParagraphSmall>
      <Block
        width={['90%', '70%', '50%', '30%']}
        padding="scale600"
        backgroundColor="white"
        borderRadius="scale300"
        boxShadow="shadow400"
      >
        
        
        <Block marginBottom="scale600" display="flex" justifyContent="center">
        <LabelMedium font="font550">Sign In</LabelMedium>
        </Block>
        <Input 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="Email"
          marginBottom="scale400"
        />
        {/* Add spacing */}
        <Block marginBottom="scale400" />
        <Input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="Password"
          marginBottom="scale400"
        />
        <Block marginBottom="scale400" />

        <Block display="flex" justifyContent="space-between" alignItems="center">
          <Button kind="minimal" onClick={() => navigate('/signup')}>Don't have an account? Sign Up</Button>
          <Button onClick={handleSignIn}>Sign In</Button>
        </Block>
      </Block>
    </Block>
  );
}

export default SignIn;