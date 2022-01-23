import ScreenHeading from "./ScreenHeading";
import "./Pskills.css";
import postman from '../assets/postman.png';
import vscode from '../assets/vscode.png';
import firebase from "../assets/firebase.png";

const Pskills = ()=>{
    return(
        <div>
             <ScreenHeading title={"Professional Skillset"} subHeading={"Why choose me?"}/>
             <div className="ab-skills">
                <div className="skill">
                    <i class="fab fa-html5"></i>
                </div>
                <div className="skill">
                    <i class="fab fa-css3-alt"></i>
                </div>
                <div className="skill">
                    <i class="fab fa-bootstrap"></i>
                </div>
                <div className="skill">
                    <i class="fab fa-js"></i>
                </div>
                <div className="skill">
                    <i class="fab fa-react"></i>
                </div>
                <div className="skill">
                    <i class="fab fa-php"></i>
                </div>
                <div className="skill">
                    <i class="fas fa-database"></i>
                </div>
                <div className="skill">
                    <i class="fab fa-git-alt"></i>
                </div>
                <div className="skill">
                    <i class="fab fa-aws"></i>
                </div>
                <div className="skill">
                    <img src={firebase} alt="" />
                </div>
             </div>
             <ScreenHeading title={"Tools I use"} subHeading={"Why choose me?"}/>
             <div className="ab-skills">
                <div className="skill">
                    <i class="fab fa-linux"></i>
                </div>
                <div className="skill">
                    <img src={postman} alt="" />
                </div>
                <div className="skill">
                    <i class="fab fa-gitlab"></i>
                </div>
                <div className="skill">
                <img src={vscode} alt="" />
                </div>
                <div className="skill">
                    <i class="fab fa-github"></i>
                </div>
             </div>
        </div>
    )
}
export default Pskills;