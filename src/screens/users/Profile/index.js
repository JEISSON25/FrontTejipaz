import React, { useState, useEffect } from "react";
import MenuUser from "../../../components/MenuUser";
import { profile } from "../../../theme";
import { api, resources } from "../../../utils/sdk";
import { auth } from "../../../components/Auth";
import PhotoUser from "../../../assets/img/admin.png";
import "bootstrap/dist/css/bootstrap.css";

const Profile = () => {
  const [account, setAccount] = useState([]);

  const getAccounts = async () => {
    try {
      const response = await api.get(`${resources.account}${auth.users.id}`);
      setAccount(response.data);
      console.log("Account: ", response.data);
    } catch (error) {
      console.error("Error fetching accounts:", error);
    }
  };

  const updateAccount = async () => {
    try {

      const response = await api.put(
        `${resources.account}${auth.users.id}/`,
        account
      );
      console.log("Account updated:", response.data);
      getAccounts();
    } catch (error) {
      console.error("Error updating account:", error);
    }
  };

  useEffect(() => {
    getAccounts();
  }, []);
  return (
    <div className="content-profile-user">
      <div className="menu-component">
        <MenuUser />
      </div>
      <div className="title">
        <p>Perfil</p>
      </div>
      <div className="profile">
        <div className="row content-profile">
          <div className="col-lg-3 col-md-3 col-sm-12 photo-role">
            <div className="photo-profile">
              <img
                src={PhotoUser}
                alt=""
                sizes="100vw"
                className="photo-user"
              />
            </div>
            <p className="name-user">{account.name}</p>
            <div className="role-user">
              <p>
                <b className="sub-title">Rol:</b> Usuario
              </p>
            </div>
          </div>
          <div className="col-lg-9 col-md-9 col-sm-12 col-sm-12 info-user">
            <div className="row ">
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 form-input">
                <p className="sub-title">NOMBRES</p>
                <input
                  type="text"
                  value={`${account.name}`}
                  onChange={(e) =>
                    setAccount({ ...account, name: e.target.value })
                  }
                ></input>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 form-input">
                <p className="sub-title">APELLIDOS</p>
                <input
                  type="text"
                  value={`${account.last_name}`}
                  onChange={(e) =>
                    setAccount({ ...account, last_name: e.target.value })
                  }
                ></input>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 form-input">
                <p className="sub-title">TELÉFONO</p>
                <input
                  type="text"
                  value={`${account.phone}`}
                  onChange={(e) =>
                    setAccount({ ...account, phone: e.target.value })
                  }
                ></input>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 form-input">
                <p className="sub-title">EMAIL</p>
                <input
                  type="text"
                  value={`${account.email}`}
                  onChange={(e) =>
                    setAccount({ ...account, email: e.target.value })
                  }
                ></input>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 form-input">
                <p className="sub-title">DEPARTAMENTO</p>
                <select>
                  <option>Selecciona una opcion</option>
                </select>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 form-input">
                <p className="sub-title">MUNICIPIO</p>
                <select>
                  <option>Selecciona una opcion</option>
                </select>
              </div>
              <div className="col-12 form-input">
                <p className="sub-title">DIRECCIÓN DE RESIDENCIA</p>
                <input
                  type="text"
                  value={`${account.address}`}
                  onChange={(e) =>
                    setAccount({ ...account, address: e.target.value })
                  }
                ></input>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 form-input">
                <p className="sub-title">NUEVA CONTRASEÑA</p>
                <input
                  type="password"
                  value={`${account.password}`}
                  onChange={(e) =>
                    setAccount({ ...account, password: e.target.value })
                  }
                ></input>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <button className="btn-uptade" onClick={updateAccount}>
          Actualizar
        </button>
      </div>
    </div>
  );
};

export default Profile;
