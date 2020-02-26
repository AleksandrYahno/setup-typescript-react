import { useStore } from 'rootStore';

export const useAuthStore = () => useStore().auth;
export const useTestStore = () => useAuthStore().test;
