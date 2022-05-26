import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./styles.css";

function LoginContainer() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { loginUser, user } = useAuth();
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const login = async (data, e) => {
    try {
      setLoading(true);
      await loginUser(data.email, data.password);
      history.push('/');
    } catch(e) {
      console.log(e);
      alert("Usuario no encontrado")
    }
    setLoading(false);
  };

  return (
    <div className="sign-form">
      <h3>Iniciar sesión</h3>
      <form onSubmit={handleSubmit(login)}>
      <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          {...register("email", {
            required: true,
            pattern:
              /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
          })}
          placeholder="Email..."
        />
        {errors.email && errors.email.type === "required" && (
          <small className="error-message">El email es requerido</small>
        )}
        {errors.email && errors.email.type === "pattern" && (
          <small className="error-message">El email no es válido</small>
        )}
        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          id="password"
          {...register("password", {
            required: true,
            pattern:
            /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
          })}
          placeholder="Contraseña..."
        />
        {errors.password && errors.password.type === "required" && (
          <small className="error-message">La contraseña es requerida</small>
        )}
        {errors.password && errors.password.type === "pattern" && (
          <small className="error-message">La contraseña no es válida</small>
        )}
        <input type="submit" value="Enviar" disabled={loading}/>
      </form>
      <div className="sign-span">
        <span>¿No tiene una cuenta? </span>
        <Link to="/register" className="sign-link">
          Registrarme
        </Link>
      </div>
    </div>
  );
}

export default LoginContainer;
