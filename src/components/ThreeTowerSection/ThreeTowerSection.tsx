import "./ThreeTowerSection.scss";
import flexImg from "./imgs/Group-173-p-800.png";

function ThreeTowerSection() {
  return (
    <section className="ThreeTower-section">
      <div className="ThreeTower-flex">
        <div className="ThreeTower-textDiv">
          <h2>Por que o Comviva é diferente?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
            laborum voluptatibus esse eligendi doloremque accusamus tempora ab
            impedit sequi excepturi!
          </p>
        </div>

        <div className="ThreeTower-imgDiv">
          <img src={flexImg} alt="" />
        </div>
      </div>

      <div className="ThreeTower-flex">
        <div className="ThreeTower-imgDiv">
          <img src={flexImg} alt="" />
        </div>

        <div className="ThreeTower-textDiv">
          <h2>Uma cidade especia</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
            laborum voluptatibus esse eligendi doloremque accusamus tempora ab
            impedit sequi excepturi!
          </p>
        </div>
      </div>

      <div className="ThreeTower-flex">
        <div className="ThreeTower-textDiv">
          <h2>Lazer e tranquilidade para a sua vida.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
            laborum voluptatibus esse eligendi doloremque accusamus tempora ab
            impedit sequi excepturi!
          </p>
        </div>

        <div className="ThreeTower-imgDiv">
          <img src={flexImg} alt="" />
        </div>
      </div>
    </section>
  );
}

export default ThreeTowerSection;
