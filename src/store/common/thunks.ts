import {dispatch} from '../helpers';
import {actions} from './slice';

export const addNotification = ({status, message}: {status: string; message: string}) => {
  dispatch(
    actions.addNotification({
      status,
      message,
    })
  );
};

export const cleanNotification = () => {
  dispatch(actions.cleanNotification());
};

export const showSidebar = () => {
  dispatch(actions.showSidebar());
};

export const hideSidebar = () => {
  dispatch(actions.hideSidebar());
};

export const toggleSidebar = () => {
  dispatch(actions.toggleSidebar());
};
