import { Instance, t } from 'mobx-state-tree';

import { TodoModel } from './TodoModel';

export const RootStore = t
  .model('RootStore', {
    todos: t.array(TodoModel),
  })
  .actions((store) => ({
    addTodo(title: string, status: 'done' | 'pending' | 'notStarted') {
      store.todos.push({
        id: Math.random().toString(),
        title: title,
        status: status,
      });
    },
    editTodo(
      id: string,
      title: string,
      status: 'done' | 'pending' | 'notStarted'
    ) {
      const index = store.todos.findIndex((todo) => todo.id === id);
      if (index !== -1) {
        store.todos[index].title = title;
        store.todos[index].status = status;
      }
    },
    deleteTodo(id: string) {
      const index = store.todos.findIndex((todo) => todo.id === id);
      if (index !== -1) {
        // Using MST's remove method on array
        store.todos.splice(index, 1);
      }
    },
  }));

export type RootStoreType = Instance<typeof RootStore>;

let rootStore: RootStoreType;

export function useStore() {
  if (!rootStore) {
    rootStore = RootStore.create({
      todos: [
        {
          id: '1',
          title: 'Learn MobX',
          status: 'pending',
        },
        {
          id: '2',
          title: 'Learn React',
          status: 'done',
        },
        {
          id: '3',
          title: 'Learn Rust',
          status: 'notStarted',
        },
      ],
    });
  }

  return rootStore;
}
