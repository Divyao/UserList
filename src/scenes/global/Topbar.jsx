import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import React, { useState , useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useParams } from 'react-router-dom';
import axios from "axios";
import { Avatar } from "@material-ui/core";
import  {Link } from 'react-router-dom';




import {
  List,
  ListItem,
  ListItemText,
  Button,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2),
  },
  list: {
    backgroundColor: theme.palette.background.paper,
  },
  logoutButton: {
    marginTop: theme.spacing(2),
  },
}));

const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Mary' },
  { id: 3, name: 'Jane' },
];





const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const classes = useStyles();
  const [user, setUser] = useState([]);


  const {id}= useParams();
  const getUserData = async () => {
    try {
      const data = await axios.get(
        "https://panorbit.in/api/users.json"
      );
      console.log(id);
  
      const user = data.data.users.filter((thisProject )=> thisProject.id == id);
      console.log(user);
      setUser(user);
    } catch (e) {
      console.log(e);
    }
  };
  
  useEffect(() => {
    getUserData();
  }, []);
  
  
  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* SEARCH BAR */}
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      ></Box>

      {/* ICONS */}
      <Box display="flex">
        <IconButton>
          <>
          <List className={classes.list}>
            {user.map((item) => {
              return(
                <>
              <ListItem key={item.id}>
              <Avatar  alt="ProfilePicture" src={` ${item.profilepicture}`} />
                <ListItemText primary={item.name} />
              </ListItem>
              </>
              )})}
          </List>
          <Link to= {`/`}> 
          <Button> 
            Logout
          </Button>
          </Link>
        </>

        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
