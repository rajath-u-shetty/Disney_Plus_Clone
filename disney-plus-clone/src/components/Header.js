//     import React ,{ useEffect } from "react";
//     import styled from "styled-components";
//     import {useDispatch, useSelector} from "react-redux";
//     import { auth , provider } from "../firebase";
//     import {selectUserName, selectUserPhoto, setSignOutState, setUserLoginDetails} from "../features/user/userSlice"
//     import  {useNavigate}  from "react-router-dom";
//     // import { useHistory } from "react-router-dom"


//   const Header = (props)=>{
//     const dispatch = useDispatch()
//     const userName = useSelector(selectUserName);
//     const userPhoto = useSelector(selectUserPhoto);
//     const navigate = useNavigate()
//     // const useEmail = useSelector(selectUserEmail);
//     // const history = useHistory()

//     useEffect(()=>{
//         auth.onAuthStateChanged(async(user)=>{
//             if(user){
//                 setUser(user)
//                 navigate("/home");
//             }
//         });
//     },[userName])
//     const handleAuth = () =>{
//         if(!userName){
//             auth.signInWithPopup(provider).then((result)=>{
//             setUser(result.user)
//         }).catch((error)=>{
//             alert(error.message)
//         })
//         }else if(userName){
//             auth.signOut().then(()=>{
//                 dispatch(setSignOutState());
//                 navigate("/")
//             }).catch((err)=>alert(err.message));
//         }
//     }

//     const setUser = (user) =>{
//         dispatch(
//             setUserLoginDetails({
//                 name: user.displayName,
//                 email:user.email,
//                 photo:user.photoURL,
//             })
//         )
//     }


//     return <Nav>
//                 <Logo>
//                 <img src="/images/logo.svg" alt=" app logo" />
//                 </Logo>
//                 {
//                     !userName ? ( <Login onClick={handleAuth}>Login</Login> ) :( <>
//                 <NavMenu>
//                     <a href="/home" >
//                         <img src="/images/home-icon.svg" alt="HOME" />
//                         <span>HOME</span>
//                     </a>
//                     <a >
//                         <img src="/images/search-icon.svg" alt="SEARCH" />
//                         <span>SEARCH</span>
//                     </a>
//                     <a >
//                         <img src="/images/watchlist-icon.svg" alt="WATCHLIST" />
//                         <span>WATCHLIST</span>
//                     </a>
//                     <a >
//                         <img src="/images/original-icon.svg" alt="ORIGINALS" />
//                         <span>ORIGINALS</span>
//                     </a>
//                     <a >
//                         <img src="/images/movie-icon.svg" alt="MOVIES" />
//                         <span>MOVIES</span>
//                     </a>
//                     <a >
//                         <img src="/images/series-icon.svg" alt="SERIES" />
//                         <span>SERIES</span>
//                     </a>
//                 </NavMenu>
//                 <SignOut>
//                     <UserImg arc={userPhoto} alt={userName} />
//                     <DropDown>
//                         <span onClick={handleAuth}>Sign Out</span>
//                     </DropDown>
//                 </SignOut>
//             </>
//             )}
//             </Nav>
//     }


//     const Nav = styled.nav`
//     position:fixed;
//     top:0;
//     left:0;
//     right:0;
//     height:70px;
//     background-color:#090b13;
//     display:flex;
//     justify-content:space-between;
//     align-items:center;
//     padding: 0 36px;
//     letter-spacing:16px;
//     z-index:10;
//     `

//     const Logo = styled.a`
//     padding:0;
//     width:80px;
//     margin-top:4px;
//     mar-height:70px;
//     font-size:0;
//     display:inline-block;

//     img {
//     display:block;
//     width:100%;
//     }
//     `

//     const NavMenu = styled.div`
//     align-items:center;
//     display:flex;
//     flex-flow:row nowrap;
//     height:100%;
//     justify-content:flex-end;
//     margin:0px;
//     padding:0px;
//     postion:relative:
//     margin-right:auto;
//     margin-left:25px;

