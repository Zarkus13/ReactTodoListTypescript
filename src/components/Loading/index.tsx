import React from 'react';
import Loader from './loader.svg';
import { LoaderWrapper, LoadingImg } from './styles';

interface Props {
  loading: boolean,
  size?: 'small' | 'large',
  children: any
}

const Loading: React.FC<Props> = ({ loading, size, children }) =>
  loading ?
    <LoaderWrapper>
      <LoadingImg
        size={size || 'small'}
        src={Loader}
        alt="Loading ..."
      />
    </LoaderWrapper> :
    children;

export default Loading;