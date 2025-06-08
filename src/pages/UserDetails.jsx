import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Paper, CircularProgress, Alert, Box } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/users/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error('Usuário não encontrado');
        return res.json();
      })
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <Container sx={{mt:8, textAlign:'center'}}><CircularProgress /></Container>;
  if (error) return <Container sx={{mt:8}}><Alert severity="error">{error}</Alert></Container>;
  if (!user) return null;

  return (
    <Container maxWidth="sm" sx={{mt:4}}>
      <Paper elevation={3} sx={{p:4}}>
        <Box display="flex" alignItems="center" mb={2}>
          <PersonIcon color="primary" sx={{fontSize:40, mr:2}}/>
          <Typography variant="h4" component="h1">
            {user.name}
          </Typography>
        </Box>
        <Typography variant="body1" color="text.secondary" gutterBottom>
          Email: {user.email}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ID: {user.id}
        </Typography>
      </Paper>
    </Container>
  );
};

export default UserDetails;
