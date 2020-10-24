import React from 'react';
import { connect } from 'react-redux';

import contactsSelectors from '../../redux/contacts/contactsSelectors';
import contactsActions from '../../redux/contacts/contactsActions';

import s from '../LabelInput/LabelInput.module.scss';

const Filter = ({ valueFilter, onFilter, contacts }) => {
  const isShowFilter = contacts.length > 2;
  return (
    <>
      {isShowFilter && (
        <label className={s.labelFind}>
          <span>Enter contact name</span>
          <input
            className={s.inputFind}
            type="text"
            name="filter"
            value={valueFilter}
            onChange={({ target }) => onFilter(target.value)}
          />
        </label>
      )}
    </>
  );
};

const mapStateToProps = state => ({
  valueFilter: contactsSelectors.getFilter(state),
  contacts: contactsSelectors.getContacts(state),
});

const mapDispatchToProps = {
  onFilter: contactsActions.changeFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
