import React from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Table from "components/Table";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`
  };
}

const styles = theme => ({
  root: {
    flexGrow: 1
  }
});

export default function SideNavegation(props) {
  const classes = withStyles(styles);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };
  const { options, data } = props;
  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        {options.map(({title, key}, index) => (
          <Tab label={title} {...a11yProps(index)} />
        ))}
      </Tabs>
      {options.map(({name, key}, index) => (
        <TabPanel value={value} index={index}>
          {() => data[key]}
        </TabPanel>
      ))}
    </Paper>
  );
}

//Contendrá las options y lo que contendria cada menu
SideNavegation.PropTypes = {
  options: PropTypes.array,
  data: PropTypes.object
};