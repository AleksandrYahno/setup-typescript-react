import { types as t } from 'mobx-state-tree';

import { TestModel, initialTest } from './models/test';

export const initialAuth = {
  test: initialTest,
};

export const AuthModel = t.model(' AuthModel', {
  test: TestModel,
});
