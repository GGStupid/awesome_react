import React, { ClassAttributes, ReactElement } from "react";
import { useHistory } from "react-router-dom";

function About(props: ClassAttributes<unknown>): ReactElement {
  const histroy = useHistory();
  console.log(props);
  const handleBack = () => histroy.goBack();
  return (
    <div>
      <div onClick={handleBack}>back</div>
      <div>About</div>
    </div>
  );
}

export default About;
