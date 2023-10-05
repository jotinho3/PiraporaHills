import "./FrontalCards.scss";
import CardIcon1 from "./imgs/icon lotes.svg";
import CardIcon2 from "./imgs/registroicon.svg";
import CardIcon3 from "./imgs/projectmappingicon.svg";
import CardIcon4 from "./imgs/lazercolleyicon.svg";

function FrontalCards() {
  return (
    <section className="frontal-card-section">
      <div className="frontal-card-flex">
        <div className="frontal-card">
          <img src={CardIcon1} alt="" />
          <h3>Lotes a partir de 200 m²
</h3>
          <p>Residenciais, mistos e
comerciais</p>
        </div>

        <div className="frontal-card">
          <img src={CardIcon2} alt="" />
          <h3>ITBI + Registro grátis
</h3>
          <p>Residenciais, mistos e
comerciais</p>
        </div>

        <div className="frontal-card">
          <img src={CardIcon3} alt="" />
          <h3>ITBI + Registro grátis
</h3>
          <p>Residenciais, mistos e
comerciais</p>
        </div>

        <div className="frontal-card">
          <img src={CardIcon4} alt="" />
          <h3>Lazer para familia    </h3>
          <p>Residenciais, mistos e
comerciais</p>
        </div>
      </div>
    </section>
  );
}

export default FrontalCards;
