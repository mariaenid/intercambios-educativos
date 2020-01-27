import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    overflow: "hidden",
    padding: theme.spacing(0, 3)
  },
  paper: {
    maxWidth: "100%",
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2)
  },
  capitalize: {
    'text-transform': 'capitalize',
  }
}));

export default function CardForm(props) {
  const classes = useStyles();
  const { name, text } = props;

  return (
    <Grid container wrap="nowrap" spacing={2}>
      <Grid item className={classes.capitalize}>{name}</Grid>
      <Grid item xs>
        <Typography>{text}</Typography>
      </Grid>
    </Grid>
  );
}

CardForm.PropTypes = {
  name: PropTypes.string,
  text: PropTypes.string
};
