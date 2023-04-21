import React,{useState,useContext} from 'react'
import {Link} from 'react-router-dom'
import DataContext from '../context/DataContext'
export default function StoryNav() {
    let {state}=useContext(DataContext);
    let name=state.fruit.map((text)=>text.name);
  return (
    <div>
        <Link to="/storylist/apple">appleStory</Link>
    </div>
  )
}
