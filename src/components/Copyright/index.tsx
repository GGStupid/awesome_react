import React from "react";
import { Link, Typography } from "@material-ui/core";

export function Copyright() {
  const localUrl = window.location.origin;
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href={localUrl}>
        {localUrl}
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
