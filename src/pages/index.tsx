
import {get} from './../services/request'


import React,{useEffect} from 'react'

interface IProps {
  a:string
  b?:number,
  ee:number
}


const Index = (props:IProps)=>{
  useEffect(()=>{
    getList()
  },[])
  const getList = async()=>{
    const res = await get('/get/test',{a:1,b:2})
    debugger
  }
  console.log(props)
  return <div>Welcome to next.js!</div>
}

Index.defaultProps = {
  b:1,
  a:12321,
  c:213211,
  d:2122
}

export default Index