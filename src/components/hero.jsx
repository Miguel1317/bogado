import logo from '../assets/logo.png';
import About from './about';
import Work from './trabajo';
function Hero() {
  return (
    <>
        <div className='orden'>
        <h5>Hola,  somos</h5>
        <div className='orden2'>
            <h1>Pet </h1><h1 className='orange'>Groomer </h1><h1>Boost</h1>
        </div>
        <img className='movida' src={logo}></img>
        <h5>Argentina, Cordoba, Carlos paz. </h5>
    </div>
    <About></About>
    <Work></Work>
    </>
  );
}

export default Hero;

