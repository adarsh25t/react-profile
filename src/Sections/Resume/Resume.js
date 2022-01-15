import ScreenHeading from "../../components/ScreenHeading";
import "./Resume.css"

const Resume = ()=>{

    
    const ResumeHeading = (props)=>{
        <div className="resume-heading">
            <div className="resume-main-heading">
                <div className="heading-bullet">
                    <span>{props.heading ? props.heading : ""}</span>
                    { props.formDate && props.toDate ? (
                        <div className="heading-date">
                            {props.formDate + "_" + props.toDate}
                        </div>

                    ):(<div></div>)}
                </div>
                <div className="resume-sub-heading">
                    <span>{props.subHeading ? props.subHeading : ""}</span>
                </div>
                <div className="resume-heading-description">
                    <span>{props.description ? props.description : ""}</span>
                </div>
            </div>
        </div>
    }

    const ResumeBullets = [
        {label:"Work History", logSrc: "work-history.svg"},
        {label:"Programming-Skills", logSrc: "programming-skills.svg"},
        {label:"Projects", logSrc: "projects.svg"},
        {label:"Interests", logSrc: "interests.svg"},
        {label:"Education", logSrc: "education.svg"},
    ]
   

    return(
        <div className="resume">
            <ScreenHeading title={"Resume"} subHeading={"My Formal Bio Details"}/>
        </div>
    )
}
export default Resume;