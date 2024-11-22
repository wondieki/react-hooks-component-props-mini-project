import React from "react";

const About = ({image, about}) => {
  return (
    <aside>
        <img src={image} alt="blog logo"/>
        <p>{about}</p>
    </aside>
  );
};
About.defaultProps={image:"https://via.placeholder.com/215"}
export default About;