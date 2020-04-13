import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import { FiPower, FiTrash, FiTrash2 } from "react-icons/fi";
import heroesImg from "../../assets/heroes.png";
import logoimg from "../../assets/logo.svg";

export default function Profiles() {
  return (
    <div className="profile-container">
      <header>
        <img src={logoimg} alt="Be the Hero" />
        <span>Bem vinda, APAD</span>
        <Link className="button" to="/incidents/new">
          Cadastrar novo caso
        </Link>
        <button type="button">
          <FiPower size={18} color="#E02041" />
        </button>
      </header>
      <h1> Casos cadastrados</h1>
      <ul>
        <li>
          <strong>Caso:</strong>
          <p>Caso teste</p>

          <strong>Descrição:</strong>
          <p>Descricao teste</p>

          <strong>Valor:</strong>
          <p>R$ 120,00</p>

          <button type="button">
            <FiTrash2 size="20" color="#a8a8b3"></FiTrash2>
          </button>
        </li>
        <li>
          <strong>Caso:</strong>
          <p>Caso teste</p>

          <strong>Descrição:</strong>
          <p>Descricao teste</p>

          <strong>Valor:</strong>
          <p>R$ 120,00</p>

          <button type="button">
            <FiTrash2 size="20" color="#a8a8b3"></FiTrash2>
          </button>
        </li>
        <li>
          <strong>Caso:</strong>
          <p>Caso teste</p>

          <strong>Descrição:</strong>
          <p>Descricao teste</p>

          <strong>Valor:</strong>
          <p>R$ 120,00</p>

          <button type="button">
            <FiTrash2 size="20" color="#a8a8b3"></FiTrash2>
          </button>
        </li>
        <li>
          <strong>Caso:</strong>
          <p>Caso teste</p>

          <strong>Descrição:</strong>
          <p>Descricao teste</p>

          <strong>Valor:</strong>
          <p>R$ 120,00</p>

          <button type="button">
            <FiTrash2 size="20" color="#a8a8b3"></FiTrash2>
          </button>
        </li>
      </ul>
    </div>
  );
}
