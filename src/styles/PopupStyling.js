import styled from "styled-components";
import {
  device
} from "./@MediaRules.js"


export const IButton = styled.button `
  background-color: lightgray;
  border-radius: 50%;
   font-family: helvetica;
  font-size: 0.8rem;
  font-weight: 800;
  color: #BB6BD9;
  border: none;
  height: 1.3rem;
  line-height: 1rem;
  width: 1.3rem;
  text-decoration: none;
  :hover {
    background-color: darkgrey;
  }
`;
//"custom-popup leaflet-popup"
//overlay
export const InfoContainer = styled.div `
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.8);
  transition: opacity 500ms;
  z-index: 55666780;
  color: #333;
    border-left: 15px transparent;
    border-right: 15px transparent;
    border-top: 15px #fff;
    border-bottom: 15px transparent;


`;

//leaflet - popup - content - wrapper
//popup
export const InfoWrapper = styled.div `
  margin: 70px auto;
  padding: 20px;
  background: #fff;
  border-radius: 5px;
  width: 30%;
  position: relative;
  transition: all 5s ease-in-out;
`;

export const InfoTextContainer = styled.div `

 
`;
export const InfoTextContainerh4 = styled.div `
font-family: "Coiny", cursive;
font-size: 20px;
font-weight: 200;
line-height: 25px;
margin: 0;
padding: 0;
width: 100px;
`;

export const InfoTextContainerh5 = styled.div `
padding: 20px; 
font-size: 20px;
font-weight: 200;
line-height: 25px;
font-weight: bold;

`;
export const InfoClose = styled.div `
  position: absolute;
  top: 20px;
  right: 30px;
  transition: all 200ms;
  font-size: 30px;
  font-weight: bold;
  text-decoration: none;
  color: darkgray;
  :hover {
    color: #bb6bd9;
  }
`;
//leaflet - popup - content
//content