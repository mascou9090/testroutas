import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppS } from "./AppS";
import { Contato } from "./components/Contato/Contato";
import { Footer } from "./components/Footer/Footer";
import { GlobalStyle } from "./components/Global/GlobalS";
import { Head } from "./components/Head/Head";
import { Header } from "./components/Header/Header";
import { Produto } from "./components/Produto/Produto";
import { Produtos } from "./components/Produtos/Produtos";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppS>
        <GlobalStyle />
        <Head title="Ranek | Contato" description="Entre em contato" />
        <Routes>
          <Route path="/" element={<Produtos />} end/>
          <Route path="produto/:id" element={<Produto />} />
          <Route path="contato" element={<Contato />} />
        </Routes>
      </AppS>
      <Footer /> 
    </BrowserRouter>
  );
}

export default App;
