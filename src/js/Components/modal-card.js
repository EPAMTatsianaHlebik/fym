import React, { Component } from "react";
import Button from "./button";

class ModalCard extends Component {
    render() {
        return (
            <>
                <div className="card-modal">
                    <Button className="close small" assistiveText="close modal" onClick={this.props.onHide}>X</Button>
                    <Button className="btn--row text-left" onClick={this.props.onShowModalEdit}>Edit</Button>
                    <Button className="btn--row text-left" onClick={this.props.onShowModalDelete}>Delete</Button>
                </div>
            </>
        )
    }
}
export default ModalCard