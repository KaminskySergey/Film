import styled from "styled-components"
export const Form = styled.form`
    display: flex;
    position: relative;

    ` 

export const Input = styled.input`
    width: 256px;
    height: 32px;
    border-radius: 8px;
    border: none;
    padding: 4px 8px;
    background-color: #cacaff;
    transition: 250ms all;
    &:hover, &:focus {
        outline: 3px solid red;
    }
    ` 
export const Button = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    color: black;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #1c8326;
    width: 32px;
    overflow: hidden;
    border: none;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    cursor: pointer;
    transition: all 250ms;
    font-weight: 500;
    &:hover, &:focus {
        color: white;
    }
    
    
    
`