import Button_1 from "../../components/Button-1";
import ScreenHeading from "../../components/ScreenHeading";
import "./AboutMe.css";

const TEXTCONTENT = {
    title: "Full stack web developer with experience in both front end and back end with broad skills and experience in web develpment and leading project",
    Highlights:{
        bullets:[
            "Full stack web development",
            "Interative Front End as per the design",
            "React Js",
            "Redux for State management",
            "Building REST API",
            "Managing database"
        ],
        heading:"Here are a Few Highlights:"
    }
}

const AboutMe = ()=>{

    const renderHighlights = ()=>{
        return(
            TEXTCONTENT.Highlights.bullets.map((value,i)=>{
                return(
                    <div className="Highlights" key={i}>
                        <div className="Highlights-blob"></div>
                            <span>{value}</span>
                    </div>
                )
            })
        )
    }


    return(
        <div className="about-me-container screen-container">
            <div className="about-me-parent">
                <ScreenHeading title={"About Me"} subHeading={"Why choose me?"}/>
                <div className="about-me-card">
                <div className="about-me-profile">
                    <div className="about-image">
                        <img src="" alt="" />
                    </div>
                </div>
                <div className="about-me-details">
                    <span className="about-me-description">{TEXTCONTENT.title}</span>
                    <div className="about-me-hightlights">
                        <div className="highlight-heading">
                            <span>{TEXTCONTENT.Highlights.heading}</span>
                        </div>
                        {renderHighlights()}
                    </div>
                    <div className="about-me-options">
                    <div className="hero-btns">
                        <Button_1 text={"Hire me"}/>
                        <button className="download-link"><a className="" href="adarsh.pdf" download={"adarsh.pdf"} >Get Resume</a></button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}
export default AboutMe;