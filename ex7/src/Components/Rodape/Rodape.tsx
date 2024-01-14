/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from 'styled-components';
import Facebook from './assets/facebook.png';
import Google from './assets/google.png';
import Instagram from './assets/instagram.png';
import Whatsapp from './assets/whatsapp.png';

const RodapeEstilizado = styled.footer`
  height: 100%;
  color: white;
  padding: 1em;
  background-color: var(--azul-escuro);
  text-align: center;
`;

const ListaEstilizada = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 10%;
  margin-top: 1em auto;
`;

const ItemEstilizado = styled.li`
  list-style-type: none;
`;

const Rodape = () => {
  return (
    <RodapeEstilizado>
      <ListaEstilizada>
        <ItemEstilizado>
          <a href="#">
            <img src={Facebook} alt="Logo do Facebook" />
          </a>
        </ItemEstilizado>
        <ItemEstilizado>
          <a href="#">
            <img src={Whatsapp} alt="Logo do Facebook" />
          </a>
        </ItemEstilizado>
        <ItemEstilizado>
          <a href="#">
            <img src={Instagram} alt="Logo do Facebook" />
          </a>
        </ItemEstilizado>
        <ItemEstilizado>
          <a href="#">
            <img src={Google} alt="Logo do Facebook" />
          </a>
        </ItemEstilizado>
      </ListaEstilizada>
      <p>2023 Desenvolvido por Alura | Projeto fictício sem fins comerciais </p>
    </RodapeEstilizado>
  );
};

export default Rodape;
