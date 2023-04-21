import React from 'react'
import StoryNav from '../components/StoryNav'
import { useParams } from 'react-router-dom'
export default function StoryList() {
    let {name}=useParams();
    console.log(name)
  return (
    <div>
        <h1>StoryList</h1>
    <StoryNav/>
    </div>
  )
}
