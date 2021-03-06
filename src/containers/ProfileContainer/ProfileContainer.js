import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../context/AuthContext";
import DefaultProfileImage from "../../assets/user-placeholder.png";
import "./styles.css";
import { getUser, updateUser } from "../../services/users";
import { useIsMountedRef } from "../../hooks/useIsMountedRef";
import { Link } from "react-router-dom";

function ProfileContainer() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { user, userFromDb, setUserFromDb } = useAuth();
  const [loading, setLoading] = useState(false);
  const [img, setImg] = useState();
  const { isMountedRef } = useIsMountedRef();

  const onImageChange = (e) => {
    const file = e.target.files;
    setImg(URL.createObjectURL(file[0]));
  };

  const updateProfile = async (data, e) => {
    try {
      setLoading(true);
      const formData = new FormData();
      for (const file of data.image) {
        formData.append("file", file);
      }
      formData.append("upload_preset", "profiles");
      const image = await fetch(
        "https://api.cloudinary.com/v1_1/rociosac/image/upload",
        {
          method: "POST",
          body: formData,
        }
      ).then((resp) => {
        let data = resp.json();
        return data;
      });
      const dataToSave = { ...data, image: image.secure_url };
      await updateUser(user.uid, dataToSave);
      setUserFromDb(dataToSave);
    } catch (e) {
      console.log(e);
      alert("Hubo un error al registrar");
    }
    setLoading(false);
  };

  useEffect(() => {
    getUser(user.uid)
      .then((result) => {
        console.log(result);
        if (isMountedRef.current) setUserFromDb(result);
      })
      .finally(() => {
        if (isMountedRef.current) setLoading(false);
      });
  }, []);

  return (
    <div className="update-form">
      <h3>Perfil</h3>
      <form onSubmit={handleSubmit(updateProfile)}>
        <div id="profile-img">
          <img
            id="profile"
            src={img || (userFromDb && userFromDb.image) || DefaultProfileImage}
            alt="Profile"
          />
          <div>
            <input
              {...register("image")}
              type="file"
              onChange={onImageChange}
            />
          </div>
        </div>
        <label htmlFor="name">Nombre Completo</label>
        <input
          type="text"
          {...register("name", { required: true })}
          placeholder="Nombre completo..."
          defaultValue={userFromDb && userFromDb.name}
        />
        {errors.name && errors.name.type === "required" && (
          <small className="error-message">El nombre es requerido</small>
        )}
        <label htmlFor="telephone">Tel??fono</label>
        <input
          type="text"
          id="telephone"
          {...register("telephone", {
            required: true,
            pattern: /(7|8|9)\d{8}/,
          })}
          placeholder="Tel??fono..."
          maxLength="9"
          defaultValue={userFromDb && userFromDb.telephone}
        />
        {errors.telephone && errors.telephone.type === "required" && (
          <small className="error-message">El tel??fono es requerido</small>
        )}
        {errors.telephone && errors.telephone.type === "pattern" && (
          <small className="error-message">El tel??fono no es v??lido</small>
        )}
        <label htmlFor="name">Direcci??n</label>
        <input
          type="text"
          {...register("address", { required: true })}
          placeholder="Direcci??n..."
          defaultValue={userFromDb && userFromDb.address}
        />
        {errors.address && errors.address.type === "required" && (
          <small className="error-message">El nombre es requerido</small>
        )}
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          disabled={true}
          placeholder="Email..."
          value={user && user.email}
        />
        <input type="submit" value="Actualizar" disabled={loading} />
      </form>
      <Link to="/orders" className="link-orders">
        Ver ??rdenes
      </Link>
    </div>
  );
}

export default ProfileContainer;
