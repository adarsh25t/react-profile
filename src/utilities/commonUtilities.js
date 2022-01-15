import Home from "../Sections/Home/Home";

const TOTAL_SCREEN = [
    {
        screen_name : "Home",
        component: Home
    }
];


const GET_SCREEN_INDEX = (screen_name)=>{
    if(!screen_name) return -1;
    for(let i = 0; i < TOTAL_SCREEN; i++){
        if(TOTAL_SCREEN[i].screen_name === screen_name) return -1;
    }
    return -1;
}

export {TOTAL_SCREEN,GET_SCREEN_INDEX};