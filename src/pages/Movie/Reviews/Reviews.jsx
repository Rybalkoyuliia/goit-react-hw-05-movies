import React from 'react';
import { useParams } from 'react-router-dom';

import { useHttp } from 'hooks/useHttp';
import { fetchReviews } from 'services/api';
import Loader from 'components/Loader/Loader';

import s from './Reviews.module.css';
import anonymous from '../../../components/TrendMoviesItem/anonymous.webp';

const Reviews = () => {
  const { id } = useParams();

  const [reviews] = useHttp(fetchReviews, id);
  if (!reviews) {
    return <Loader />;
  }
  const result = reviews.results;
  console.log(result);
  return result.length > 0 ? (
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
