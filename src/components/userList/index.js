import UserCard from '../userCard';
import './index.css';
import { useState, useEffect } from 'react';

const UserList = () => {
  const [users, setUsers] = useState([]);

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

  }

  return (
    <div className='user-list-container'>
      <h2 className='user-heading'>User Profiles</h2>
      <ul className='user-list'>
        {users.map(user => (
          <UserCard key={user.id} {...user} />
        ))}

      </ul>


    </div>
  );
}
export default UserList;