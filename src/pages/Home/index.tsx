import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IRootSate } from "@store/root";

function Home() {
  const histroy = useHistory();
  const dispatch = useDispatch();
  const { userModel } = useSelector((state: IRootSate) => state);

  const handleBack = () => histroy.replace("/login");
  const handlePing = () => {};

  return (
    <div>
      <div onClick={handleBack}>loginout</div>
      <div>Home</div>
      <div>{userModel?.userName}</div>
      <button onClick={handlePing}>ping</button>
    </div>
  );
}

export default Home;
