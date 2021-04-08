import { $Icon, Icon } from '@icons';

import space from '@styles/space.module.scss';
import color from '@styles/color.module.scss';
import layout from '@styles/layout.module.scss';
import shape from '@styles/shape.module.scss';
import font from '@styles/font.module.scss';
import section from '@template/index.module.scss';

import { Button, $Button } from '@button';
import { Bullet, $Bullet } from '@bullet';
import { Card, $Card } from '@card';

export interface ReviewsTemplateProps {
  ratings?: number;
  categories?: any;
  numberOfReviews?: number;
  reviews?: any;
  layoutType?: string;
}

/**
 * Renders the reviews section
 * @param {Object[]} categories - Aspects of the ratings
 * @param {Object[]} reviews - Reviews by the users
 * @param {number} ratings - The average ratings
 * @param {number} numberOfReviews - The total number of reviews
 * @param {string} layoutType - The type of layout
 */
export const ReviewsTemplate: React.FC<ReviewsTemplateProps> = ({
  categories,
  reviews,
  ratings,
  numberOfReviews,
  layoutType,
}) => {
  return (
    <>
      <div className="my-3">
        <div className="py-3 flex items-center">
          <div className="flex items-center">
            <div className="mr-2">
              <Icon variant={$Icon.PROFILE} profileType="star" width={20} />
            </div>
            <h3 className="mr-2 text-2xl text-gray-700">
              {ratings.toFixed(1)}
            </h3>
            <h3 className="ml-1 text-2xl text-gray-700">
              ({numberOfReviews} reviews)
            </h3>
          </div>
        </div>
        {layoutType === 'room' && (
          <div
            style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}
            className="grid mt-4 mr-6"
          >
            {categories.map((category, index) => {
              return (
                <div
                  key={index}
                  className={[
                    section['m__review--bullet'],
                    space['p-v--8'],
                  ].join(' ')}
                >
                  <Bullet
                    variant={$Bullet.SCORE}
                    category={category?.type}
                    average={category?.average}
                  />
                </div>
              );
            })}
          </div>
        )}
        <div
          className={[
            shape['w-full'],
            space['m-t--16'],
            section['display__reviews--wrapper'],
          ].join(' ')}
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
            variant={$Button.BORDER}
            size="md"
            title={`Show all ${numberOfReviews} reviews`}
          />
        </div>
      </div>
    </>
  );
};
