import "./Hero.css";
import Typical from "react-typical";
import profile from "../../assets/profile.jpg";
import Button_1 from "../../components/Button-1";
import Curve from "../../components/Curve";


const Hero = () => {
  return (
<div className="hero">
<div className="hero-wrapper">
      <div className="hero-left">
        <h2 className="hero-social-icon"><i class="fab fa-linkedin"></i> 
            <i class="fab fa-github-square"></i>
            <i class="fab fa-instagram-square"></i>
            <i class="fab fa-twitter-square"></i>
        </h2>
        <h1 className="hero-left-name">
          Hello,I'M <span>ADARSH. T</span>
        </h1>
        <h1 className="hero-left-name-slide">
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
        <p className="hero-left-para">
          {""}
          Knack of building applications with front end and back end operations.
        </p>
        <div className="hero-btns">
          <Button_1 text={"Hire me"}/>
          <a className="hero-left-download" href="adarsh.pdf" download={"adarsh.pdf"} >
            Get Resume
          </a>
        </div>
      </div>
      <div className="hero-right">
          <div className="hero-image"  style={{backgroundImage: `url(${profile})`}} >
          </div>
      </div>
    </div>
    {/* <Curve/> */}
</div>
  );
};
export default Hero;
