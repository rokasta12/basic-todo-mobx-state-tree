import './App.css';
import AddTodo from './components/AddTodo';
import { TodoList } from './components/TodoList';

function App() {
  return (
    <>
      <h4>Vite + React + MobxStateTree</h4>
      <div className="w-[350px]">
        <AddTodo />
        <TodoList />
      </div>
    </>
  );
}

export default App;
