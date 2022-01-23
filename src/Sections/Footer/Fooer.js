import "./Footer.css";

const Footer = ()=>{
    return(
        <div className="footer">
            <h4>Designed and Developed by ADARSH.T</h4>
            <h4>Copyright © 2022 Ah</h4>
            <h4 className="footer-icon">
                <a href=""><i class="fab fa-github"></i></a> 
                <a href=""><i class="fab fa-linkedin-in"></i></a> 
                <a href=""><i class="fab fa-stack-overflow"></i></a> 
                <a href=""><i class="fab fa-twitter"></i></a>
            </h4>
        </div>
    )
}
export default Footer;