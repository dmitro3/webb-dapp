import { Typography } from '@material-ui/core';
import styled from 'styled-components';

export const Value = styled(Typography).attrs({
  variant: 'body1',
})`
  && {
    color: ${({ theme }) => (theme.type === 'dark' ? theme.accentColor : '#000000')};
  }
`;
