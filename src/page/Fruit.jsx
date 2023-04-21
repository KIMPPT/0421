import React from 'react'
import '../css/fruit.css'
import { useParams } from 'react-router-dom'
import { useContext } from 'react';
import DataContext from '../context/DataContext';
export default function Fruit() {
    let {name}=useParams();
    let {state}=useContext(DataContext);
    let data=state.fruit.find((alldata)=>alldata.name==name);
  return (
    <div>
        <h3>{`${data.name}Story`}</h3>
        <img src={`${data.picture}`} alt="" className='datapicture'/>
        <p>{data.detail}</p>
    </div>
  )
}
