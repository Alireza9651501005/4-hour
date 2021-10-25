import {CommonActions, StackActions} from '@react-navigation/native';
import * as React from 'react';

export const navigationRef = React.createRef();

function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}

function reset(name, params) {
  let resetCourse = 'Home';
  navigationRef.current?.dispatch(
    CommonActions.reset({
      index: 1,
      routes: [
        {
          name: resetCourse,
        },
        {
          name: name,
          params: params,
        },
      ],
    }),
  );
}
function resetFirst(name, params) {
  navigationRef.current?.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [
        {
          name: name,
          params: params,
        },
      ],
    }),
  );
}

function push(name, params) {
  navigationRef.current?.dispatch(StackActions.push(name, params));
}

function goBack() {
  navigationRef.current?.dispatch(CommonActions.goBack());
}

export default {
  navigate,
  goBack,
  reset,
  resetFirst,
  push,
};
// export function reset(arg0) {
//   throw new Error('Function not implemented.');
// }

