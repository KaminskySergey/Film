import styled from "styled-components"

export const Aside = styled.aside`

height: 100%;
width: 200px;
background-color: blueviolet;
border-top-left-radius: 30px;
border-bottom-left-radius: 30px;
border: 3px solid yellow;
border-right: none;
background-color: rgba(000,000,000, 0.9);
padding: 16px 8px;
`

export const Container = styled.div`
position: relative;
overflow: hidden;
width: 100%;
border-top-right-radius: 30px;
border-bottom-right-radius: 30px;
border-bottom-left-radius: 30px;
border: 3px solid yellow;
background-color: rgba(000,000,000, 1);
`
export const Backdrop = styled.div`
display: flex;
flex-direction: column;
align-items: center;

width: 100%;
height: 100%;
background-image: linear-gradient(rgba(0,0,0,.9) 15%,rgba(0,0,0,.7) 100%,#000 100%);

padding-bottom: 32px;
`

export const HeaderNav = styled.div`
position: absolute;
top: 0;
left: 0;
height: 42px;

width: 100%;
border-top-right-radius: 30px;


background: linear-gradient(black, blue);
`
