import React, { Component } from 'react';

import ContactItem from '../ContactItem/ContactItem';

class ContactList extends Component {
  render() {
    return (
      <ul className="ContactList">
        <ContactItem {...this.props} />
      </ul>
    );
  }
}

export default ContactList;
