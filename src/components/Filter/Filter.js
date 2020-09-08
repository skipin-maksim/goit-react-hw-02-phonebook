import React from 'react';

import LabelInput from '../LabelInput/LabelInput';

const Filter = props => {
  return <LabelInput title="Find contacts by name" name="filter" {...props} />;
};

export default Filter;
