import React from 'react'
import styled from "styled-components";

const Style = styled.button`
padding: 10px;
border: ${({ type }) => {
  return type === "default" ? "1px solid black" : type === "dashed" ? "1px dashed" : "none";
}};
margin: 5px;
cursor: pointer;
font-weight: 600;
background-color: ${({ type }) => {
  return type === "Primary" ? "blue" : type === "default" ? "white":"white";
}};
color: ${({ type }) => {
  return type === "Primary" ? "white" : type === "link" ? "blue": " black";
}};`

export {Style}