//     a {
//     display:flex;
//     align-items:center;
//     padding:0 12px;

//     img{
//         height:20px;
//         min-width:20px;
//         width:20px;
//         z-index:auto;
//     }

//     span{
//         color: rgb(249, 249, 249);
//         font-size:13px;
//         letter-spacing:1.42px;
//         line-height:1.08em;
//         padding:2px 0px;
//         white-space:nowrap;
//         position:relative;


//     &:before{
//         background-color:rgb(249,249,249);
//         border-radius:0px 0px 4px 4px;
//         bottom:-6px;
//         content: " ";
//         height:2px;
//         left:0px;
//         opacity:0;
//         position:absolute;
//         right:0px;
//         transform-origin:left center;
//         transform:scaleX(0);
//         transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
//         visibility:hidden;
//         width:auto;
//     }
//     }
//     &:hover{
//         span:before{
//             transform: scaleX(1);
//             visibility:visible;
//             opacity: 1 !important;
//         }
//     }
//     }

//     @media (max-width:768px){
//     display:none;
//     }
//     `

//     const Login = styled.a`
//     margin-right: 80px;
//     font-weight:500;
//     background-color:rgba(0,0,0,0.6);
//     padding:8px 16px;
//     text-transform:uppercase;
//     letter-spacing:1.5px;
//     border:1px solid #f9f9f9;
//     border-radius:4px;
//     transition:all 0.2s ease 0s;

//     &:hover{
//     background-color:#f9f9f9;
//     color:#000;
//     border-color:transparent;

//     }`

//     const UserImg = styled.img`
//     height:100%;
//     margin-right:80px;
//     margin-top:7px;
//     border-radius:25px;
//     `

//     const DropDown = styled.div`
//     position:absolute;
//     top:48px;
//     right:0px;
//     background: rgb(19,19,19);
//     border: 1px solid rgba(151,151,151,0.34);
//     border-radius:4px;
//     box-shadow: rgb(0 0 0/ 50%) 0px 0px 1px 0px;
//     padding:10px;
//     font-size:14px;
//     letter-spacing:3px;
//     width:100px;
//     opacity:0;`

//     const SignOut = styled.div`
//     position:relative;
//     height:48px;
//     width:48px;
//     display:flex;
//     cursor:pointer;
//     align-items:center;
//     justify-content:center;

//     ${UserImg}{
//     border-radius:50%;
//     width:100%;
//     height:100%;
//     }

//     &:hover{
//         ${DropDown}{
//             opacity:1;
//             transition-duration:1s;
//     }
// }`

//     export default Header;




import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import React, {useEffect} from 'react';
import { auth, provider } from "../firebase";
import { selectUserName, selectUserEmail, selectUserPhoto, setUserLoginDetails, setSignOutState } from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {

    const dispatch = useDispatch()
    const userName = useSelector(selectUserName)
    const userPhoto = useSelector(selectUserPhoto)
    const navigate = useNavigate()

    useEffect(()=>{
        auth.onAuthStateChanged(async (user)=>{
            if(user){
                setUser(user)
                navigate("/home")
            }
        })
    },[userName])
            const handleAuth =()=>{
                if(!userName){
                auth.signInWithPopup(provider).then((result)=>{
                    setUser(result.user)
                }).catch((error)=>{
                    alert(error.message)
                })
        } else if(userName)
            auth.signOut().then(()=>{
                dispatch(setSignOutState())
                navigate("/")
            }).catch((error)=>alert(error.message))
        }

            const setUser = (user)=>{
                dispatch(setUserLoginDetails({
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL
                }))
            }

            return (
                <Nav>
                  <Logo>
                    <img src="/images/logo.svg" alt="Disney+" />
                  </Logo>
            
                  {!userName ? (
                    <Login onClick={handleAuth}>Login</Login>
                  ) : (
                    <>
                      <NavMenu>
                        <a href="/home">
                          <img src="/images/home-icon.svg" alt="HOME" />
                          <span>HOME</span>
                        </a>
                        <a href="/home">
                          <img src="/images/search-icon.svg" alt="SEARCH" />
                          <span>SEARCH</span>
                        </a>
                        <a href="/home">
                          <img src="/images/watchlist-icon.svg" alt="WATCHLIST" />
                          <span>WATCHLIST</span>
                        </a>
                        <a href="/home">
                          <img src="/images/original-icon.svg" alt="ORIGINALS" />
                          <span>ORIGINALS</span>
                        </a>
                        <a href="/home">
                          <img src="/images/movie-icon.svg" alt="MOVIES" />
                          <span>MOVIES</span>
                        </a>
                        <a href="/home">
                          <img src="/images/series-icon.svg" alt="SERIES" />
                          <span>SERIES</span>
                        </a>
                      </NavMenu>
                      <SignOut>
                        <UserImg src={userPhoto} alt={userName} />
                        <DropDown>
                            <span onClick={handleAuth}>Sign Out</span>
                        </DropDown>
                      </SignOut>
                    </>
                  )}
                </Nav>
              );
            };

