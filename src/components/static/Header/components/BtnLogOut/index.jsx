import React from "react";
import Button from "@material-ui/core/Button";
import { useStyles } from "./makeStyles";

const BtnLogOut = ({ onLogOut }) => {
  const classes = useStyles();

  return (
    <Button
      variant="contained"
      color="secondary"
      className={classes.button}
      onClick={onLogOut}
    >
      Log out
    </Button>
  );
};

export default BtnLogOut;
