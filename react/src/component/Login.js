
import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

function Login() {
  return (
    <Container component="main" maxWidth="xs">
     <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
            Sign in
      </Typography>
      <TextField 
      label="Email Address" 
      required name="email" 
      autoComplete="email" 
      margin="normal"
      fullWidth
      autoFocus
      />
      <TextField 
      label="Password" 
      type='password' 
      fullWidth
      required name="password" 
      autoComplete="current-password"
      />
      <FormControlLabel 
      control={<Checkbox value="remember" color="primary"/>} 
      label="Remember me"
      />
      <Button 
      type="submit" 
      fullWidth
      variant = "contained"
      sx={{mt : 3, mb : 2}}> 
      Sign in
      </Button>
      <Grid container>
        <Grid item xs>
        <Link>Forgot password?</Link>
        </Grid>
        <Grid item>
        <Link> Sign Up</Link>
        </Grid>
      </Grid>
      </Box>
    </Container>
  );
}

export default Login;
