import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem;

  h1 {
    text-align: center;
    margin: 4rem 0;
  }

  
  .button {
      border: 1.5px solid rgba(118, 124, 178);
      background-color: rgba(255, 255, 255, 0.1);
      color: rgba(255, 255, 255);
      border-radius: 10px;
      height: 35px;
      width: 35px;
      margin-left: 10px;
      cursor: pointer;
  }

  header {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  #pesquisa {
    font-family: 'Roboto', sans-serif;
    color: #333;
    font-size: .8rem;
    margin: 0 auto;
    padding: .35rem .7rem;
    border-radius: 0.5rem;
    background-color: rgb(255, 255, 255);
    border: none;
    width: 40%;
    display: block;
    border-bottom: 0.1rem solid transparent;
    transition: all 0.3s;
    box-sizing: border-box;
  }

  .false {
    color: #FF3B30;
  }

  .true{
    color: #01A648;
  }
`;

export const EmployeeList = styled.ul`
  width: 100%;
  display:flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content:space-evenly;
  align-items: center;
  
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    justify-self:center;
    width: 230px;
    height: fit-content;
    display: flex;
    margin: 1.5rem 2rem 1.5rem 2rem;
    
    
    background: rgba(255, 255, 255, 0.2);
    background-blend-mode: overlay;
    box-sizing: border-box;
    border: .9px solid rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(27.0278px);
    border-radius: 30px;
    box-shadow: 0px 3.6037px 9.00926px rgba(0, 0, 0, 0.5);
    padding: 1rem;

    transition: all 0.3s;
  }

  a:hover {
    transform: scale(1.1);
  }

 `;

export const Employee = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  justify-self:center;
  width: 230px;
  display: flex;
  height: fit-content;
  
  box-sizing: border-box;
  border-radius: 30px;
  padding: 0rem 1rem 0rem 1rem;

  img {
    width: 90%;
    height: 100%;
    border-radius: 15px;
    box-shadow: 0px 3.6037px 9.00926px rgba(0, 0, 0, 0.4);
  }

  section {
    width: 100%;
    display: flex;
    align-items: baseline;
    justify-content: flex-start;
  }

  .status {
    width: 15px;
    height: 15px;
    aspect-ratio: 1;
    transform: translate(-75%, 25%);
    background-color:  #4D415D;
    border: 2px solid #4D415D;
    border-radius: 100%;
  }
  
  .Inactive {
    background-color: #FF3B30;
  }
  
  .Active {
    background-color: #01A648;
  }

  article {
    width: 100%;
    height: fit-content;
    gap: 5px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    padding: 5% 2% 0% 2%;
    flex-wrap: wrap;
  }

  div {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: space-beetween;
  }

  p {
    width: 50%;
    font-size: 60%;
  }

  h5 {
    width: 100%;
    font-weight: bold;
    font-size: 100%;
  }



  @media (max-width: 530px) {
    width: 200px;

    div {
        flex-direction: column;
        text-align: start;
    }
}
  `

