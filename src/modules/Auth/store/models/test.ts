import { types as t } from 'mobx-state-tree';

export const initialTest = {
  isAuth: false,
};

export const TestModel = t
  .model('TestModel', {
    isAuth: t.boolean,
  })
  .actions(self => ({
    signIn() {
      self.isAuth = true;
    },
  }));
