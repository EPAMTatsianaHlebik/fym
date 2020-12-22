import React from "react";
import Button from "../Components/button";

const ModalBox = (props) => 
<div className="modal">
    {props.children}
    <Button className="close" assistiveText="close modal" onClick = {props.onHide}>X</Button>
</div>
export default ModalBox;