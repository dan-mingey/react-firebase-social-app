import React, { useState } from 'react';
import { auth } from '../firebase'; // Assuming you have this setup
import { Input } from 'baseui/input';
import { Button } from 'baseui/button';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory
import { Block } from 'baseui/block';
import { HeadingXLarge, ParagraphSmall, LabelMedium } from 'baseui/typography';

function SignUp() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
     const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleSignUp = async () => {
    try {
    const userCredential = await auth.createUserWithEmailAndPassword(email, password);
      const user = userCredential.user;
      await user.updateProfile({
        displayName: `${firstName} ${lastName}`
      });
      navigate('/'); 
    } catch (error) {
      console.error("Error signing up", error);
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
      <HeadingXLarge marginTop="scale10" marginBottom="scale400">My App</HeadingXLarge>
      <ParagraphSmall marginBottom="scale1000">A templated website to copy</ParagraphSmall>
      <Block
        width={['90%', '70%', '50%', '30%']}
        padding="scale600"
        backgroundColor="white"
        borderRadius="scale300"
        boxShadow="shadow400"
      >
        <Block marginBottom="scale600" display="flex" justifyContent="center">
          <LabelMedium font="font550">Sign Up</LabelMedium>
        </Block>
        <Input 
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First Name"
          marginBottom="scale400"
        />
        <Block marginBottom="scale400" />
        <Input 
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last Name"
          marginBottom="scale400"
        />
        <Block marginBottom="scale400" />
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
          <Button kind="minimal" onClick={() => navigate('/signin')}>Already have an account? Sign In</Button>
          <Button onClick={handleSignUp}>Sign Up</Button>
        </Block>
      </Block>
    </Block>
  );
}

export default SignUp;