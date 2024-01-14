import IConsulta from "./types/IConsultas";
import useFetch from "./useFetch";

const useDadosConsulta = () => {
  return useFetch<IConsulta[]>({ url: 'consultas' });
};

export default useDadosConsulta;
