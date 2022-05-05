import styled from 'styled-components'

export const LoaderWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface LoadingImgProps {
  size: 'small' | 'large'
}

export const LoadingImg = styled.img<LoadingImgProps>`
  width: ${(props) => props.size === 'small' ? '60px' : '150px'}; 
`;