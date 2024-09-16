"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';  // Import useRouter
import { TextField, Button, Typography, Box, IconButton, Grid } from '@mui/material';
import { Email, Lock, Person } from '@mui/icons-material';

const Login = () => {
  const [action, setAction] = useState('Sign Up');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();  // Initialize useRouter

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // API endpoint based on action (Sign In or Sign Up)
    const endpoint = action === 'Sign Up' ? '/api/register/' : '/api/login/';
    
    const bodyData = action === 'Sign Up' 
      ? { username, email, password, confirmPassword }
      : { email, password };

    try {
      const response = await fetch(`http://localhost:8000${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bodyData),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      if (action === 'Sign In') {
        // Save JWT token in localStorage for authenticated requests
        localStorage.setItem('authToken', data.access);
        alert('Login successful');
        router.push('/');  // Redirect to home after login
      } else {
        alert('Registration successful');
        setAction('Sign In');  // Switch to Sign In after successful Sign Up
        router.push('/');  // Redirect to home after registration
      }
      
    } catch (error) {
      setError(error.message);
    }
  };

  
  

  return (
    <main>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        sx={{
          mt: 2,
          width: '100%',
          maxWidth: 400,
          mx: 'auto',
          p: 3,
          bgcolor: 'background.paper',
          borderRadius: 1,
          boxShadow: 3,
          textAlign: 'center',
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          {action}
        </Typography>
        {error && <Typography color="error">{error}</Typography>}
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {action === 'Sign Up' && (
              <Grid item xs={11}>
                <Box display="flex" alignItems="center" gap={1}>
                  <IconButton>
                    <Person />
                  </IconButton>
                  <TextField
                    label="Username"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </Box>
              </Grid>
            )}
            <Grid item xs={11}>
              <Box display="flex" alignItems="center" gap={1}>
                <IconButton>
                  <Email />
                </IconButton>
                <TextField
                  label="Email"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Box>
            </Grid>
            <Grid item xs={11}>
              <Box display="flex" alignItems="center" gap={1}>
                <IconButton>
                  <Lock />
                </IconButton>
                <TextField
                  label="Password"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Box>
            </Grid>
            {action === 'Sign Up' && (
              <Grid item xs={11}>
                <Box display="flex" alignItems="center" gap={1}>
                  <IconButton>
                    <Lock />
                  </IconButton>
                  <TextField
                    label="Confirm Password"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </Box>
              </Grid>
            )}
          </Grid>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            size="large"
            sx={{ borderRadius: '50px', fontWeight: 700, mt: 2, mb: 2 }}
          >
            {action}
          </Button>
        </form>

        <Button
          onClick={() => setAction(action === 'Sign Up' ? 'Sign In' : 'Sign Up')}
          sx={{ color: 'text.primary', fontWeight: 700 }}
        >
          {action === 'Sign Up' ? 'Already have an account? Sign In' : 'New user? Sign Up'}
        </Button>
      </Box>
    </main>
  );
};

export default Login;


