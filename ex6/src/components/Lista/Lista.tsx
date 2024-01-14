import { useState } from 'react';
import Item from './Item/Item';
import style from './Lista.module.scss';

interface Lista {
  tarefa: string;
  tempo: string;
}

const Lista = () => {
  const [tarefas, setTarefas] = useState<Lista[]>([
    { tarefa: 'React', tempo: '02:00:00' },
    { tarefa: 'Typescript', tempo: '01:00:00' },
    { tarefa: 'Javascript', tempo: '03:00:00' },
  ]);
  return (
    <div>
      <aside className={style.listaTarefas}>
        <h2
          onClick={() => {
            setTarefas((tarefas) => [
              ...tarefas,
              { tarefa: 'Estudar estado', tempo: '05:00:00' },
            ]);
          }}
        >
          Estudos do dia{' '}
        </h2>
        <ul className={style.item}>
          {tarefas.map((tarefa, index) => (
            <Item key={index} tarefa={tarefa.tarefa} tempo={tarefa.tempo} />
          ))}
        </ul>
      </aside>
    </div>
  );
};

export default Lista;
