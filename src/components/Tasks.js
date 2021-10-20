import Task from './Task';
import { useParams } from 'react-router';

const Tasks = ({ tasks, onDelete, onToggle }) => {
  const { id } = useParams();
  console.log(id);

  return (
    <>
      {tasks.map((task) => (
        <Task key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle} />))}
    </>
  );
};

export default Tasks;

