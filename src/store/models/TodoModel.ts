import { t } from 'mobx-state-tree';

export const TodoModel = t
  .model({
    id: t.identifier,
    title: t.string,
    status: t.enumeration(['done', 'pending', 'notStarted']),
  })
  .views((todo) => ({
    get statusReadable() {
      return todo.status === 'done' ? 'Done' : 'Not Started';
    },
  }));
