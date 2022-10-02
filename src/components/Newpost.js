import React, { useState } from "react";
import Listpost from "./Listpost";

export default function Newpost(props) {
  const [ToUser, setToUser] = useState("");
  const HTO = (event) => {
    setToUser(event.target.value);
  };

  const [Email, setEmail] = useState("");
  const HEM = (event) => {
    setEmail(event.target.value);
  };

  const [Gift, setGift] = useState("");
  const HG = (event) => {
    setGift(event.target.value);
  };

  const [Head, setHead] = useState("");
  const HH = (event) => {
    setHead(event.target.value);
  };

  const [Des, setDes] = useState("");
  const HDes = (event) => {
    setDes(event.target.value);
  };

  const appendarrey = () => {
    let arrey=props.arr;
    arrey.unshift({
      to: ToUser,
      gmail: Email,
      gift: Gift,
      heading: Head,
      des: Des,
      likes: 0,
      dislikes: 0,
      comment: 0,
      share: 0,
      delete: 0,
    });
    props.setarr(props.arr);
    console.log(props.arr);
    props.setlist(<Listpost setlist={props.setlist} setarr={props.setarr} arr={props.arr} />);
  };
  return (
    <div>
      <div
        className=" bg-info bg-opacity-10 border border-info border-start-0 rounded-end"
        style={{ padding: "10rem 3rem 3rem 3rem" }}
      >
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            @
          </span>
          <input
            type="text"
            value={ToUser}
            onChange={HTO}
            className="form-control"
            placeholder="want to tag anyone ??"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>

        <div className="input-group mb-3">
          <input
            type="text"
            value={Email}
            onChange={HEM}
            className="form-control"
            placeholder="We will send a copy to this e-mail !!!"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <span className="input-group-text" id="basic-addon2">
            @gmail.com
          </span>
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text">$</span>
          <input
            type="text"
            value={Gift}
            onChange={HG}
            className="form-control"
            placeholder="Want to send a gift 😊 !!! tell us how much... "
            aria-label="Amount (to the nearest dollar)"
          />
          <span className="input-group-text">.00</span>
        </div>

        <div className="input-group mb-3">
          <input
            type="text"
            value={Head}
            onChange={HH}
            className="form-control"
            placeholder="What headline you are thinking now ??!"
            aria-label="Username"
          />
        </div>

        <div className="input-group">
          <span className="input-group-text">description</span>
          <textarea
            className="form-control"
            value={Des}
            onChange={HDes}
            placeholder="explain more , explore more 🤔 "
            aria-label="With textarea"
          ></textarea>
        </div>
        <div className="text-center">
          <button
            type="button"
            className=" btn btn-primary my-3"
            onClick={appendarrey}
          >
            <div className="d-flex ">
              <span className="material-symbols-outlined mx-1">hub</span>
              post
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
