import React, { FC } from 'react'
import styled from 'styled-components/macro'

const Container = styled.header<{ bg: boolean }>`
  color: #fff;
  padding: 10px;
  width: 100%;
  display: flex;
  ${p => (p.bg ? 'background: #011e37;' : '')}
  z-index: 10;
  h1 {
    flex: 1;
    line-height: 1;
    font-weight: 400;
    margin: 0;
    font-size: 1.5em;

    @media (max-width: 600px) {
      text-align: center;
    }
  }

  span {
    @media (max-width: 600px) {
      display: none;
    }
  }
`

const Header: FC<{ top?: boolean }> = props => (
  <Container bg={!props.top}>
    <h1>SpaceXLaunches.com</h1>
    {props.top ? null : (
      <span>
        illustrated by{' '}
        <a href="https://zlsa.github.io/" target="_blank" rel="noopener noreferrer">
          ZLSA Design
        </a>
      </span>
    )}
  </Container>
)

export default Header
