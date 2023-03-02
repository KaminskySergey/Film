import styled from "styled-components";

export const Item = styled.li`
position: relative;

padding: 8px;

transition: all 250ms;
outline: 1px solid gold;

overflow: hidden;
cursor: pointer;

&:hover, &:focus {
    background-color: green;
}

`
export const ContImg = styled.div`

`

export const Img = styled.img`
height: 80px;
width: 56px;
display: block;
border-radius: 8px;
margin-right: 8px;
outline: 1px solid red;

`
export const Raiting = styled.div`
background-color: green;
position: absolute;
width: 32px;
height: 32px;
border-radius: 50%;
top: 8px;
left: 8px;
display: flex;
justify-content: center;
align-items: center;
& p {
    font-size: 12px;
    padding: 4px;
    color: black;
    font-weight: 700;
}
`


// export const Description = styled.div`
// position: absolute;
// bottom: 0;
// left: 0;
// width: 100%;
// background-color: rgba(000,000,000, 0.9);
// color: white;
// padding: 5px;
// & p {
//     font-size: 18px;
//     text-align: center;
//     font-weight: 700;
//     color: white;
    
// }
// `