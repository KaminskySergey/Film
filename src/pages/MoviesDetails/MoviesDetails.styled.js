import styled from "styled-components";

export const Img = styled.img`
width: 300px;
height: 450px;
border-radius: 8px;
overflow: hidden;
outline: 4px solid gold;
`

export const Title = styled.h2`
color: white;
margin-bottom: 32px;
font-size: 32px;
span {
    font-weight: 500;
}
`
export const ContDescription = styled.div`
display: flex;
margin-bottom: 32px;
& > p {
    color: white;
    position: relative;
    
}

& > span {
   position: relative;
   margin-left: 16px;
}

`

export const Date = styled.p`
color: white;
margin-bottom: 16px;
`

export const GenresList = styled.ul`
display: flex;
margin-left: 16px;
transition: cubic-bezier(0.25, 0.46, 0.45, 0.94);
&::before {
    content: '';
    position: absolute;
    width: 8px;
    height: 8px;
    background-color: white;
    border-radius: 50%;
    top: 8px;
    left: -3px;
}
li > a:hover, li > a:focus {
    color: red;
    cursor: pointer;
}
li +  li {
    margin-left: 16px;
}
`

export const CountryList = styled.ul`
display: flex;
margin-left: 16px;
&::before {
    content: '';
    position: absolute;
    width: 8px;
    height: 8px;
    background-color: white;
    border-radius: 50%;
    top: 8px;
    left: -3px;
}
li > a:hover, li > a:focus {
    color: red;
    cursor: pointer;
}
li +  li {
    margin-left: 8px;
}
p {
    color: white;
}
`

export const Tagline = styled.h3`
font-style: italic;
font-size: 24px;
color: grey;

`

export const Overview = styled.p`
font-style: italic;
font-size: 14px;
font-weight: 500;
color: white;
`

export const ContScore = styled.div`
position: relative;
width: 64px;
height: 64px;
background-color: black;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
p {
    color: white;
}


`
export const TitleInfo = styled.h4`
font-size: 24px;
text-align: right;
font-style: italic;
text-decoration: underline gold;
color: blue;
margin-bottom: 32px;
`

export const ItemAdditional = styled.li`
&:not(:first-child){
    margin-left: 32px;
}
`