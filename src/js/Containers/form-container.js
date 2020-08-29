import React from "react";

export default function FormContainer(props) {
  return (
    <>
      <form>
        {props.children}
      </form>
    </>
  )
}
