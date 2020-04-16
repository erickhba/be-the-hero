import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./styles.css";
import { FiLogIn } from "react-icons/fi";

import api from "../../services/api";

import heroesImg from "../../assets/heroes.png";
import logo from "../../assets/logo.svg";

export default function Logon() {
  const [id, setId] = useState("");
  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const response = await api.post("session", { id });

      localStorage.setItem("ongId", id);
      localStorage.setItem("ongName", response.data.name);

      history.push("/profile");
    } catch (error) {
      alert("Ocorreu um erro no momento de localizar o Id da ONG.");
    }
  }

  return (
    <div className="logon-container">
      <section className="form">
        <img src={logo} alt="Be the hero" />
        <form onSubmit={handleLogin}>
          <h1>Faça seu logon</h1>
          <input
            placeholder="Sua ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <button className="button" type="submit">
            Entrar
          </button>
          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#E02041" />
            Não tenho cadastro
          </Link>
        </form>
      </section>
      <img src={heroesImg} alt="heroes" />
    </div>
  );
}
