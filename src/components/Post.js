import React , {useState} from "react";
import Listpost from "./Listpost";


export default function Post(props){
    var [likes, setlikes] = useState(); 
    likes=props.arr[props.index].likes;
    var [dislikes, setdislikes] = useState(); 
    dislikes=props.arr[props.index].dislikes;
    var [comment, setcomment] = useState(props.arr[props.index].comment); 
    comment=props.arr[props.index].comment;
    var [share, setshare] = useState(props.arr[props.index].share);
    share=props.arr[props.index].share;
    console.log(likes,dislikes,comment,share,props.arr[props.index].likes); 
    
    const deleteitem=()=>{
        props.arr.splice(props.index,1);
        props.setarr(props.arr);
        props.setlist(<Listpost setlist={props.setlist} setarr={props.setarr} arr={props.arr} />);
    }
    return (
      <div className="list-group-item m-3  text-center card p-0">
            <div className="row g-0" >
                {/* <div className="col-6">
                    <img src={require('./img-1.png')}  className="img-fluid float-start rounded-start" alt="..."/>
                </div> */}
                <div className="col">
                    <div className="card-body ">
                    <h5 className="card-title">{props.arr[props.index].heading}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                        to 
                        <a href="/" className="mx-1 text-decoration-none">
                            @{props.arr[props.index].to} 
                        </a>
                        from 
                        <a href="/" className="mx-1 text-decoration-none">
                            @someone 
                        </a>

                    </h6>
                    <div className="container" style={{"maxWidth":"50%"}}>
                        <p className="card-text">
                            description Some quick example text to build on the card title and
                            make up the bulk of the card's content.
                        </p>
                    </div>
                    <a href="/" className="card-link text-decoration-none">
                        @someone sent a gift of {props.arr[props.index].gift}/- for you 😇😇😇
                    </a>
                    {/* <blockquote className="blockquote mb-0">
                                <p>A well-known quote, contained in a blockquote arr[props.index].</p>
                                <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                            </blockquote> */}
                    </div>
                    <div className="card-footer text-muted ">
                    <div className="card-body  p-0">
                    <button type="button" className="m-3 btn btn-success position-relative" onClick={()=>{setlikes(++props.arr[props.index].likes)}}>
                        <div className="d-flex ">
                            <span className="material-symbols-outlined mx-1">
                            thumb_up
                            </span>
                            like
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                {likes}
                                <span className="visually-hidden">unread messages</span>
                            </span>
                            </div>
                        </button>
                        <button type="button" className="m-3 btn btn-warning position-relative" onClick={()=>{setdislikes(++props.arr[props.index].dislikes)}}>
                        <div className="d-flex ">
                            <span className="material-symbols-outlined mx-1">
                            thumb_down
                            </span>
                            dislike
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                {dislikes}
                                <span className="visually-hidden">unread messages</span>
                            </span>
                            </div>
                        </button>
                        <button type="button" className="m-3 btn btn-primary position-relative" onClick={()=>{setcomment(++props.arr[props.index].comment)}}>
                        <div className="d-flex ">
                            <span className="material-symbols-outlined mx-1">
                                Comment
                            </span>
                            comment
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                {comment}
                                <span className="visually-hidden">unread messages</span>
                            </span>
                            </div>
                        </button>
                        <button type="button" className="m-3 btn btn-info position-relative"onClick={()=>{setshare(++props.arr[props.index].share)}}>
                            <div className="d-flex ">
                            <span className="material-symbols-outlined mx-1">
                                share
                            </span>
                            Share
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                {share}
                                <span className="visually-hidden">unread messages</span>
                            </span>
                            </div>
                        </button>
                        <button type="button" className="m-3 btn btn-info position-relative">
                            <div className="d-flex ">
                            <span className="material-symbols-outlined mx-1">
                                edit
                            </span>
                            Edit
                            </div>
                        </button>
                        <button type="button" className="m-3 btn btn-danger position-relative" onClick={deleteitem}>
                            <div className="d-flex ">
                            <span className="material-symbols-outlined mx-1">
                                delete
                            </span>
                            Delete
                            </div>
                        </button>
                    </div>
                    </div>
                </div>
            </div>                
      </div>
    );
  }
