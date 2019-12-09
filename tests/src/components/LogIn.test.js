import React from "react";
import { act, create } from "react-test-renderer";
import LogIn from 'components/LogIn';
import store from 'common/Store';



it('Renders login component', () => {
  function onSubmit(params, endpoint, verb='get'){
  }
  act(() => {
    const logIn = create(<LogIn onSubmit={onSubmit}/>);
  });
});
