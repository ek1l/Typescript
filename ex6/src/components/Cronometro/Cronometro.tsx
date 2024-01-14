import style from './Cronometro.module.scss';
import Botao from '../Botao/Botao';
import Relogio from './Relogio/Relogio';
const Cronometro = () => {
  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
      <div className={style.relogioWrapper}>
        <Relogio />
      </div>
      <Botao>Começar</Botao>
    </div>
  );
};

export default Cronometro;
