import styled from 'styled-components';
import Content from './Content';
import { CategoryName } from './Movies';
import { GetMoviesPayload } from './Payload/GetMoviesPayload';
import useAxios from './Hooks/useHooks';

interface ListProps {
  option: CategoryName;
  listText: string;
}

const List = ({ option, listText }:ListProps) => {
  
  const {data,loading} = useAxios<GetMoviesPayload>({url:`https://api.themoviedb.org/3/movie/${option}?language=en-US&page=1`});



  // const fetchData = async (option: CategoryName) => {
  //   setMovies(await getMovieList({ option }));
  // };

  // useEffect(() => {
  //   fetchData(option);
  // }, [option]);

  if (!data ||loading) {
    return <div>loading...</div>
  }

  return (
    <>
      <ListText>{listText}</ListText>
      <ListBlock>
        {
          data.results.map((movie, index) => (
            <Content key={index} content={movie} rank={index} />
          ))}
      </ListBlock>
    </>
  );
};

export default List;

const ListBlock = styled.div`
  display: flex;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    display: none; /* 크롬, 사파리, 오페라, 엣지 */
  }
`;

const ListText = styled.h2`
  padding-left: 8px;
  margin-top: 48px;
  margin-bottom: 2px;
`;
