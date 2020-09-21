import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import PropTypes from "prop-types";
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
      },
      paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        'border-radius': '0px',
        'box-shadow': '#00000000',
      },
      textField: {
          width: '100%',
      }
}));

export default function ColorTextFields(props) {
  const classes = useStyles();
  const { handleChange, names, title, values } = props;

  return (
    <form className={classes.root} noValidate autoComplete="off">
        <Grid item xs={10}>
            <Typography>
                {title}
            </Typography>
        </Grid>
          {names.map((name, index) =>
        <Grid item xs={10}>
        <Paper className={classes.paper}>
            <TextField className={classes.textField}
            id={`${name}-${index}`}
            name={name}
            label={name}
            value={values[index]}
            variant="outlined"
            multiline
            onChange={handleChange}
            />
          </Paper>
        </Grid>
        )}
    </form>
  );
}


