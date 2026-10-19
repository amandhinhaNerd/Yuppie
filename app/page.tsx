import Navbar from './Components/Navbar/page';
import Hero from './Components/Hero/page';
import Catalogo from './Components/Catalogo/page';
import Rodape from '/Components/Rodape/page.tsx';
export default function Home() {
  return (
    <main>
      <Navbar imagem="/YuppieLogoFinal.png" />
      <Hero imagem="/BANNER1920X800.png" />
      <Catalogo
        imagem="/YUPPIE2.png"
        imagem2="/LAVOISIER2.png"
        imagem3="/TEXTOPROPORÇÃO1520X800.png"
        imagem4="/consumo2.png"
        imagem5="consciente2.png"
        imagem6="1.png"
        imagem7="2.png"
        imagem8="3.png"
        imagem9="4.png" />
      <Rodape />
    </main>
  );
}
