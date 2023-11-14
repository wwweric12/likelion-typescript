export const fetcher = (REACT_APP_BASE_URL: string) => {
  return fetch(REACT_APP_BASE_URL).then((res) => res.json());
};
