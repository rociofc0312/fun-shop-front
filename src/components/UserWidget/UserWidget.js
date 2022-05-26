import "./styles.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import userIcon from '../../assets/user.png'

const UserWidget = () => {
  const { user } = useAuth();
  return (
    <>
      {user ? (
        <Link id="username" className="options" to="/profile">
          {user && user.email.substr(0, user.email.indexOf("@")).toUpperCase()}
        </Link>
      ) : (
        <Link className="nav-icons" to="/profile">
          <img className="nav-icon-img" src={userIcon} alt="user" />
        </Link>
      )}
    </>
  );
};

export default UserWidget;
