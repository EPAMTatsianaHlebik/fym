import React, { Component } from "react";

class Icon extends Component {
  render(){
    return (
      <>
        <a href="#" className={this.props.className} onClick = {this.props.onClick}>{this.props.text}</a>
      </>
    ) 
  }
}

export default Icon
