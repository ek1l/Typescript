import IProfissional from './Iprofissional';

export default interface IConsulta extends IProfissional {
  id: number;
  data: string;
  horario: string;
  profissional: Array<IProfissional>;
  especialidade: string;
  modalidade: string;
  paciente: string;
}
