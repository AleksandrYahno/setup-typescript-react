import { useMemo } from 'react';

import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';

export function useActions<T>(actionCreators: T): T {
  const dispatch = useDispatch();

  return useMemo(() => {
    // @ts-ignore
    return bindActionCreators(actionCreators, dispatch);
  }, []);
}
