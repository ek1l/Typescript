import styled from 'styled-components';
import IProfissional from '../../types/Iprofissional';
import Card from './Card/Card';

const SecaoCard = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`;

const Avaliacao = ({
  profissionais,
}: {
  profissionais: IProfissional[] | null;
}) => {
  return (
    <SecaoCard>
      {profissionais?.map((profissional) => {
        return <Card profissional={profissional} />;
      })}
    </SecaoCard>
  );
};

export default Avaliacao;
