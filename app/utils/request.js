import React from 'react';
import {useQuery} from '@apollo/react-hooks';

export function getRequest(query) {
  const {loading, error, data} = useQuery(query);

  if (error) {
    return `Error! ${error.message}`;
  }

  return {loading, data};
}
