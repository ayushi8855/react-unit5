import {sum} from "./calc"
import "./index.css"
// import img from './file.png';
// const mysecretkey ="1234"


import React from "react"
import ReactDom from "react-dom"

console.log(sum(2,4))

// const root =document.getElementById("root")

// const h1 = React.createElement("h1",{},"heelo")
// const div =React.createElement("div",{},"div")
// const img =React.createElement("img",{src:"https://explore.zoom.us/docs/image/postattendee/postattendee-zoom-united.png"})

// const p = React.createElement("p",{class:"redtext"},h1,div,"hey",img)

// ReactDom.render(p,document.getElementById("root"))

// ReactDom.render(<div>
//     <h1> React world</h1>
//     <img src="https://explore.zoom.us/docs/image/postattendee/postattendee-zoom-united.png"/>
// </div>,document.getElementById("root"))

const div = document.createElement("div")
div.setAttribute("class","dd")
const h1 =document.createElement("h1")
h1.innerText="Keep Your Notes Here"
h1.setAttribute("class","redtext")
const input=document.createElement("input")
input.value="write here"
const img =document.createElement("img")
img.setAttribute("src","https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Tomboy_logo.svg/1200px-Tomboy_logo.svg.png")
const btn =document.createElement("button")
btn.innerText="submit"

// const a = document.querySelector("button")
btn.addEventListener("click",sub)
function sub(){
    const p =document.createElement("p")
    
    p.innerText=input.value
    root.append(p)
}

div.append(img,h1)
root.append(div,input,btn)

