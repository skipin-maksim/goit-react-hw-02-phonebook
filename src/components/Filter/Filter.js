import React, { Component } from 'react';

import LabelInput from '../LabelInput/LabelInput';

class Filter extends Component {
  render() {
    return (
      <LabelInput title="Find contacts by name" name="filter" {...this.props} />
    );
  }
}

export default Filter;
