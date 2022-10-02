import React , {useState} from "react";
import Listpost from "./Listpost";
import Newpost from "./Newpost";

export default function Dashboard() {

  var brr = [{
    to: "sf",
    gmail: "safld",
    gift: "322",
    heading: "asff",
    des: "asfasf asf assfds saf saf",
    likes: 0,
    dislikes: 0,
    comment: 0,
    share: 0,
    delete: 0
  }];
  const [arr, Setarr] = useState(brr);
  const [list,Setlist]=useState(<Listpost setarr={Setarr} arr={arr} />)
  return (
    <div className="container" style={{"minHeight":"100vh"}}>
      <Newpost setlist={Setlist} setarr={Setarr} arr={arr} />
        {list}
      </div>
  );
}
