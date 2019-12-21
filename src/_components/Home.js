import React,{ useEffect} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { fetchBankDetails } from "../_actions/bankActions";
import BankDetails from './BankDetails';
import BankGraph from './BankGraph';

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  useEffect(() => {
   
}, []);

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
 

};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={event => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function NavTabs({props}) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  fetchBankDetails();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  var margin = {top: 10, right: 100, bottom: 30, left: 30},
  width = 460 - margin.left - margin.right,
  height = 400 - margin.top - margin.bottom;
  return (
    
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          <LinkTab label="Bank " href="/drafts" {...a11yProps(0)} />
          <LinkTab label="Series" href="/trash" {...a11yProps(1)} />
         
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
       <BankDetails value={value} index={0} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        
          <BankGraph value={value} index={0} width={width} height={height} margin={margin}/>
       
      </TabPanel>
      
    </div>
  );
}
