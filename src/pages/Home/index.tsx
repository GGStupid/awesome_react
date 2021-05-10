import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IRootSate } from "@store/root";
import { userInfoGet, userLogout } from "@src/services/userServices";

function Home() {
  const histroy = useHistory();
  const dispatch = useDispatch();
  const { userModel } = useSelector((state: IRootSate) => state);

  const handleLogout = async () => {
    let res = await userLogout();
    console.log(res);

    histroy.replace("/login");
  };
  useEffect(() => {
    userInfoGet().then((res) => console.log(res));
    return () => {};
  }, []);

  return (
    <div>
      <button onClick={handleLogout}>退出</button>
      <div>Home</div>
      <div>{userModel?.userName}</div>
    </div>
  );
}

export default Home;
