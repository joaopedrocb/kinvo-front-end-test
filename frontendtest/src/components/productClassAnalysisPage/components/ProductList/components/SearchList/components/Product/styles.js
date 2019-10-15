import styled, { css } from 'styled-components';

export const Container = styled.div`

  margin: 0 15px 20px 15px;
  padding-bottom: 10px;
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  justify-content: space-between;
  border-bottom: 1px solid #CCCFD1; 

`;

export const LeftPurpleSymbol = styled.div`

  height: 35px;
  width: 5px;
  background: #4C309B;
  display: flex;
  border-radius: 10px;

`;

const textBoxStyle = css`

  width: 110px;
  display: flex;
  flex-flow: column;

`;

export const ProductName = styled.div`

  ${textBoxStyle};
  justify-content: center;

  p{
    font-size: 12px;
  }

`;

export const ProductInfo = styled.div`

  ${textBoxStyle};

  p{
    font-size: 10px;
  }

`;
