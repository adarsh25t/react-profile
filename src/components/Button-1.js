import {Fragment} from "react";
import "./Button-1.css";

const Button_1 = ({text})=>{
    return(
      <Fragment>
          <button className="btn-1">{text}</button>
      </Fragment>
    )
}
export default Button_1;