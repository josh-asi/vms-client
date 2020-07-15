import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../src/redux/rootReducer';
import { middlewares } from '../src/redux/store';
import { ShallowWrapper, ReactWrapper } from 'enzyme';

export const storeFactory = (initialState = {}): any => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(
    createStore
  );
  return createStoreWithMiddleware(rootReducer, initialState);
};

export const findByTestAttr = (
  wrapper: ShallowWrapper | ReactWrapper,
  val: string
) => {
  return wrapper.find(`[data-test="${val}"]`);
};
