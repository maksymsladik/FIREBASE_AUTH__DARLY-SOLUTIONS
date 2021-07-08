import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import swal from "sweetalert";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setEmailAndPassword } from "../../redux/reducer";
import { firebaseApp } from "../../../../firebase";
import { useStyles } from "./makeStyles";

const FormLogIn = () => {
  const classes = useStyles();

  const { email, password } = useSelector((state) => state.login);

  const dispatch = useDispatch();

  const onLogIn = (e) => {
    e.preventDefault();

    firebaseApp
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((error) => swal(error.message));
  };

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) =>
              dispatch(
                setEmailAndPassword({
                  name: e.target.name,
                  value: e.target.value,
                })
              )
            }
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) =>
              dispatch(
                setEmailAndPassword({
                  name: e.target.name,
                  value: e.target.value,
                })
              )
            }
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={onLogIn}
          >
            Log In
          </Button>

          <Grid container>
            <Grid item>
              <Link to="/logup">Don't have an account? Log Up</Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default FormLogIn;
