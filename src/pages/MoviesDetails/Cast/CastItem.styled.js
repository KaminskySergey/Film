import styled from "styled-components";

export const Item = styled.li`
position: relative;
width: 100px;
height: 150px;
transition: all 250ms;
cursor: pointer;

&:hover, &:focus {
    transform: scale(0.9);
    border: 3px solid gold;
}



`

export const Img = styled.img`
max-width: 100%;
display: block;
height: auto;
`
export const Raiting = styled.div`
background-color: red;
position: absolute;
top: 0;
left: 0;
& p {
    font-size: 12px;
    padding: 4px;
    color: white;
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
    text-align: center;
    
}
`

export const Name = styled.p`
font-size: 12px;
margin-bottom: 4px;
`

export const Role = styled.p`
font-size: 12px;
color: red;
`

