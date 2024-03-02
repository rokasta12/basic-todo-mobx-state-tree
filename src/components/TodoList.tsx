// TodoList.tsx
import TodoCard from './TodoCard'; // Make sure the path is correct
import { useStore } from '../store/models/RootStore'; // Adjust import path as necessary
import { observer } from 'mobx-react-lite';

export const TodoList = observer(() => {
  const store = useStore();

  return (
    <div>
      {store.todos.map((todo) => (
        <TodoCard key={todo.id} todo={todo} />
      ))}
    </div>
  );
});
