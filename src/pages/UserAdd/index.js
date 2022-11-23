import { useState, useContext } from "react";
import Home from "../Home";
import {useFetch} from "use-http";
import { useNavigate } from "react-router-dom";
import { Selected } from "../UserSelected/styles";
import { useEffect } from "react";
import { Context } from "../Home";

let randomPicUser = "men";

const baseURL = `https://mack-webmobile.vercel.app/api`;

function UserAdd() {
    
  const {toggleUserAdd} = useContext(Context);
  const { post, response } = useFetch(baseURL);


  const [name, setName] = useState([]);
  const [avatar, setAvatar] = useState("https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541");
  const [email, setEmail] = useState([]);
  const [salary, setSalary] = useState([]);
  const [date, setDate] = useState([]);
  const [status, setStatus] = useState("Active");
  //const [version, setVersion] = useState([]);
      
  const navigate = useNavigate();

  const loadPage = () => {
    navigate("/");
    navigate(0);
  }

  useEffect(() => {
    randomUser();
  },[]);

  const postUser = async () => {
    const newUser = {
      name: name,
      avatar: avatar,
      email: email,
      salary: salary,
      date: date,
      status: status,
      //__v: version
    };
    const resp = await post(`/users`, newUser);
    if (response.ok) {
      loadPage();
    }
  };  

  const toggleStatus = async () => {
    const active = "Active"
    const inactive = "Inactive"
    if (status === inactive) {
      setStatus(active)
    } else {
      setStatus(inactive)
    }
  }

  function randomUser() {
    if (randomPicUser === "men") {
      randomPicUser = "women";
    }
    else {
      randomPicUser = "men";
    }
  }

  function randomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const picLego = async () => {
    setAvatar(`https://randomuser.me/api/portraits/lego/${randomNumberInRange(0, 9)}.jpg`)
    
  }

  const picHuman = async () => {
    setAvatar(`https://randomuser.me/api/portraits/med/${randomPicUser}/${randomNumberInRange(0, 100)}.jpg`);randomUser();
  }

  return (
    <>
      <Selected>
          <main>
            <header>
              <section>
                <div className="profile">
                  <img src={avatar} alt="Avatar" className="avatar"></img>
                  <div className={"status "+status} onClick={toggleStatus}></div>
                </div>
                <form className="picForm">
                  <div>
                    <input className="radio" type="radio" onClick={picHuman} name="img"/>
                    <label>Humano</label>
                  </div>
                  <div>
                    <input className="radio" type="radio" onClick={picLego} name="img"/>
                    <label>Lego</label>
                  </div>
                </form>
                <div className="url">
                  <input type="url" className="form__input" id="url" placeholder="https://image.jpg" patern="url" required
                  value={avatar}
                  onChange={(e) => {
                    setAvatar(e.target.value)
                    }
                  }
                />
                  <label htmlFor="url" className="form__label">URL imagem</label>
                </div>
              </section>
              <article>
                <input className="form__input" id="name" placeholder="Nome" required=""
                  type="text" 
                  value={name}
                  onChange={(e) => {
                    if (e.target.value.length <= 30) {
                      setName(e.target.value);
                    }
                  }}
                  />
                <label htmlFor="name" className="form__label">Nome</label>
                <input className="form__input" id="email" placeholder="email@dominio.com" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required
                  type="email"
                  value={email}
                  onChange={(e) => {
                    if (e.target.value.length <= 40) {
                      setEmail(e.target.value);
                    }
                  }}
                />
                <label htmlFor="email" className="form__label">Email</label>
                <input className="form__input" id="number" placeholder="R$" required 
                  type="number"
                  value={salary}
                  onChange={(e) => {
                    if (e.target.value.length <= 15) {
                      setSalary(e.target.value);
                    }
                  }}
                />
                <label htmlFor="number" className="form__label">Salário</label>
                <input className="form__input" id="data" placeholder="Nome"
                  type="date"
                  value={date}
                  onChange={(e) => {
                      setDate(e.target.value);
                  }}
                />
                <label htmlFor="data" className="form__label" id="dataLabel">Data</label>
              </article>
            </header>
            <div className="buttons">
              <button className="button" onClick={postUser}>Criar</button>
            </div>
          </main>
          <div onClick={toggleUserAdd} className="out"></div>
        </Selected>
      <Home></Home>
    </>
  )
    
}
export default UserAdd;