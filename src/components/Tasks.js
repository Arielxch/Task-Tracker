import Task from './Task';
import { useParams } from 'react-router';
import { useLocation } from 'react-router';
import NotFound from './NotFound';

const Tasks = ({ tasks, onDelete, onToggle }) => {
  const { id } = useParams();
  const location = useLocation();
  console.log(location.pathname);

  const foundTask = tasks.find(task => task.id == id);


  return (
    <>
      {location.pathname.includes('/task/') ? foundTask ? <Task key={foundTask.id}
        task={foundTask}
        onDelete={onDelete}
        onToggle={onToggle} /> :
        <NotFound someId={id} /> :
        tasks.map(task => <Task key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle} />)}
    </>
  );
};

export default Tasks;
