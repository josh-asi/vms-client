import React, { FunctionComponent } from 'react';
import './_modal-wrapper.scss';

const ModalWrapper: FunctionComponent = ({ children }) => (
  <div className='modal-wrapper'>{children}</div>
);

export default ModalWrapper;
