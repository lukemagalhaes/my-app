import { useContext } from "react";
import { Context } from "../Home";
import { format } from 'date-fns'

function UserDetails() {

  const {u} = useContext(Context);

  return (
      <>
      <section className="profile">
        <img src={u.avatar} alt="Avatar" className="avatar"></img>
        <div className={"status "+u.status} ></div>
      </section>
      <article>
        <h5>{u.name}</h5>
        <p>{u.email}</p>
        <div>
          <p>🎂 &nbsp; {format(new Date(u.date), 'dd/MMM/yyyy')} </p>
          <p>💰 &nbsp; R${u.salary}</p>
        </div>
      </article>
    </>
  )
}
export default UserDetails;