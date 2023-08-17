// import styled from "styled-components";
// import ImgSlider from "./ImgSlider";
// import Viewers from "./Viewers";
// import Recommends from "./Recommends";
// import NewDisney from "./NewDisney";
// import Originals from "./Originals";
// import Trending from "./Trending";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import db from "../firebase"
// import { setMovies } from "../features/movie/movieSlice";
// import { selectUserName } from "../features/user/userSlice";


// const Home = (props)=>{
//     const dispatch = useDispatch();
//     const userName = useSelector(selectUserName);
//     let recommends = [];
//     let newDisneys = [];
//     let originals = [];
//     let trending = [];

//     useEffect(()=>{
//         db.collection('movies').onSnapshot((snapshot)=>{
//             snapshot.docs.map((doc)=>{
//                 switch(doc.data().type){
//                     case 'recommend':
//                         recommends = [...recommends, { id: doc.id, ...doc.data() }];
//                         break;
//                     case 'new':
//                         newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
//                         break;
//                     case 'original':
//                         originals = [...originals, { id: doc.id, ...doc.data() }];
//                         break;
//                     case 'trending':
//                         trending = [...trending, { id: doc.id, ...doc.data() }];
//                         break;

//                     default:   
//                 }
//             });


//         dispatch(setMovies({
//             recommend: recommends,
//             newDisney: newDisneys,
//             original: originals,
//             trending: trending,
//         })
//         )
//     })
// },[userName])

//     return (
//     <Container>
//         <ImgSlider />
//         <Viewers />
//         <Recommends />
//         <NewDisney />
//         <Originals />
//         <Trending />
//     </Container> 
// )}

// const Container = styled.main`
// position:relative;
// min-height:calc(100vh - 250px);
// overflow-x:hidden;
// display:block;
// top:72px;
// padding:0 calc(3.5uw - 5px);

// &:before{
//     background:url("/images/home-background.png") center center /  cover
//      no-repeat fixed;
//     content: " ";
//     position:absolute:
//     inset:0px;
//     opacity:1;
//     z-index:-1;
// }
// `

// export default Home;









import styled from "styled-components";
import React from 'react';

const Login = () => {
    return (
        <Container>
              <BgImage />
            <Content>
            <CTA>
              <CTALogoOne src="/images/cta-logo-one.svg" alt=""/>
              <SignUpButton>GET IT ALL THERE</SignUpButton>
              <Description>Get Premier Access to Raya and the Last Dragon fir ab additional fee with a Disney+ subscription. As of 3/26/23, the price of Disney+ and The Disney Bundle will increase by $1</Description>
              <CTALogoTwo src="/images/cta-logo-two.png" alt=""/>
            </CTA>
            </Content>
        </Container>
    );
}

const Container = styled.section`
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
`
const Content = styled.div`
margin-bottom: 3vw;
width: 100%;
position: relative;
min-height: 100vh;
box-sizing: border-box;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding: 80px 40px;
height: 100%;
`

const BgImage = styled.div`
height: 100vh;
background-image: url("/images/login-background.jpg");
z-index: -1;
position: absolute;
right: 0;
left: 0;
background-size: cover;
`

const CTA = styled.div`
  max-width: 650px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 2vw;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  text-align: center;
  align-items: center;
  transition-timing-function: ease-out;
  transition: opacity 0.2s;

  @media (max-width: 768px){
    width: 80vw;
    margin: 0 auto;
  }
`

const CTALogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  display: block;
  width: 100%;
`
const CTALogoTwo = styled.img`
  margin-bottom: 20px;
  max-width: 600px;
  display: inline-block;
  vertical-align: bottom;
  width: 80%;
`

const SignUpButton = styled.button`
  background-color: #0063e5;
  color: #f9f9f9;
  width: 600px;
  font-weight: bold;
  margin-bottom: 12px;
  letter-spacing: 1.5px;
  font-size: 1rem;
  padding: 16.5px 0;
  border: 1px solid transparent;
  border-radius: 4px;

  @media (max-width: 768px){
    width: 80vw;
    margin: 0 auto;
  }

  &:hover { background-color: #0483ee;}
`
const Description = styled.p`
color: hsla(0, 0%, 95.3%, 1);
font-size: 11px;
margin: 0 0 24px;
line-height: 1.5em;
letter-spacing: 1.5px;
`

export default Login;