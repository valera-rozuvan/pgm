import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from "react";
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import FormHelperText from '@mui/material/FormHelperText';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';

import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../../theme';

import { useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const [publicKey, setPublicKey] = useState("");
  const [privateKey, setPrivateKey] = useState("");
  const navigate = useNavigate();
  const keys = useSelector(state => state.keys);

  function handleSubmit(event) {
    event.preventDefault()
    dispatch({type:"SET_USER_KEYS", data:{publicKey,privateKey}})
    navigate('/msg');
  }

  return (

    <ThemeProvider theme={theme}>
      <Container align='center' maxWidth='sm' sx={{ mt: '4rem' }}>

        <Typography variant='h7'>In order to start messaging
          please provide your public
          and private keys.
          You should generate them
          using GPG (see instructions here)
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box display='block' sx={{ mt: '2rem' }}>
            <FormControl>
              <InputLabel htmlFor='my-input'>Public key</InputLabel>
              <Input
                id='public-key-input'
                aria-describedby='my-helper-text'
                name="publicKey"
                value={publicKey}
                onChange ={event => setPublicKey(event.currentTarget.value)}
                type='text' />
              <FormHelperText id='my-helper-text'>Write your public key
                {/* value={keys.public} */}
              </FormHelperText>
            </FormControl>
          </Box>
          <Box display='block' sx={{ mt: '2rem' }}>
            <FormControl>
              <InputLabel htmlFor='my-input'>Private key</InputLabel>
              <Input
                id='private-key-input'
                aria-describedby='my-helper-text'
                type='text'
                name="privateKey"
                onChange ={event => setPrivateKey (event.currentTarget.value)}
                value={privateKey} />
              <FormHelperText id='my-helper-text'>Write your private key
                {/* value={keys.private} */}
              </FormHelperText>
            </FormControl>
          </Box>
          <Box display='block' sx={{ mt: '2rem' }}>
            <Button type="submit">
              <CheckCircleOutlinedIcon sx={{ fontSize: '4rem', color: '#ac9fbf' }}></CheckCircleOutlinedIcon>
            </Button>
          </Box>
        </form>
        <Link to='/keys/generate'>
          <Button variant='contained' sx={{ mt: '2rem' }}>or generate new</Button>
        </Link>
      </Container>
    </ThemeProvider>
  );
};
export { Login };
