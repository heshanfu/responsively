import { css } from 'react-emotion';
import Responsively from '../../';

export const opacity = ({ opacity }) =>
  opacity &&
  css`
    ${Responsively.responsive('opacity')(opacity)};
  `;

export const boxShadow = ({ boxShadow }) =>
  boxShadow &&
  css`
    ${Responsively.responsive('box-shadow')(boxShadow)};
  `;
