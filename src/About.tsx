import React, { ClassAttributes, ReactElement } from "react";

function About(props: ClassAttributes<any>): ReactElement {
  console.log(props);
  return <div>about</div>;
}

export default About;
