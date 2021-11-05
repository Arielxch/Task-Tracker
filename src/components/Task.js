import { FaTimes } from 'react-icons/fa';
import { useHistory } from 'react-router';

const Task = ({ task, onDelete, onToggle }) => {
  const history = useHistory();
  const onClickToRedirect = () => {
    const path = `/task/${task.id}`;
    history.push(path);
  };

  return (
    <div
      className={`task ${task.reminder && 'reminder'}`}
      onDoubleClick={() => onToggle(task.id)}
      onClick={() => onClickToRedirect()}
    >
      <h3>
        {task.text}{''}
        <FaTimes
          style={{
            color: 'red', cursor: 'pointer'
          }}
          onClick={() => onDelete(task.id)} />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
