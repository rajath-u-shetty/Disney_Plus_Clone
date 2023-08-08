import styled from "styled-components"
import React from "react"

const Login =(props)=>{
    return (<Container>
        <Content>
            <CTA>
            <CTALogoOne src="/images/cta-logo-one.svg" alt="image not running properly" />
            <SignUp>GET IT ALL THERE</SignUp>
            <Description>Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 8/05/23, the price of Disney+ and The Disney Bundle will increase by $1</Description>
            <CTALogoTwo src="/images/cta-logo-two.png" alt=" image not working " />
            </CTA>
            <BgImage />
        </Content>
    </Container>)
}

const Container = styled.section`
overflow:hidden;
display:flex;
flex-direction:column;
text-align:center;
height:100vh;
`;

const Content = styled.div`
margin-bottom:10vh;
width:100%;
position:relative;
min-height:100vh;
box-sizing:border-box;
display:flex;
justify-content:center;
align-item:center;
flex-direction:column;
padding:80px 40px;
height:100px;
`;

const BgImage= styled.div`
background-image:url("/images/login-background.jpg");
height:100%;
background-position:top;
background-size:cover;
background-repeat:no-repeat;
position:absolute;
top:0;
left:0;
right:0;
z-index:-1;`

const CTA = styled.div`
margin:2vw;
max-width:650px;
flex-wrap:wrap;
display:flex;
flex-direction:column;
justify-content:center;
margin-top:0;
align-item:center;
text-align:center;
margin-right:auto;
margin-left:auto;
width:100%;
transition-timing-function:ease-out;
transition:opacity 0.2s;
`
const CTALogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  display: block;
  width: 100%;
`
const SignUp = styled.button`
background-color:#0063e5;
color:#f9f9f9;
margin-bottom:12px;
letter-spacing:1.5px;
border-radius:4px;
width:100%;
padding:16.5px 0;
border:1px solid transparent;
font-size:18px;
font-weight:bold;

&:hover{
    background-color:#0483ee;
}
`

const Description = styled.p`
font-size:11px;
color:hsla(0,0%,95.3%,1);
letter-spacing:1.5px;
margin:0 0 24px;
line-height:1.5em;
`

const CTALogoTwo = styled.img`
max-width:600px;
margin-bottom-20px;
display:inline-block;
vertical-align:bottom;
width:100%;
`

export default Login;