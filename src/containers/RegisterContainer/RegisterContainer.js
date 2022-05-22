import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import './styles.css'

function RegisterContainer() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { registerUser, user } = useAuth();
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const createUser = async (data, e) => {
    try {
      setLoading(true);
      await registerUser(data.email, data.password);
      history.push('/');
    } catch(e) {
      console.log(e);
      alert("Hubo un error al registrar")
    }
    setLoading(false);
  };

  return (
    <div className="sign-form">
      <h3>Registro</h3>
      {JSON.stringify(user)}
      <form onSubmit={handleSubmit(createUser)}>
        <label htmlFor="name">Nombre Completo</label>
        <input
          type="text"
          {...register("name", { required: true })}
          placeholder="Nombre completo..."
        />
        {errors.name && errors.name.type === "required" && (
          <small className="error-message">El nombre es requerido</small>
        )}
        <label htmlFor="telephone">Teléfono</label>
        <input
          type="text"
          id="telephone"
          {...register("telephone", {
            required: true,
            pattern: /(7|8|9)\d{8}/,
          })}
          placeholder="Teléfono..."
          maxLength="9"
        />
        {errors.telephone && errors.telephone.type === "required" && (
          <small className="error-message">El teléfono es requerido</small>
        )}
        {errors.telephone && errors.telephone.type === "pattern" && (
          <small className="error-message">El teléfono no es válido</small>
        )}
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
        <span>¿Ya tiene una cuenta? </span>
        <Link to="/login" className="sign-link">
          Iniciar sesión
        </Link>
      </div>
    </div>
  );
}

export default RegisterContainer;
