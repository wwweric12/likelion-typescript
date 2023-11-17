export const fetcher = async (REACT_APP_BASE_URL: string) => {
  const res = await fetch(
    `${process.env.REACT_APP_BASE_URL}${REACT_APP_BASE_URL}`,
  );
  return res.json();
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const postFetcher = async (url: string, { arg }: { arg: any }) => {
  const res = await fetch(`${process.env.REACT_APP_BASE_URL}${url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(arg),
  });
  return res;
};
