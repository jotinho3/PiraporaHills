import './MapSection.scss'
import mapImg from './imgs/map.png'
import wazeImg from './imgs/wzeicon-removebg-preview.png'

function MapSection() {
  return (
    <section className="Map-section">
      <div className="Map-textDiv">
        <h2>
        Um endereço privilegiado, perto
de tudo que sua família precisa.
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A ullam
          debitis earum quaerat, ipsum ab laboriosam. Tempora, cumque? Sapiente,
          asperiores.
        </p>

        <strong>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            totam ad excepturi atque amet vel autem molestiae? Sint, voluptate.
            Labore!
          </p>
        </strong>
      </div>

      <div className="Map-gps">
        <img src={mapImg} alt="" />
        <a className='Map-gps-button' href="">Ir com waze <img src={wazeImg} alt="waze icon" /></a>
      </div>
    </section>
  );
}

export default MapSection;
