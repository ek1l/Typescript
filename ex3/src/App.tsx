import { useCallback, useMemo, useState } from 'react';
import './App.css';
import Button from './Components/Button';
import TextField from './Components/TextField';

interface Task {
  id: string;
  isCompleted: boolean;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [count, setCount] = useState<number>(0);
  setTasks([{ id: '1', isCompleted: false }]);

  const completedTasks: boolean[] = useMemo(() => {
    return tasks
      .filter((task) => task.isCompleted)
      .map((task) => task.isCompleted);
  }, [tasks]);

  const handleButtonClick: () => void = useCallback(() => {
    return console.log('clicked');
  }, []);

  console.log(tasks, count, setCount, completedTasks);
  return (
    <>
      <Button theme="dark" onClick={handleButtonClick}>
        Enviar
      </Button>
      <TextField onChange={(e) => e.target.value} />
    </>
  );
}

export default App;
