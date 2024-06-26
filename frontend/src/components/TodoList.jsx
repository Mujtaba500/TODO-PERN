import Task from "./Task.jsx";

const TodoList = ({ todoList, onDelete, onEdit }) => {
  const renderList = todoList.map((todo) => {
    return (
      <Task key={todo.id} todo={todo} onDelete={onDelete} onEdit={onEdit} />
    );
  });
  return <>{renderList}</>;
};

export default TodoList;
