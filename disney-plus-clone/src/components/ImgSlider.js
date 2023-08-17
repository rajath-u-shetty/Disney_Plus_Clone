// import styled from "styled-components";
// import React from "react";
// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css';
// import Slider from "react-slick";

// const ImgSlider = (props)=>{
//     let settings = {
//         dots:true,
//         infinite:true,
//         speed:500,
//         slidesToShow:1,
//         slidesToScroll:1,
//         autoplay:true,
//     }
//     return (
//         <Carousel {...settings}>
//             <Wrap>
//                 <a>
//                     <img src="/images/slider-badging.jpg" alt=""/>
//                 </a>
//             </Wrap>

//             <Wrap>
//                 <a>
//                     <img src="/images/slider-scale.jpg" alt=""/>
//                 </a>
//             </Wrap>

//             <Wrap>
//                 <a>
//                     <img src="/images/slider-badag.jpg" alt=""/>
//                 </a>
//             </Wrap>

//             <Wrap>
//                 <a>
//                     <img src="/images/slider-scales.jpg" alt=""/>
//                 </a>
//             </Wrap>
//         </Carousel>
//         )
// }

// const Carousel = styled(Slider)`
// margin-top:20px;
// width:92.1vw;

// & > button {
//     opacity:0;
//     height:100%;
//     width:5uw;
//     z-index:1;

//     &:hover{
//         opacity:1;
//         transition:opacity 0.2s ease 0s;
//     }

//     ul li button{
//         &:before{
//             fonr-size:10px;
//             color:rgb(150,158,171);
//         }
//     }

//     li.slick-active button:before{
//         color:white;
//     }

//     .slick-list{
//         overflow:initial;
//     }
    
//     .slick-prev{
//         left:-75px;
//     }
    
//     .slick-next{
//         right:-75px;
//     }
// }`

// const Wrap = styled.div`
//  border-radius: 4px;
//  cursor: pointer;
//  position: relative;
 
//  a{
//  border-radius: 4px;
//  box-shadow: rgb(0 0 0/69%) 0 26px 30px -10px, rgb(0 0 0 / 73%) 0 16px 10px -10px;
//  display: block;
//  cursor: pointer;
//  position: relative;
//  margin-left: 20px;
//  padding: 4px;
//  }
 

// img{
//     width: 100%;
//     height: 100%;


//  &:hover{
//     padding: 0;
//     border: 4px solid rgba(249,249,249,0.8);
//     transition: 300ms ease-in-out;
//  }
//  }
// `


// export default ImgSlider;


import styled from "styled-components";
import React from 'react';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick";

 const ImgSlider = () => {
    const settings= {
        dots: true,
        infinite: true,
        speed: 500,
        slideToShow: 1,
        slideToScroll: 1,
        autoplay: true,
    }
    return (
            <Carousel {...settings} >
                <Wrap>
                    <a>
                        <img src="/images/slider-badging.jpg" alt="" />
                    </a>
                </Wrap>

                <Wrap>
                    <a>
                        <img src="/images/slider-scale.jpg" alt="" />
                    </a>
                </Wrap>

                <Wrap>
                    <a>
                        <img src="/images/slider-badag.jpg" alt="" />
                    </a>
                </Wrap>

                <Wrap>
                    <a>
                        <img src="/images/slider-scales.jpg" alt="" />
                    </a>
                </Wrap>
            </Carousel>
    );
 }
 
 const Carousel = styled(Slider)`
  width: 92.1vw;
  margin-top: 20px;
  /* margin-right: 180px; */

  &>button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;

    /* Styles for the hover effect */
    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease;
    }
  }

  ul li button{
    &:before{
        font-size: 15px;
        color: rgb(150,158,171);
    }
  }

  li.slick-active button:before{
    color: white;
  }

  .slick-list{
    overflow: initial;
  }

  .slick-prev{
    left: -75px
  }
  .slick-next{
    right: -75px
  }
`;

const Wrap = styled.div`
 border-radius: 4px;
 cursor: pointer;
 position: relative;
 
 a{
 border-radius: 4px;
 box-shadow: rgb(0 0 0/69%) 0 26px 30px -10px, rgb(0 0 0 / 73%) 0 16px 10px -10px;
 display: block;
 cursor: pointer;
 position: relative;
 margin-left: 20px;
 padding: 4px;
 }
 

img{
    width: 100%;
    height: 100%;


 &:hover{
    padding: 0;
    border: 4px solid rgba(249,249,249,0.8);
    transition: 300ms ease-in-out;
 }
 }
`


 export default ImgSlider;
 