const UserImg = styled.img`
height: 50px;
margin-right: 80px;
margin-top: 7px;
border-radius: 25px;
`

const Nav= styled.nav`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 70px;
background-color: #090b13;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 36px;
letter-spacing: 1rem;
z-index: 3;
`
const Logo = styled.a`
   padding: 0;
   width: 80px;
   margin-top: 4px;
   max-height: 70px;
   font-size: 0;
   display: inline-block;
   cursor: pointer;

   img{
    display: block;
    width: 100%;
   }
`
           
const NavMenu = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  margin: 0 auto 0 25px;
  height: 100%;
  justify-content: flex-end;
  padding: 0;
  
  a{
    display: flex;
    align-items: center;
    padding: 0 12px;

    img{
        height: 22px;
        min-width: 20px;
        z-index: auto;
        margin-bottom: 2.5px;

    }

    span{
        color: rgb(249,249,249);
        font-size: 16px;
        letter-spacing: 1.42px;
        line-height: 1.08em;
        padding: 2px 4px;
        white-space: nowrap;
        position: relative;
       
       
        &:before{
           background-color: rgb(249,249,249);
           border-radius: 0 0 4px 4px;
           bottom: -6px;
           content: "";
           height: 2px;
           left: 0px;
           opacity: 0;
           position: absolute;
           right: 0;
           transform-origin: left center;
           transform: scaleX(0);
           transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
           visibility: hidden;
           width: auto;
       }

    }

    &:hover{
      span:before{
          transform: scaleX(1);
          visibility: visible;
          opacity: 1 !important;
      }
    }
  }


  @media (max-width: 955px){
    display: none;
  }

`
   
const Login = styled.a`
  margin-right: 80px;
  padding: 12px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  background-color: rgba(0,0,0,0.6);
  border: 1px solid rgb(249,249,249);
  border-radius: 4px;
  font-weight: 500;
  transition: all 0.2s ease-out 0s;

  &:hover{
    background-color: rgb(249,249,249);
    color: #090b13;
    /* transform : ; */
  }
`

const DropDown = styled.div`
position: absolute;
top: 60px;
right: 130px;
background: rgb(19,19,19);
border: 1px solid rgba(151, 151, 151, 0.34);
letter-spacing: 3px;
border-radius: 4px;
box-shadow: rgb(0 0 0 /50%) 0 0 18px 0px;
padding: 10px;
font-size: 14px;
width: 120px;
height: 45px;
display: flex;
align-items: center;
justify-content: center;
opacity: 0;
cursor: default;
`

const SignOut = styled.div`
cursor: pointer;

&:hover{
    ${DropDown}{
        opacity: 1;
        transition: 1s;
    }
}
` 


export default Header;