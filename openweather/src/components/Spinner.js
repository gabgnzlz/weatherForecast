import React from "react";
import './../assets/css/Spinner.css';
const Spinner = () => {

    return(
        <div class="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        </div>
    );
}

export default Spinner;