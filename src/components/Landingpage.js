import { useEffect, useState } from "react";
import * as React from 'react';
import axios from "axios";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import  {Link } from 'react-router-dom';
import { FixedSizeList, ListChildComponentProps } from "react-window";
import image from './Images/BCImage2.jpg';


const LandingPage = () => {
  
  const styles = {
    listContainer: {
      maxHeight: '400px',
      overflowY: 'scroll'
    }
  }
  
  const StyledPaper = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    maxWidth: 500,
    color: theme.palette.text.primary,
  }));

  const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
    </Box>
  );
  
  
  const [users, setUsers] = useState();
  useEffect(() => {

    axios
      .get("https://panorbit.in/api/users.json")
      .then((response) => {
        setUsers(response.data.users);
      })
      .catch((error) => {
        "error";
      });
  }, []);

  const renderUserData = () => {
    const data = users ? users : [];
    const dataJsx = (data).map((user) => {
      return  (
      < >
      <div key = {user.id}>
        {/* <Grid item>
            <Avatar>W</Avatar>
          </Grid> */}
         
         
         <Link to= {`/profile/${user.id}`}> 
        <List   sx={{ maxHeight: 200,width: '100%', maxWidth: 500, bgcolor: 'background.paper', }}>  
          <ListItem alignItems="flex-start" >
          <ListItemAvatar>
          <Avatar alt="ProfilePicture" src={` ${user.profilepicture}`}
         />
           </ListItemAvatar>

        <ListItemText 

          primary=<p> {user.name}</p>
          
        />
          </ListItem>
          <Divider component="li" />
          
        </List>
        </Link>
        </div>
      </>
      ) 
    });
    return dataJsx;
  };

  return (
    <>
    <div style={{  backgroundImage:`url(${image})` }}>
    {/* <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Select an account
        </Typography> */}
    <Grid container wrap="nowrap" spacing={2}>
      <Grid item xs zeroMinWidth>
        <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }} >
      <StyledPaper  
        sx={{
          my: 12.5,
          mx: 'auto',
          p: 2,
          
        }}
      >
< >
<div>
      <h1>Select an account</h1>
      <h2 style={styles.listContainer} >{renderUserData()} </h2>
</div>
</>
    </StyledPaper>
    </Box>
    </Grid>
  </Grid>
  </div>
  </>
  );
};

export default LandingPage;
