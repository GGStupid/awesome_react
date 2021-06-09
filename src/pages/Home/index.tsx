import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IRootSate } from "@store/root";
import {
  userInfoGet,
  userLogout,
  userTokenRefresh,
} from "@src/services/userServices";

function Home() {
  const histroy = useHistory();
  const dispatch = useDispatch();
  const { userModel } = useSelector((state: IRootSate) => state);

  const handleLogout = async () => {
    let res = await userLogout();
    console.log(res);
    histroy.replace("/login");
  };
  
  const handleRefresh = async () => {
    const res = await userTokenRefresh();
    console.log(res);
  };

  useEffect(() => {
    userInfoGet()
      .then((res) => console.log(res))
      .catch((err) => {
        console.log(",,,,", err);
        histroy.replace("/login");
      });
    return () => {};
  }, []);

  return (
    <div>
      <button onClick={handleLogout}>退出</button>
      <div>Home</div>
      <div>{userModel?.userName}</div>
      <button onClick={handleRefresh}>刷新token</button>
    </div>
  );
}

export default Home;
