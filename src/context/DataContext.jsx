import React from 'react'
import { useState } from 'react'
//React에 있는 createContext함수를 따로 불러서 사용도 가능하다. import {createContext}=from 'react'
let DataContext=React.createContext("");
let DataProvider=({children})=>{
    let [fruit,setFruit]=useState(
        [
            {
                name : "apple",
                detail : "사과입니다",
                picture : 'https://cdn.pixabay.com/photo/2016/08/12/22/34/apple-1589869_960_720.jpg'
    
            },
            {
                name :"orange",
                detail : "오렌지입니다" ,
                picture : "https://cdn.pixabay.com/photo/2016/01/02/02/03/orange-1117645_960_720.jpg"
    
            },
            {
                name : "peach",
                detail : "복숭아입니다" ,
                picture : "https://cdn.pixabay.com/photo/2017/08/11/17/41/peach-2632182_960_720.jpg"
            }
        ]
    )
    let value={
        state:{fruit},
        action:{setFruit}
    }
    return <DataContext.Provider value={value}>{children}</DataContext.Provider>
}
export{DataProvider};
export default DataContext;
