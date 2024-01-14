import { ReactNode } from 'react';
import style from './Botao.module.scss';
interface Botao {
  texto?: string;
  children: ReactNode;
}
const Botao = ({ children }: Botao) => {
  return <button className={style.botao}>{children}</button>;
};

export default Botao;
