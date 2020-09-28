import styled from "styled-components";
import {
  device
} from "./@MediaRules.js"

/* body */
body {
  position: relative;
}

/* ExperienceScreen styles */
export const ExperienceCommentsContainer = styled.div `
  width: 90vw;
  margin: 15px 0;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  padding: 10px;
  -ms-transform: translate(-50%, 0);
  transform: translate(-50%, 0);
`
// .experience-comments-container {
//   width: 90vw;
//   margin: 15px 0;
//   position: absolute;
//   left: 50%;
//   transform: translate(-50%, 0);
//   padding: 10px;
//   -ms-transform: translate(-50%, 0);
//   transform: translate(-50%, 0);
// }

/* experience styles */
export const OuterContainer = styled.div `  
   justify-content: center;
  width: 90vw;
  height: auto;
  display: flex;
  flex-direction: column;
  border: 1px solid rgb(248, 166, 248);
  border-radius: .3rem;
  position: relative;
  left: 50%;
  -ms-transform: translate(-50%, 0);
  transform: translate(-50%, 0);
  margin-bottom: 10px;
`

.outer-container {
  // justify-content: center;
  // width: 90vw;
  // height: auto;
  // display: flex;
  // flex-direction: column;
  // border: 1px solid rgb(248, 166, 248);
  // border-radius: .3rem;
  // position: relative;
  // left: 50%;
  // -ms-transform: translate(-50%, 0);
  // transform: translate(-50%, 0);
  // margin-bottom: 10px;
}

export const InnerContainer = styled.div `
  width: 82vw;
  display: flex;
  flex-direction: column;
  border: 1px solid rgb(248, 166, 248) solid 1px;
  border-radius: 0.3rem;
  padding: 13px;
  margin: 20px 0 0 0;
`
.experience-inner-container {
  // width: 82vw;
  // display: flex;
  // flex-direction: column;
  // border: 1px solid rgb(248, 166, 248) solid 1px;
  // border-radius: 0.3rem;
  // padding: 13px;
  // margin: 20px 0 0 0;
}

export const Title = styled.div `
  font-family: helvetica;
  font-size: 18px;
  font-weight: 200;
  margin: 10px 0 5px 0;
`
h1 {
  // font-family: helvetica;
  // font-size: 18px;
  // font-weight: 200;
  // margin: 10px 0 5px 0;
}

export const BodyText = styled.div `
  font-family: helvetica;
  font-size: 12px;
  margin: 5px 0 0 0;
`



p {
  // font-family: helvetica;
  // font-size: 12px;
  // margin: 5px 0 0 0;
}

export const UserDate = styled.div `
  font-family: helvetica;
  font-size: 10px;
  font-weight: 600;
  margin: 5px 0 0 0;
`

.user-date {
  // font-family: helvetica;
  // font-size: 10px;
  // font-weight: 600;
  // margin: 5px 0 0 0;
}

export const OuterFormContainer = styled.div `
    display: block;
  margin: 8px 0 5px 0;
`

.image-container {
  /* display: block;
  margin: 8px 0 5px 0; */
}

export const ExperienceImage = styled.div `
  width: 261px;
  height: 261px;
  object-fit: cover;
  margin: 0 0 5px 0;
  padding: 0 10px 0 0;
`

.experience-image {
  // width: 261px;
  // height: 261px;
  // object-fit: cover;
  // margin: 0 0 5px 0;
  // padding: 0 10px 0 0;
}

export const OuterFormContainer = styled.div `
  border: none;
  outline: none;
  background-color: #fff;
  color: #bb6bd9;
  padding: 0;
  width: 25px;
`
.like-button {
  // border: none;
  // outline: none;
  // background-color: #fff;
  // color: #bb6bd9;
  // padding: 0;
  // width: 25px;
}

export const OuterFormContainer = styled.div `
  display: flex;
`
.experience-user-details-container {
//   display: flex;
// }

/* CommentsList styles */

export const InnerContainer = styled.div `
  border: 1px solid rgb(248, 166, 248);
  border-radius: 0.3rem;
  width: 88vw;
  /* margin: 10px 0 ; */
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);
  padding: 13px;
  -ms-transform: translate(-50%, 0);
  transform: translate(-50%, 0);
`

.comments-inner-container {
  // border: 1px solid rgb(248, 166, 248);
  // border-radius: 0.3rem;
  // width: 88vw;
  // /* margin: 10px 0 ; */
  // position: relative;
  // left: 50%;
  // transform: translate(-50%, 0);
  // padding: 13px;
  // -ms-transform: translate(-50%, 0);
  // transform: translate(-50%, 0);
}

export const CommentsList = styled.div `
  display: flex;
  flex-direction: column;
  justify-items: center;
  width: 78vw;
  margin: 5px 0;
  padding: 0;
  list-style: none;
`

.comments-list {
  // display: flex;
  // flex-direction: column;
  // justify-items: center;
  // width: 78vw;
  // margin: 5px 0;
  // padding: 0;
  // list-style: none;
}

export const AuthorDate = styled.div `
  font-size: 10px;
  font-weight: 600;
`

.author-date {
  // font-size: 10px;
  // font-weight: 600;
}

export const OuterFormContainer = styled.div `
    margin: 0 0 10px 0;
`

p {
  // margin: 0 0 10px 0;
}

/* AddComment styles */

export const CommentAdder = styled.div `
  font-family: helvetica;
  margin: 18px 0px;
  display: flex; 
`

.comment-adder {
  // font-family: helvetica;
  // margin: 18px 0px;
  // display: flex;
}

export const OuterFormContainer = styled.div `

`
.comment-box {
  background-color: lightgray;
  height: 1.5rem;
  width: 78vw;
  border-style: none;
  border-radius: 0.3rem;

  /* :: placeholder,
:: -webkit-input-placeholder {
    font-family: inherit;
    font-size: 0.8rem;
    font-weight: 200;
    color: black;
    padding: 0 0 0 0.3rem;
  }
  : -ms-input-placeholder {
    font-family: inherit;
    font-size: 0.8rem;
    font-weight: 200;
    color: black;
    padding: 0 0 0 0.3rem;
  } */
}

.submit-comment {
  background-color: #bb6bd9;
  font-family: helvetica;
  font-size: 0.7rem;
  font-weight: 200;
  color: white;
  border: none;
  border-radius: 0.2rem;
  height: 1.6rem;
  width: 4.5rem;
  margin: 0 0 0 5px;
}

/* CommentCard styles */
button {
  background-color: #bb6bd9;
  font-family: helvetica;
  font-size: 0.6rem;
  font-weight: 200;
  color: white;
  border: none;
  border-radius: 0.2rem;
  height: 1.2rem;
  line-height: 1.2rem;
  width: 2.5rem;
  text-align: center;
  justify-content: center;
}

li {
  margin: 10px 0 0 0;
}

/* styles for popup in map component */
.custom-popup .leaflet-popup-content-wrapper {
  background: rgba(0 0 0 0.8);
  color: #333;
  font-size: 13px;
  line-height: 24px;
  border-radius: 5px;
}
.custom-popup .leaflet-popup-content-wrapper a {
  color: rgb(234, 172, 240);
}
.custom-popup .leaflet-popup-tip-container {
  width: 25px;
  height: 25px;
}
.custom-popup .leaflet-popup-tip {
  border-left: 15px transparent;
  border-right: 15px transparent;
  border-top: 15px #fff;
  border-bottom: 15px transparent;
}

.marker {
  width: 30px;
  height: 30px;
}

.error {
  width: 200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

/* loader styles */
.loader-wrapper {
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}