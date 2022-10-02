import React, { Component } from "react";
import Options from "./Options";
// text-white bg-primary
export class Signup extends Component {
  render() {
    return (
      <div className="container pt-3 bg-info rounded" style={{"minHeight":"100vh"}}>
        <form className="row p-5 g-3 needs-validation" novalidate>
          <div className="col-md-4">
            <label for="validationCustom01" className="form-label">
              First name
            </label>
            <input
              type="text"
              className="form-control"
              id="validationCustom01"
              // value="Mark"
              required
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="col-md-4">
            <label for="validationCustom02" className="form-label">
              Last name
            </label>
            <input
              type="text"
              className="form-control"
              id="validationCustom02"
              // value="Otto"
              required
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="col-md-4">
            <label for="validationCustomUsername" className="form-label">
              Username
            </label>
            <div className="input-group has-validation">
              <span className="input-group-text" id="inputGroupPrepend">
                @
              </span>
              <input
                type="text"
                className="form-control"
                id="validationCustomUsername"
                aria-describedby="inputGroupPrepend"
                required
              />
              <div className="invalid-feedback">Please choose a username.</div>
            </div>
          </div>
          <div className="col-md-6">
            <label for="validationCustom03" className="form-label">
              City
            </label>
            <input
              type="text"
              className="form-control"
              id="validationCustom03"
              required
            />
            <div className="invalid-feedback">Please provide a valid city.</div>
          </div>
          <div className="col-md-3">
            <label for="validationCustom04" className="form-label">
              State
            </label>
            <select className="form-select" id="validationCustom04" required>
              <option selected disabled value="">
                Choose...
              </option>
              <Options />
            </select>
            <div className="invalid-feedback">Please select a valid state.</div>
          </div>
          <div class="form-floating mt-3">
            <input
              type="email"
              class="form-control text-dark"
              id="floatingInput"
              placeholder="name@example.com"
              required
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
              required
            />
            <label for="floatingPassword">Password</label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
              required
            />
            <label for="floatingPassword">Confirm Password</label>
          </div>
          <div className="col-12">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="invalidCheck"
                required
              />
              <label className="form-check-label" for="invalidCheck">
                Agree to terms and conditions
              </label>
              <div className="invalid-feedback">
                You must agree before submitting.
              </div>
            </div>
          </div>
          <div className="col-12">
            <button
              className="btn btn-primary d-flex text-align-center"
              type="submit"
            >
              <div>Signup and Enjoy</div>
              <div style={{ "font-size": "1.3rem" }}>🦌</div>
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Signup;
