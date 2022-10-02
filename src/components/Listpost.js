import React  from 'react'
import Post from './Post'

export default function Listpost(props){
    return (
      <div className="my-3 mx-3">
        <div className="bg-primary list-group text-center">
          {props.arr.map((Element,index) => {
            return (
              <Post
                index={index}
                setlist={props.setlist}
                setarr={props.setarr}
                arr={props.arr}
                key={index}
              />
            );
          })}
        </div>
      </div>
    );
  }