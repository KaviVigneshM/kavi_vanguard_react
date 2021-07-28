import { useState } from 'react';
import SecondTopNavComponent from "../../components/secondtopNavigationComponent/SecondTopNavComponent";

function SecondNaviContainer(props) {
    const [disabled,setDisabled]=useState(false);
    const changeham=()=>
    {
        setDisabled(!disabled);
    }
    return (
        <div>
            <SecondTopNavComponent changeham={changeham} name={disabled}/>
        </div>
    )
}

export default SecondNaviContainer;
