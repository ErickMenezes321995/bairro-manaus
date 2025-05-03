import React, { useState } from "react";
import './Home.css';
import Noticia from "../../Components/G1news";
import Importantes from "../../Components/Importantes";
import Comercio from "../../Components/Comercios";
import CarroselComponent from '../../Components/Carrosel';
import Marketing from "../../Components/Marketing";


function Home() {
  const [Email, setEmail] = useState('');
  const [Senha, setSenha] = useState('');

  const entrar = () => {
    if (Email.trim() === '' || Senha.trim() === '') {
      alert('Preencha todos os campos!');
      return;
    } else {
      alert('Ainda estamos em Produção!!');
    }
  };

  return (
    <div className="Bairro">
      <CarroselComponent />

      <div className="container my-5">
        <div className="row">
          {/* COLUNA ESQUERDA */}
          <div className="col-lg-6 col-md-12 mb-4">
            <h2 className="mb-4">Conecte-se com a sua comunidade. Faça login para continuar.</h2>

            <div className="login p-3 border rounded">
              <h3>Login</h3>
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Email"
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                type="password"
                className="form-control mb-3"
                placeholder="Senha"
                value={Senha}
                onChange={(e) => setSenha(e.target.value)}
              />

              <button className="btn btn-primary w-100" onClick={entrar}>
                Entrar
              </button>

              <p className="text-center mt-3">
                Ainda não tem conta?{" "}
                <a href="#" className="btn btn-outline-dark btn-sm" style={{ borderRadius: '5px' }} >
                  Cadastre-se
                </a>
              </p>
            </div>

            <div className="mt-5">
              <Comercio />
            </div>
           
            <div className="mt-4">
              <Importantes />
            </div>
          </div>

          {/* COLUNA DIREITA */}
          <div className="col-lg-6 col-md-12" style={{justifyContent:'center', alignItems:'center', textAlign:'center'}}>
            <h2 className="mb-4">Últimas Notícias de Manaus</h2>
            <Noticia />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
