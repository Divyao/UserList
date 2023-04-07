// import { Box } from "@mui/material";

// import Header from "../../components/Header";

// const Profile = () => {
//   return (
//     <Box m="20px">
//       {/* HEADER */}
//       <Box display="flex" justifyContent="space-between" alignItems="center">
//         <Header title="PROFILE" subtitle="Welcome to Profile Page" />

//         <Box></Box>
//       </Box>

//       {/* GRID & CHARTS */}
//       <Box>{/* ROW 1 */}</Box>
//       <Box width="100%" m="0 30px">
//         <Box display="flex" justifyContent="space-between"></Box>
//       </Box>
//     </Box>
//   );
// };

// export default Profile;

import *  as React  from 'react';
import {useEffect,useState} from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Header from "../../components/Header";
//import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
//import Paper from '@mui/material/Paper';
//import Grid from '@mui/material/Grid';
import { makeStyles } from "@material-ui/core/styles";
import { Avatar, Typography, Grid, Paper } from "@material-ui/core";
import map from '../../components/Images/Map.jpg';
import { useParams } from 'react-router-dom';
import axios from "axios";
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Topbar from "../../scenes/global/Topbar";
import Sidebar from "../../scenes/global/Sidebar";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(1),
    maxWidth : 600,
    width :'100%'
  },
  paper: {
    padding: theme.spacing(15),
    maxWidth : 1000,
    width :'100%'
  },
  avatar: {
    width: theme.spacing(22),
    height: theme.spacing(22),
    margin: "auto",
  },
}));

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 37.7749,
  lng: -122.4194,
};
  

  function TabPanel(props) {

    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
       maxWidth : 600
    };
  }
    

  

const Profile = () => {

  const StyledPaper = styled(Paper)(({ theme }) => ({
    maxWidth: 500,
    maxHeight: 500,
  }));


  const classes = useStyles();
  const [user, setUser] = useState([]);
  const [isSidebar, setIsSidebar] = useState(true);
  const [value, setValue] = React.useState(0);

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


    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return  (
      <>
      <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />

      <div style={{ marginLeft:'15px'}}>
      <Box >
       {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
         <Header  subtitle=" Profile" />
           </Box>
       {/* GRID & CHARTS */}
       
     </Box>

      <div style={{ marginLeft:'10px'}}>
      <Grid container spacing={6}>
        <div style={{ marginLeft:'10px', }}>
        <Grid  item xs={10}>
        
        {user
              .map((item) => {
                return (
                  <Paper className={classes.paper} key={item.id}>          
                  <Avatar style={{   marginBottom: '1rem' }} className={classes.avatar} alt="ProfilePicture" src={` ${item.profilepicture}`} />
                   <Typography style={{  marginBottom: '1rem' }} variant="h4">{item.name}</Typography>
                  <Typography style={{  marginBottom: '1rem' }} align= 'justified ' variant="h6">Username : {item.username}</Typography>
                  <Typography style={{ marginBottom: '1rem' }}align= 'justified'variant="h6">e-mail : {item.email}</Typography>
                  <Typography style={{  marginBottom: '1rem' }} align= 'justified'variant="h6">Website : {item.website}</Typography>
                  <Divider  />
                  <Typography style={{ marginLeft:'5rem', marginTop:'1rem', marginBottom: '1rem' }} variant="h6">Company</Typography>
                  <Typography style={{ marginTop:'1rem', marginBottom: '1rem' }} variant="h6">Name : {item.company.name} </Typography>
                  <Typography style={{ marginTop:'1rem', marginBottom: '1rem' }} variant="h6">catchphrase : {item.company.catchPhrase} </Typography>
                  <Typography style={{ marginTop:'1rem', marginBottom: '1rem' }} variant="h6">bs : {item.company.bs} </Typography>
                  </Paper>
                )})
        }
        </Grid>

        </div>
        <div >
          <div style={{ maxWidth: 600}}> 
        <Grid item xs={15} >
        
        {user
              .map((item) => {
                return (
                  <Paper className={classes.paper} key={item.id}> 
                  <Typography style={{  marginRight:'5rem'}} variant="h5" >Address :</Typography>
                  <Typography style={{  alignItems:'Right',marginLeft:'5rem', marginBottom: '0.5rem' }} variant="h6">Street : {item.address.street}</Typography>
                  <Typography style={{  alignItems:'Right' ,marginLeft:'5rem', marginBottom: '0.5rem' }} variant="h6">Suit : {item.address.suite}</Typography>
                  <Typography style={{  alignItems:'Right',marginLeft:'5rem', marginBottom: '0.5rem' }} variant="h6">City : {item.address.city}</Typography>
                  <Typography style={{  alignItems:'Right',marginLeft:'5rem', marginBottom: '0.5rem' }} variant="h6">Zip : {item.address.zipcode}</Typography>
                  </Paper>
                  )})
        }          
        </Grid>
        </div>
        <div style={{ margin: '10px'}}>
          <Grid>
            <img className="my-image"alt='Map' src={`url(${map})` }></img>
          </Grid>
        </div>
        </div>

        {/* <Grid item xs={12} md={8}>
          <Paper className={classes.paper}>
            <Typography variant="h6">Address:</Typography>
            <Typography variant="body1">
              123 Main St, San Francisco, CA 94102
            </Typography>
            <Typography variant="h6">Map:</Typography> */}
            {/* <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
              <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
                <Marker position={center} icon={<Room />} />
              </GoogleMap>
            </LoadScript> */}
              {/* <img alt='Map' src={ `url(${map})`}/> 
          </Paper>
          </Grid>
         */}
      </Grid>
      </div>
      </div>
      </main>
      </div>
      </>
    )
}

export default Profile;
