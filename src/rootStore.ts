import { useContext, createContext } from 'react';
import { types } from 'mobx-state-tree';

import { AuthModel, initialAuth } from 'modules/Auth/store';

const initialRootModel = {
  auth: initialAuth,
};

const RootModel = types.model('RootModel', {
  auth: AuthModel,
});

export const rootStore = RootModel.create(initialRootModel);

const RootStoreContext = createContext(rootStore);

export const useStore = () => useContext(RootStoreContext);
