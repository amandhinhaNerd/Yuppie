import Navbar from './Components/Navbar/page';
import Hero from './Components/Hero/page';

export default function Home() {
  return (
    <main>
      <Navbar imagem="/YuppieLogoFinal.png"/>
      <Hero imagem="/BANNER1920X800.png"/>
      <Catalogo/>
    </main>
  );
}
