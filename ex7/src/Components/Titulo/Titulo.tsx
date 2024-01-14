import React from 'react';
import Avaliacao from './assets/avaliacao.png';
import Grafico from './assets/grafico.png';
import Consulta from './assets/consulta.png';
import styled from 'styled-components';

interface Props {
  imagem?: string;
  children?: React.ReactNode;
}

interface IImagens {
  Avaliacao: string;
  Grafico: string;
  Consulta: string;
}

const SpanEstilizado = styled.span<Props>`
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 25px;
  height: 25px;
  background-image: ${(props) =>
    props.imagem ? `url(${props.imagem})` : 'none'};
`;

const TituloEstilizado = styled.h2`
  color: var(--azul-claro);
`;

const ContainerEstilizado = styled.div`
  display: flex;
  align-items: center;
`;
const Titulo = ({ imagem, children }: Props) => {
  const listaDeimagens: IImagens = {
    Avaliacao,
    Grafico,
    Consulta,
  };
  return (
    <ContainerEstilizado>
      {imagem && (
        <SpanEstilizado imagem={listaDeimagens[imagem as keyof IImagens]} />
      )}
      <TituloEstilizado>{children}</TituloEstilizado>
    </ContainerEstilizado>
  );
};

export default Titulo;
