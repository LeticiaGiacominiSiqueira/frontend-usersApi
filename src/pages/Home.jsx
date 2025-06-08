import React, { useEffect, useState } from 'react';
import UserCard from '../components/UserCard';
import { Container, Typography, Grid, CircularProgress, Alert, Paper } from '@mui/material';

const Home = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/users')
      .then((res) => {
        if (!res.ok) throw new Error('Erro ao buscar usuários');
        return res.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <Container sx={{mt:8, textAlign:'center'}}><CircularProgress /></Container>;
  if (error) return <Container sx={{mt:8}}><Alert severity="error">{error}</Alert></Container>;

  return (
    <Container maxWidth="md" sx={{mt:4}}>
      <Paper elevation={3} sx={{p:3, mb:3}}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Usuários
        </Typography>
      </Paper>
      <Grid container spacing={2}>
        {users.map((user) => (
          <Grid item xs={12} sm={6} md={4} key={user.id}>
            <UserCard user={user} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
