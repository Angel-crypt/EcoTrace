import { useState } from 'react';
import { EcoTrace_backend } from 'declarations/EcoTrace_backend';

function Cards() {
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
    <section className='Noticias'>
      <div className="Cards">
        <h1>Ganador del Bootcamp</h1>
      <p>El dia de ayer, un pescado albino se llevo el premio al primer lugar </p>
    </div>   
    <div className="Cards">
        <h1>Ganador del Bootcamp</h1>
      <p>El dia de ayer, un pescado albino se llevo el premio al primer lugar </p>
    </div>  
    <div className="Cards">
        <h1>Ganador del Bootcamp</h1>
      <p>El dia de ayer, un pescado albino se llevo el premio al primer lugar </p>
    </div>  
    </section>   
                                                                                                                                                                                                                                                  
  );
}

export default Cards;
