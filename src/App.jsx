import { Home } from "./components/pages/Home";
import { Header } from "./components/Navbar/Header";
import { QuenSomos } from "./components/pages/QuenSomos";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import { ServicoSocial } from "./components/pages/ServicoSocial";
import { Redacao } from "./components/pages/Redacao";
import { Simulado } from "./components/pages/Simulado";
import { CalendarioDeProva } from "./components/pages/CalendarioDeProva";
import { EducaçaoInfantil } from "./components/pages/EducaçaoInfantil";
import { FundamentalInicial } from "./components/pages/FundamentalInicial";
import { FundamentalFinais } from "./components/pages/FundamentalFinais";
import { EnsinoMedio } from "./components/pages/EnsinoMedio";
import { Matricula } from "./components/pages/Matricula";
import { ScrollTop } from "./components/hooks/ScrollTop";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <ScrollTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/QuemSomos" element={<QuenSomos />} />
          <Route path="/ServicoSocial" element={<ServicoSocial />} />
          <Route path="/Redacao" element={<Redacao />} />
          <Route path="/Simulado" element={<Simulado />} />
          <Route path="/CalendarioDeProva" element={<CalendarioDeProva />} />
          <Route path="/EducaçaoInfantil" element={<EducaçaoInfantil />} />
          <Route path="/FundamentalInicial" element={<FundamentalInicial />} />
          <Route path="/FundamentalFinais" element={<FundamentalFinais />} />
          <Route path="/EnsinoMedio" element={<EnsinoMedio />} />
          <Route path="/Matricula" element={<Matricula />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
