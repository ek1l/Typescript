import IProfissional from './types/Iprofissional';
import useFetch from './useFetch';

const useDadosProfissional = () => {
  return useFetch<IProfissional[]>({ url: 'profissionais' });
};

export default useDadosProfissional;
