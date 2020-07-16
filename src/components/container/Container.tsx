import React, { FunctionComponent } from 'react';
import './_container.scss';

interface ContainerProps {
  title: string;
}

const Container: FunctionComponent<ContainerProps> = ({ title, children }) => {
  return (
    <div className='container'>
      <div className='container__title heading-primary'>{title}</div>
      <div className='container__content'>{children}</div>
    </div>
  );
};

export default Container;
