import './Main.scss';
import { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';


export const Main = () => {
  const [leftCorner, setLeftCorner] = useState(false);
  const [rightCorner, setRightCorner] = useState(false);

  const toggleLeftMenu = () => {
    setLeftCorner(!leftCorner);
  };

  const toggleRighttMenu = () => {
    setRightCorner(!rightCorner);
  };

  const close = () =>{
    if(leftCorner || rightCorner){
      setLeftCorner(false);
      setRightCorner(false);
    }
  }

  useEffect(()=>{
    const handleDocumentClick =( e )=>{
      close()
    }
    document.addEventListener('mousedown', handleDocumentClick)

    return () =>{
      document.removeEventListener('mousedown', handleDocumentClick)
    }
  },[leftCorner,rightCorner ])

  return (
    <div className='container-main'>
      <div className='main-box'>
        <h1>Warsztat samochodowy U Pawła</h1>
        <h2>Kontakt:</h2>
        <h3>Adres: 16-001 Ignatki ???</h3>
        <h3>Tel: 123456789</h3>
      </div>
      <div className='options'>
        <div className='option-one'>
          <h2 onClick={toggleLeftMenu}>Zakres usług</h2>  
        </div>
        <div className='option-two'>
          <h2 onClick={toggleRighttMenu}>Mapa dojazdu</h2>
        </div>
      </div>
      <CSSTransition
        in={leftCorner}
        timeout={30000000}
        classNames="overlay"
        unmountOnExit
      >
        <div className='overlay'>
            <div className='offert'>
              <h2>Zakres usług</h2>
              <p>Dysponujemy doskonale zlokalizowanym warsztatem samochodowymz możliwością naprawy wszelkich pojazdów.</p>
            </div>
            <div className='list-box'>
              <div className='list-box-container'>
                <div className='text'>
                  <h2>MECHANIKA OGÓLNA</h2>
                  <p>wymiana oleju i filtrów</p>
                  <p>układ chłodzenia</p>
                  <p>naprawy bieżące</p>
                </div>
                <div className='img-box'>
                  <img src='2.jpg'/>
                </div>
              </div>
              <div className='list-box-container'>
                <div className='text'>
                  <h2>DIAGNOSTYKA KOMPUTEROWA</h2>
                  <p>kompleksowa analiza auta</p>
                  <p>ReMap</p>
                  <p>programowanie kluczyków</p>
                </div>
                <div className='img-box'>
                  <img src='3.jpg'/>
                </div>
              </div>
              <div className='list-box-container'>
                <div className='text'>
                  <h2>SERWIS OPON</h2>
                  <p>wulkanizacja</p>
                  <p>wymiana opon</p>
                </div>
                <div className='img-box'>
                  <img src='4.jpg'/>
                </div>
              </div>
            </div>
        </div>
      </CSSTransition>
      <CSSTransition
        in={rightCorner}
        timeout={30000000}
        classNames="overlay-left"
        unmountOnExit
      >
        <div className='overlay-left'>
          <div className='contact-box'>
            <h2>Kontakt:</h2>
            <h3>Adres: 16-001 Ignatki ???</h3>
            <h3>Tel: 123456789</h3>
          </div>
          <div className='map-box'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19178.151532518954!2d23.078514769027553!3d53.06944196399916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ffbd3d1a51fc7%3A0xfe221475eda8525b!2s16-001%20Ignatki!5e0!3m2!1spl!2spl!4v1713477012463!5m2!1spl!2spl" style={{ width:"600", height:"450", style:"border:0;", allowfullscreen:"", loading:"lazy", referrerpolicy:"no-referrer-when-downgrade"}}></iframe>
          </div>
        </div>
      </CSSTransition>
    </div>  
  );
};

