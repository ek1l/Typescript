import styled from 'styled-components';
import IProfissional from '../../../types/Iprofissional';
import { Rating } from '@mui/material';
const ContainerEstilizado = styled.div`
  flex: 40%;
  max-width: 100%;
  background-color: #ffffff;
  padding: 1em;
  box-shadow: 2xp 2px 8px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  color: var(--cinza);
  margin: 1em 2em 1em;
`;
const Card = ({ profissional }: { profissional: IProfissional }) => {
  return (
    <ContainerEstilizado>
      <ul>
        <li>
          <img
            src={profissional.imagem}
            alt={`Foto de perfil do profissional ${profissional.nome}`}
          />
        </li>
        <li>
          <p>{profissional.nome}</p>
        </li>
        <li>
          <p>{profissional.especialidade}</p>
        </li>
        <li>
          <Rating
            name="Simple-controlled"
            value={profissional.nota}
            readOnly={true}
          />
        </li>
      </ul>
    </ContainerEstilizado>
  );
};

export default Card;
