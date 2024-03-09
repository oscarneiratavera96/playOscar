import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

const QueryParams = () => {
  /**
   * Permite manejar los parametros que son pasados por la url (enrrutado)
   */
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
};
export default QueryParams;
