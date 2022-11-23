import styled from "styled-components";

export const Selected = styled.div`
    
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
    z-index: 1;
    
    
    main {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        line-height: 1.4;
        background: #f1f1f1;
        padding: 14px 28px;
        border-radius: 3px;
        width: 75vw;
        max-width: 1200px;
        min-width: 300px;
        height: fit-content;
        align-items: center;
        background: rgba(255, 255, 255, 0.01);
        border: .9px solid rgba(255, 255, 255, 0.3);
        backdrop-filter: blur(50px);
        border-radius: 30px;
        padding: 2%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    header {
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 100%;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
    }

    .out {
        width: 100vw;
        height: 100vh;
        position: absolute;
        z-index: -1;
        background-color: #ffffff00;
    }

    section, article {
        width: 300px;
        height: 100%;
        padding: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .url {
        margin-top: 10%;
    }

    .profile {
        display: flex;
        align-items: baseline;
    }

    img {
        width: 55%;
        border-radius: 15px;
    }

    .status {
        cursor: pointer;
        width: 17.5px;
        height: 17.5px;
        aspect-ratio: 1;
        transform: translate(-75%, 25%);
        backdrop-filter: blur(50px);
        border: 1px solid rgba(255, 255, 255, 0.5);
        border-radius: 100%;
        background-color: #e5e619;
    }
  
    .Inactive {
        background-color: #FF3B30;
    }
  
    .Active {
    background-color: #01A648;
    }

    .out {
        cursor: default;
    }

    button {
        height: min-content;
        width: min-content;
        margin: 0;
        padding: 0;
        background-color: #ffffff;
        border: none;
    }

    .pic {
        display: flex;
        flex-direction: row;
    }

    .profileSection {
        display: flex;
        justify-content: space-evenly;
        height: 100%;
    }


    .form__label {
        font-family: 'Roboto', sans-serif;
        font-size: .8rem;
        margin-left: .7rem;
        margin-top: 0.7rem;
        display: block;
        transition: all 0.3s;
        transform: translateY(-3.9rem);
    }

    .form__input {
        font-family: 'Roboto', sans-serif;
        color: #333;
        font-size: .8rem;
        margin: 0 auto;
        padding: .35rem .7rem;
        border-radius: 0.5rem;
        background-color: rgb(255, 255, 255);
        border: none;
        width: 100%;
        display: block;
        border-bottom: 0.1rem solid transparent;
        transition: all 0.3s;
        box-sizing: border-box;
    }

    .form__input:placeholder-shown + .form__label {
        opacity: 0;
        visibility: hidden;
        -webkit-transform: translateY(-2.65rem);
        transform: translateY(-2.65rem);
    }

    #dataLabel {
        color: #ffffff00;
    }

    #data {
        width: fit-content;
    }

    .buttons {
        width: 75%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
    }

    .button {
        cursor: pointer;
        border-radius: 30px;
        width: 100px;
        height: 35px;
        margin: 0;
        padding: 0%;
        border: none;
        background: #777DB3;
        color: #f1f1f1;
        border: 1.5px solid rgba(118, 124, 178);
    }

    .delete {
        border: 1.5px solid rgba(118, 124, 178);
        background-color: rgba(255, 255, 255, 0.1);
        color: rgba(255, 255, 255);
        border-radius: 10px;
        height: 35px;
        width: 35px;
        margin-left: 10px;
        cursor: pointer;
    }

    .picForm {
        width: 100%;
        display: flex;
        padding: 1%;
        flex-direction: row;
        
    }

    .picForm div {
        margin: 2% 0%;
        width: 35%;
        align-items: center;
    }

    .radio {
        margin-right: 5%;
    }

`;