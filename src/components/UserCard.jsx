import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardActionArea, CardContent, Typography, Box } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

const UserCard = ({ user }) => {
  const navigate = useNavigate();
  return (
    <Card sx={{ minWidth: 220, borderRadius: 2, boxShadow: 2 }}>
      <CardActionArea onClick={() => navigate(`/dados/${user.id}`)}>
        <CardContent>
          <Box display="flex" alignItems="center" mb={1}>
            <PersonIcon color="primary" sx={{mr:1}}/>
            <Typography variant="h6" component="div">
              {user.name}
            </Typography>
          </Box>
          <Typography variant="body2" color="text.secondary">
            Email: {user.email}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default UserCard;
