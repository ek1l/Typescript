import { Container } from '@mui/material';
import './App.css';
import Cabecalho from './Components/Cabecalho/Cabecalho';
import Titulo from './Components/Titulo/Titulo';
import Rodape from './Components/Rodape/Rodape';
import Tabela from './Components/Tabela/Tabela';
import useDadosConsulta from './useDadosConsulta';
import Grafico from './Components/Grafico/Grafico';
import useDadosProfissional from './useDadosProfissional';
import Avaliacao from './Components/Avaliacao/Avaliacao';

function App() {
  const { dados: consultas, erro: consultasErro } = useDadosConsulta();
  const { dados: profissionais, erro: profissionaisErro } =
    useDadosProfissional();
  if (consultasErro || profissionaisErro) {
    console.log('Ocorreu um erro na requisição');
  }
  return (
    <>
      <Cabecalho />
      <Container>
        <Titulo>Área administrativa</Titulo>
        <Tabela consultas={consultas} />
        <Grafico consultas={consultas} profissionais={profissionais} />
        <Avaliacao profissionais={profissionais} />
      </Container>
      <Rodape />
    </>
  );
}

export default App;
