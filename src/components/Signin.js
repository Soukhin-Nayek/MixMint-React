import React from "react";

export default function Signin(props) {

  const checkvalidity= ()=>{
    props.Setalert(1);
  } 
  return (
    <div className="container" style={{"padding-top":"6rem", "maxWidth":"1000px"}}>
      <div className="container bg-info rounded">
      <form class=" row g-3 needs-validation" onSubmit={checkvalidity} novalidate>
        <div class="col-md-6">
          <label for="validationCustomUsername" class="form-label">Username</label>
          <div class="input-group has-validation">
            <span class="input-group-text" id="inputGroupPrepend">@</span>
            <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" placeholder="Username" required/>
            <div class="invalid-feedback">
              Please choose a username.
            </div>
            <div class="valid-tooltip">
              Looks good!
            </div>
          </div>
        </div>
        <div class="col-12">
          <div class="form-floating">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"required/>
            <label for="floatingInput">Email address</label>
          </div>
        </div>
        <div class="col-12">
          <div class="form-floating">
            <input type="password" class="form-control" id="floatingPassword" placeholder="Password"required/>
            <label for="floatingPassword">Password</label>
          </div>
        </div>
        <div class="col-12">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
            <label class="form-check-label" for="invalidCheck">
              Agree to terms and conditions
            </label>
            <div class="invalid-feedback">
              You must agree before submitting.
            </div>
          </div>
        </div>
        <div class="col-12 mb-3">
          <button class="btn btn-primary" type="submit">Submit form</button>
        </div>
      </form> 
      </div>
    </div>
  );
}
