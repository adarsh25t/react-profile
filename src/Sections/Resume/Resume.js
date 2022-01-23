import ScreenHeading from '../../components/ScreenHeading';
import "./Resume.css";

const Resume = (props) => {
  return(
    <div className="resume">
         <ScreenHeading title={"My Resume"} subHeading={"E&P - IT Related"}/>
         <a className="hero-left-download" href="adarsh.pdf" download={"adarsh.pdf"} >
                <i class="fas fa-download"></i> Download CV
          </a>
          <img src="https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720__480.jpg" alt="" />
         
    </div>
  )
};

export default Resume;

