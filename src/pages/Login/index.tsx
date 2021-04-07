import React, { ReactElement, useEffect } from "react";
import { Link } from "react-router-dom";
import { userRegister } from "@services/userServices";

function Home(): ReactElement {
  useEffect(() => {
    userRegister().then((res) => {
      console.log(res.userName);
    });
  }, []);

  return (
    <div>
      <Link to="/">login</Link>
    </div>
  );
}

export default Home;
