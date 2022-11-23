import { createContext, useEffect, useState } from "react";
import {useFetch} from "use-http";
import { Container, Employee, EmployeeList } from "./styles";
import { Link } from 'react-router-dom';
import UserDetails from "../UserDetails";
import UserAdd from "../UserAdd";

const baseURL = `https://mack-webmobile.vercel.app/api`;
const _ = require('lodash');

export const Context = createContext();

function Home() {
    const { get, response, loading, error } = useFetch(baseURL);

    const [users, setUsers] = useState([]);
    const [addUser, setAddUser] = useState(true);
    const [statusFilter, setStatusFilter] = useState([]);
    const [order, setOrder] = useState([]);
    const [searchText, setSearchText] = useState("");



    const filterStatus = function(item) {
      if (statusFilter)
        return item.status==="Active";
      else
        return item.status==="Inactive";
    }

    useEffect(() => {
      searchUsers();
    },[]);

    const searchUsers = async () => {
      const data = await get("/users");
      if (response.ok) {
        setUsers(data);
      } else {
        setUsers([]);
      }
    };

    if (error) return `Erro: ${error.message}`;
    if (loading) return "Carregando";

    const toggleUserAdd = () => {
      addUser ? setAddUser(false) : setAddUser(true);
    };

    const toggleFilterStatus = () => {
      statusFilter ? setStatusFilter(false) : setStatusFilter(true);
    };

    const toggleOrder = () => {
      order ? setOrder(false) : setOrder(true);
    };
    const usuariosFiltrados = users.filter(filterStatus)
    const ascendingOrder = _.sortBy(usuariosFiltrados, ['salary']);
  
    const search = searchText.toLocaleUpperCase();
    const textFilter = ascendingOrder.map(function(item) {
      return Object.assign(item, {name: item.name.toUpperCase()})
    })
    const nameFilter = textFilter.filter((user)=>user.name.includes(search))

    

    if (addUser){
        return (
      <Container key={users}>
        <header>        
          <button className="button" onClick={toggleUserAdd}><i className="fa fa-user-plus" aria-hidden="true"></i></button>
          <input className="form__input" id="pesquisa" placeholder="Pesquisar nome"
            type="text" 
            value={searchText}
            onChange={(e) => {
              if (e.target.value.length <= 30) {
                setSearchText(e.target.value);
              }
            }}
            />

          <button className="button" onClick={toggleFilterStatus}><i className={"fa fa-user "+statusFilter} aria-hidden="true"></i></button>
          <button className="button" onClick={toggleOrder}><i className="fa fa-money" aria-hidden="true"></i></button>
        </header>
        <EmployeeList >
          {order ? nameFilter.map((u) => { 
            return (
            <Link  key={u._id} to={`/employee/${u._id}`}>
              <Context.Provider value={{u}}>
                <Employee>
                  <UserDetails>
                  </UserDetails>
                </Employee>
              </Context.Provider>
            </Link>
            );
          }) 
          : 
          nameFilter.reverse().map((u) => { 
            return (
            <Link  key={u._id} to={`/employee/${u._id}`}>
              <Context.Provider value={{u}}>
                <Employee>
                  <UserDetails>
                  </UserDetails>
                </Employee>
              </Context.Provider>
            </Link>
            );
          })}
        </EmployeeList>
      </Container>
    );
    }
    else {
      return (
        <Context.Provider value={{toggleUserAdd}}>
          <UserAdd></UserAdd>
        </Context.Provider>
    );
    }
};
export default Home;

