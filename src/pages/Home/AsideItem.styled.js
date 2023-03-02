import styled from "styled-components"

export const Item = styled.li`
    
    border: 1px solid blue;
    padding: 4px 8px;
    border-radius: 8px;
    cursor: pointer;
    transition: all 250ms;
    &:not(:first-child){
        margin-top: 16px;
    }

    &:hover, &:focus {
        border-color: yellowgreen;
        background-color: gold;
        border-color: blue;
        transform: scale(1.1);
    }
`