/* eslint-disable import/prefer-default-export */
import { gql } from '@apollo/client';

export const getAll = gql`
{
  getAll{
    id,
    name,
    email,
    phone,
    date,
    subject
  }
}
`;
