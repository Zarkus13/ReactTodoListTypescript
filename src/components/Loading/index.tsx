import React from 'react';

interface Props {
  loading: boolean,
  children: any
}

const Loading: React.FC<Props> = ({ loading, children }) =>
  loading ?
    <div>Loading ...</div> :
    children;

export default Loading;