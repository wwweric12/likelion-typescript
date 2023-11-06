import styled from 'styled-components';
import { Movie } from './Payload/GetMoviesPayload';

const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

interface ContentProps {
  content :Movie;
  rank : number;
}

const Content = ({ content, rank }:ContentProps) => {
  const {
    title,
    release_date,
    original_language,
    vote_average,
    poster_path,
  } = content;

  return (
    <ContentBlock>
      <ThumbNail>
        <Rank>{rank + 1}</Rank>
        <img
          src={poster_path && IMAGE_URL + poster_path}
          alt={title }
        />
      </ThumbNail>
      <Contents>
        <h4>{title}</h4>
          <p>
            {release_date.substr(0, 4)} ・ {original_language}
          </p>
        <Average>평균★ {vote_average}</Average>
      </Contents>
    </ContentBlock>
  );
};

export default Content;

const ContentBlock = styled.div`
  padding: 8px;
`;

const Rank = styled.div`
  position: absolute;
  background-color: #00000099;
  color: white;
  font-weight: bold;
  width: 24px;
  height: 24px;
  margin: 8px;
  border-radius: 3px;
  text-align: center;
  line-height: 24px;
`;

const ThumbNail = styled.div`
  position: relative;
  img {
    width: 252px;
    height: 360px;
    opacity: 1;
    object-fit: cover;
    border-radius: 3px;
  }
`;

const Contents = styled.div`
  h4 {
    margin: 5px 0;
  }
  p {
    margin: auto;
    font-size: 14px;
  }
`;

const Average = styled.div`
  color: #555765;
`;
