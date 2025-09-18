
import "./index.css";

const UserCard = ({ name, email, phone, website, username, company, address }) => {

    return (
        <li className="user-card">

            <div className="avatar-section">
                <img
                    src={`https://avatars.dicebear.com/v2/avataaars/${username}.svg?options[mood][]=happy`}
                    alt={name}
                />
            </div>


            <div className="info-section">
                <h3>{name}</h3>
                <p><strong>Email:</strong> {email}</p>
                <p><strong>Phone:</strong> {phone}</p>
                <p><strong>Company:</strong> {company.name}</p>
                <p><strong>Website:</strong> {website}</p>
                <p>
                    <strong>Address:</strong> {address.street}, {address.suite}, {address.city}, {address.zipcode}
                </p>
            </div>
        </li>
    );
};

export default UserCard;
