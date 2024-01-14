/* eslint-disable jsx-a11y/anchor-is-valid */
import Logo from './assets/logo.png';
import Perfil from './assets/perfil.png';
import styled from 'styled-components';

const CabecalhoEstilizado = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2em 4em;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-grow: 0.1;
`;

const LinkEstilizado = styled.a`
  color: var(--azul-escuro);
  font-weight: 700;
`;

const Cabecalho = () => {
  return (
    <div>
      <CabecalhoEstilizado>
        <img src={Logo} alt="Logo da empresa Voll" />
        <Container>
          <img src={Perfil} alt="Imagem de perfil do usuário" />
          <LinkEstilizado href="#">Sair</LinkEstilizado>
        </Container>
      </CabecalhoEstilizado>
    </div>
  );
};

export default Cabecalho;
