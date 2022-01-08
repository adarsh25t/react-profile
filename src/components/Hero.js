import "./Hero.css";
import Typical from "react-typical";
import profile from "../assets/profile.jpg"

const Hero = () => {
  return (
<div className="hero">
<div className="hero-wrapper">
      <div className="hero-left">
        <h2>social icons</h2>
        <h1>
          Hello,I'M <span>ADARSH. T</span>
        </h1>
        <h1>
          <Typical
            loop={Infinity}
            steps={[
              "ADARSH. T",
              1000,
              "full stack developer",
              1000,
              "React Js developer",
              1000,
            ]}
          />
        </h1>
        <p>
          {""}
          Knack of building applications with front end and back end operations.
        </p>
        <div className="hero-btns">
          <button>
            {""}
            Hire me
          </button>
          <a href="adarsh.pdf" download={"adarsh.pdf"}>
            Get Resume
          </a>
        </div>
      </div>
      <div className="hero-right">
          <div className="hero-image"  style={{backgroundImage: `url(${profile})`}} >
          </div>
      </div>
    </div>
</div>
  );
};
export default Hero;
