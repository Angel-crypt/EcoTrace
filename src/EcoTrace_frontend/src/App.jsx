import { useState } from 'react';
import { EcoTrace_backend } from 'declarations/EcoTrace_backend';

function App() {
  const [greeting, setGreeting] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    EcoTrace_backend.greet(name).then((greeting) => {
      setGreeting(greeting);
    });
    return false;
  }

  return (
    <div className="App">
      <div id="back">
        <img id="background" src='landing_page_v7.jpg' alt='background_image'></img>
      <header className="header">
        <div className="containerHeader">
          <a className="button" href='http://be2us-64aaa-aaaaa-qaabq-cai.localhost:4943/'>
          <h3>Conect</h3>
          </a>
          
        </div>
      </header>
      <main className="main-content">
        <div className="containerCon">
          <h3>Escuchando a la Selva</h3> 
          <h1 >ECOTRACE</h1>
          <h2>Plataforma de registro de incendios</h2>
          <img className="icplogo" id="icp_image" src='logo2.svg' alt='icp_image'></img>
        </div>
      </main>
      </div>
    </div>

                                                                                                                                                                                                                                                             
  );
}

export default App;
