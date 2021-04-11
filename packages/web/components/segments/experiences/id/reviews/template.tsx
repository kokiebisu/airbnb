import { $Icon, Icon } from '@icons';

import section from '@template/index.module.scss';

import { Button } from '@button';
import { Bullet } from '@bullet';
import { Card, $Card } from '@card';

/**
 * Renders the reviews section
 * @param {Object[]} categories - Aspects of the ratings
 * @param {Object[]} reviews - Reviews by the users
 * @param {number} ratings - The average ratings
 * @param {number} numberOfReviews - The total number of reviews
 * @param {string} layoutType - The type of layout
 */
export const ReviewsTemplate: React.FC<{
  ratings?: number;
  categories?: any;
  numberOfReviews?: number;
  reviews?: any;
  layoutType?: string;
}> = ({ categories, reviews, ratings, numberOfReviews, layoutType }) => {
  return (
    <>
      <div className="my-2">
        <div className="py-2 flex items-center">
          <div className="flex items-center">
            <div className="mr-2">
              <Icon variant={$Icon.PROFILE} profileType="star" width={20} />
            </div>
            <h3 className="mr-2 text-lg text-gray-700">{ratings.toFixed(1)}</h3>
            <h3 className="ml-1 text-lg text-gray-700">
              ({numberOfReviews} reviews)
            </h3>
          </div>
        </div>
        {layoutType === 'room' && (
          <div className="mt-3 mr-6 grid grid-cols-2">
            {categories.map((category, index) => {
              return (
                <div
                  key={index}
                  className={`py-3 ${[section['m__review--bullet']].join(' ')}`}
                >
                  <Bullet
                    variant="score"
                    category={category?.type}
                    average={category?.average}
                  />
                </div>
              );
            })}
          </div>
        )}
        <div
          className={`w-full mt-4 ${[section['display__reviews--wrapper']].join(
            ' '
          )}`}
        >
          {reviews.map((review, index) => {
            return (
              <div
                className={[section['m__review--card']].join(' ')}
                key={index}
              >
                <Card
                  variant={$Card.REVIEW}
                  imgUrl={review?.imgUrl}
                  description={review?.description}
                />
              </div>
            );
          })}
        </div>
        <div className="mt-4">
          <Button
            variant="border"
            size="md"
            title={`Show all ${numberOfReviews} reviews`}
          />
        </div>
      </div>
    </>
  );
};
