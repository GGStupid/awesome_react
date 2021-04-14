import React, { useRef, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Copyright } from "@src/components/Copyright";
import {
  useFormik,
} from "formik";
import { isEmail } from "@src/common/validate";
import { IUser, userRegister } from "@src/services/userServices";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

interface userForm {
  userName: string;
  password: string;
  email: string;
}

const handleValidate = (values: userForm) => {
  const errors: { [key: string]: string } = {};
  if (!values.userName) {
    errors.userName = "必填";
  } else if (values.userName.length < 5) {
    errors.userName = "用户名长度必须大于5位";
  }

  if (!values.password) {
    errors.password = "必填";
  } else if (values.password.length < 5) {
    errors.password = "密码长度必须大于5位";
  }

  if (!values.email) {
    errors.email = "必填";
  } else if (!isEmail(values.email)) {
    errors.email = "邮箱不正确";
  }
  console.log(errors);
  return errors;
};

export default function SignUp() {
  const classes = useStyles();

  const handleSubmit = (values: IUser) => {
    console.log(values);
    userRegister(values);
  };

  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
      email: "",
    },
    validate: handleValidate,
    onSubmit: handleSubmit,
  });

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          注册
        </Typography>
        <form className={classes.form} onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="userName"
                value={formik.values.userName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={!!formik.errors.userName}
                helperText={formik.errors.userName}
                name="userName"
                variant="outlined"
                // required
                fullWidth
                id="userName"
                label="用户名"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={!!formik.errors.password}
                helperText={formik.errors.password}
                variant="outlined"
                // required
                fullWidth
                name="password"
                label="密码"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={!!formik.errors.email}
                helperText={formik.errors.email}
                variant="outlined"
                // required
                fullWidth
                id="email"
                label="邮箱"
                name="email"
                autoComplete="email"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            注册
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                注册成功？去登录
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
