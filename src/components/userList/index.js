import UserCard from '../userCard';
import './index.css';
import { useState, useEffect } from 'react';
import { ClipLoader } from "react-spinners";

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

  const renderLoader = () => (
    <div className="loader-container">
      <ClipLoader color="#000000" loading={true} size={60} />
    </div>
  );

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