import logout from "../../assets/logout.png";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./styles.css";

const LogOut = () => {
  const { user, logOutUser } = useAuth();
  const history = useHistory();
  const logOut = async () => {
    try {
      await logOutUser();
      history.push("/login");
    } catch {
      alert("Hubo un error");
    }
  };
  return (
    <>
      {user && (
        <div id="logout-item" onClick={logOut}>
          <img id="logout-cart" src={logout} alt="menu"></img>
        </div>
      )}
    </>
  );
};

export default LogOut;
