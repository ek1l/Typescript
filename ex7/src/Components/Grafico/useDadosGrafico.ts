import IConsulta from '../../types/IConsultas';
import IProfissional from '../../types/Iprofissional';

interface Props {
  profissionais: IProfissional[] | null;
  consultas: IConsulta[] | null;
}

interface IDados {
  nome: string;
  consultas: number;
}

const useDadosGrafico = ({ profissionais, consultas }: Props) => {
  let dados: Array<IDados> = [];
  if (profissionais && consultas) {
    dados = profissionais?.map((profissinal) => ({
      nome: profissinal.nome,
      consultas: consultas?.filter((consulta) =>
        consulta.profissional.some((prof) => prof.nome === profissinal.nome),
      ).length,
    }));
  }
  return dados;
};

export default useDadosGrafico;
