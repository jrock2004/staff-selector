import { helper } from '@ember/component/helper';

export default helper(function sum(params /*, hash*/) {
  if (params.length < 2) {
    console.error('Helper requires at least 2 params');
  }

  return params[0] + params[1];
});
