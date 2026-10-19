import Navbar from './Components/Navbar/page';
import Hero from './Components/Hero/page';
import Catalogo from './Components/Catalogo/page';


export default function Home() {
  return (
    <main>
      <Navbar imagem="/YuppieLogoFinal.png"/>
      <Hero imagem="/BANNER1920X800.png"/>
      <Catalogo imagem="/YUPPIE2.png"
      imagem2="/LAVOISIER2.png"
      imagem3="/TEXTO PROPORÇÃO1520X800.png"/>
    </main>
  );
}
