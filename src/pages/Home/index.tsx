import React, { ReactElement, useEffect } from "react";
import { Link } from "react-router-dom";
import { userRegister } from "@services/userServices";

function Home(): ReactElement {
  useEffect(() => {
    userRegister().then((res) => {
      console.log(res);
    });
  }, []);

  return (
    <div>
      <Link to="/">home</Link>
      <br />
      <Link to="/about">about</Link>
    </div>
  );
}

export default Home;
