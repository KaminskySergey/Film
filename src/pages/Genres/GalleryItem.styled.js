import styled from "styled-components";

export const Item = styled.li`
position: relative;
width: 200px;
height: 330px;
width: calc((100% - 15px * 8) / 4);
margin: 15px;
transition: all 250ms;
outline: 1px solid gold;
border-radius: 8px;
overflow: hidden;
cursor: pointer;
&:hover, &:focus {
    transform: scale(1.1);
}

`

export const Img = styled.img`
max-width: 100%;
display: block;
/* height: 333px; */
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


export const Description = styled.div`
position: absolute;
bottom: 0;
left: 0;
width: 100%;
background-color: rgba(000,000,000, 0.9);
color: white;
padding: 5px;
& p {
    font-size: 18px;
    text-align: center;
    font-weight: 700;
    color: white;
    
}
`