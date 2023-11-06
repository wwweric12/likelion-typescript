import axios from 'axios';
import { CategoryName } from '../Movies';
import { GetMoviesPayload } from '../Payload/GetMoviesPayload';

type GetMovieListProps = {
  option: CategoryName;
}

export const getMovieList = async ({ option }: GetMovieListProps) => {
  const res = await axios.get<GetMoviesPayload>(
    w
    {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
      },
    }
  );
  return res.data.results;
}
