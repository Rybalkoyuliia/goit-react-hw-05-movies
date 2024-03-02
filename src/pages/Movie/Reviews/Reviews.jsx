import { useHttp } from 'hooks/useHttp';
import React from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'services/api';
import s from './Reviews.module.css';
import anonymous from '../../../components/TrendMoviesItem/anonymous.webp';
import { ThreeDots } from 'react-loader-spinner';

const Reviews = () => {
  const { id } = useParams();

  const [reviews] = useHttp(fetchReviews, id);
  if (!reviews) {
    return (
      <div
        style={{
          margin: '20px auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ThreeDots
          visible={true}
          height="80"
          width="80"
          color="#4fa94d"
          radius="9"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
  }
  console.log(reviews.results);
  const result = reviews.results;
  return !result ? (
    <ul className={s.reviews_list}>
      {result.map(review => (
        <li key={review.id} className={s.reviews_item}>
          {review.author_details.avatar_path !== null ? (
            <img
              src={`https://image.tmdb.org/t/p/w500${review.author_details.avatar_path}`}
              alt={review.author}
              width={80}
              height={100}
              className={s.avatar}
            />
          ) : (
            <img
              src={anonymous}
              alt={review.author}
              width={80}
              height={100}
              className={s.avatar}
            />
          )}
          <div className={s.div}>
            <p className={s.name}>{review.author}</p>
            <p className={s.review}>{review.content}</p>
          </div>
        </li>
      ))}{' '}
    </ul>
  ) : (
    <h2 className={s.neg}>We don`t have any reviews about this movie yet</h2>
  );
};
export default Reviews;
