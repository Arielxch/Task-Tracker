import Task from './Task';
import { useParams } from 'react-router';
import { useLocation } from 'react-router';

const Tasks = ({ tasks, onDelete, onToggle }) => {
  const { id } = useParams();
  const location = useLocation();
  console.log(location.pathname);

  return (
    <>
      {location.pathname.includes('/task/') ? tasks.map(task => (
        task.id == id && <Task key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle} />)) : tasks.map(task => <Task key={task.id}
            task={task}
            onDelete={onDelete}
            onToggle={onToggle} />)}
    </>
  );
};

export default Tasks;
