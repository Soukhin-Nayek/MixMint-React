import React from "react";

export default function Alert(props) {
  return (
    <div className="position-relative"style={{"paddingTop":"5rem"}}>
      {props.alert && (
         <div class="container alert alert-success" role="alert">
          Sucessfully sign in...!!!
        </div>)
        }
    </div>
  );
}
