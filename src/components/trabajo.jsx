import logo from '../assets/logo.png';
import foto1 from '../assets/foto1.jpg';
import foto2 from '../assets/foto2.jpg'

function Work() {
  return (
    <div className='orden3'>
        <div className='orden4'>
            <h1 className='orange'>Nuestro trabajo.</h1>
            <br></br>
            <h5>Algunas fotos sobre lo que hacemos en la peluquería a ejemplo de lo que podemos brindar a su mascota:</h5>
            <br></br>
            <div className='orden5'>
              <div>
              <img className='fotoo' src={foto1}></img>
              <h4>Bichón frisé</h4>
              <br></br>
              <h5>Se realizó un completo cuidado estético para nuestro bichón frisé. Comenzamos con un meticuloso corte de uñas, asegurándonos de que estén bien recortadas para su comodidad y salud. Luego, pasamos al baño, utilizando un shampoo especial para mantener su pelaje suave y limpio. Después de un buen enjuague, secamos su pelaje cuidadosamente con un secador, asegurándonos de que se sienta cómodo y a gusto durante todo el proceso.</h5>
              </div>
              <div>
              <img className='fotoo' src={foto2}></img>
              <h4>Bichón frisé</h4>
              <br></br>
              <h5>El siguiente paso fue el corte a tijeras, donde se trabajó con dedicación para darle forma a su pelaje, resaltando su característica apariencia esponjosa y bien cuidada. Cada detalle fue tenido en cuenta, buscando mantener un aspecto equilibrado y estilizado. Finalmente, para un toque especial, aplicamos un suave perfume diseñado específicamente para mascotas, dejándolo con un aroma fresco y agradable.</h5>
              </div>
            </div>
        </div>
        <div className='orden5'>
          <div className='contenedor'>
            <h1 className='orange'>Horarios.</h1>
            <h5> jueves	10 a.m.–6 p.m.</h5>
            <h5>viernes	10 a.m.–6 p.m.</h5>
            <h5>sábado	9 a.m.–6 p.m.</h5>
            <h5>domingo	Cerrado</h5>
            <h5> lunes	Cerrado</h5>
            <h5> martes	10 a.m.–6 p.m.</h5>
            <h5> miércoles	10 a.m.–6 p.m.</h5>

          </div>
          <div className='contenedor'>
            <h1 className='orange'>Contacto.</h1>
            <h5>Contacta con nuestro equipo para
              sacar turno y especificar que tipo de trabajo
              deseas con tu mascota, brindamos el mejor
              servicio. !!
            </h5>
            <h5>+54 3541 27-6955</h5>
            <h5>petgroomerboost@gmail.com</h5>
            <h5>@petgroomerboost</h5>
          </div>
        </div>
    </div>
  );
}

export default Work;