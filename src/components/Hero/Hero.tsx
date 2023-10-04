import "./Hero.scss";
import heroImage from './imgs/pexels-photo-1456951-removebg-preview.png'
import heroVideoBg from './imgs/pexels-ambientnature-atmosphere-5738272 (2160p).mp4'
import heroVideoBgMobile from './imgs/pexels-roman-odintsov-5667406 (2160p).mp4'

function Hero() {
  return (
    <section className="heroSection">

        <video className="heroVideoBgDesktop" src={heroVideoBg} autoPlay muted loop></video>
        <video className="heroVideoBgMobile" src={heroVideoBgMobile} autoPlay muted loop></video>

      <div className="heroTextDiv">
        <pre>PRÉ-LANÇAMENTO</pre>
        <h1>
          Chegou sua vez <br /> <strong>de viver bem em Pirapora Hills</strong>
        </h1>
        <h2>Lotes de 200 m², ao lado de comércios e lazer. </h2>
        <p>
          Um projeto com infraestrutura inteligente, urbanismo contemporâneo e
          uma localização espetacular esperam por você. Conheça o bairro
          planejado nos mínimos detalhes com tudo o que sua família precisa.
        </p>
      </div>

      <div className="heroImage">
        <img src={heroImage} alt="first section Image, its a person image" />
      </div>


    </section>
  );
}

export default Hero;
