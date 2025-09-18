import UserCard from '../userCard';
import './index.css';
import { useState, useEffect } from 'react';
import { TailSpin } from "react-loader-spinner";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => { gettingUserDetails() }, []);

  const gettingUserDetails = async () => {
    const url = "https://jsonplaceholder.typicode.com/users";
    const options = {
      method: "GET"
    }
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
    setUsers(data);
    setLoader(false);

  }

  const renderLoader = () => (<div className="loader-container">
    <TailSpin
      visible={true}
      height="60"
      width="60"
      color="#000000"
      ariaLabel="tail-spin-loading"
      radius="1"
    />
  </div>);

  return (
    <div className='user-list-container'>
      <h2 className='user-heading'>User Profiles</h2>
      {loader ? (renderLoader()) : (<ul className='user-list'>
        {users.map(user => (
          <UserCard key={user.id} {...user} />
        ))}

      </ul>)}



    </div>
  );
}
export default UserList;