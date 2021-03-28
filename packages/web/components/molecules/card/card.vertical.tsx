/** styles **/
import layout from '@styles/layout.module.scss';
import font from '@styles/font.module.scss';
import color from '@styles/color.module.scss';
import space from '@styles/space.module.scss';
import shape from '@styles/shape.module.scss';
import styles from '@card/card.module.scss';

/** vectors */
import { Heart, Star } from '@svg/original';

/**
 * Renders the vertical card component
 * @param {Object} card - Information about the card
 * @param {boolean} save - Whether if the card can be saved
 */
export const VerticalCard: React.FC<{
  imgUrl?: string;
  superhost?: boolean;
  ratings?: number;
  save?: boolean;
  number_of_reviews?: number;
  country?: string;
  title?: string;
  cost?: number;
}> = ({
  imgUrl,
  superhost,
  ratings = 5.0,
  number_of_reviews = 100,
  save,
  country = 'Country',
  title = 'Title',
  cost = 10,
}) => {
  return (
    <div className={[styles['w__vertical']].join(' ')}>
      <div style={{ paddingTop: '135%' }} className="relative">
        <div className="animate-pulse absolute top-0 bottom-0 right-0 left-0">
          {imgUrl ? (
            <img className="rounded-md" src={imgUrl} />
          ) : (
            <div className="rounded-md w-full h-full bg-gray-500" />
          )}
          <div className="flex py-2 px-3 absolute top-0 justify-between w-full">
            <div
              className={
                superhost
                  ? [].join(' ')
                  : [color['c--white'], shape['hidden']].join(' ')
              }
            >
              <div className="px-3 py-1 bg-gray-200 shadow-lg rounded">
                <p className="text-xs uppercase tracking-wide">Superhost</p>
              </div>
            </div>
            <div className={save ? 'text-white' : 'hidden text-white'}>
              <Heart
                fill="rgba(0, 0, 0, 0.5)"
                width={24}
                stroke="rgb(255, 255, 255)"
                strokeWidth={2}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-1 flex items-center">
        <div className="mr-1">
          <Star width={15} />
        </div>
        <div className="mr-1">
          <p className="font-thin text-xs">{ratings}</p>
        </div>
        <div>
          <p className="font-thin text-xs text-gray-500">{`(${number_of_reviews})`}</p>
        </div>
        <div>
          <p className="text-gray-500">&nbsp; · &nbsp; </p>
        </div>
        <div>
          <p className="text-xs font-thin text-gray-500">{country}</p>
        </div>
      </div>
      <div>
        <p className="tracking-wide font-thin text-sm text-gray-500">{title}</p>
      </div>
      <div>
        <p className="font-thin">
          <span className="font-medium">From ${cost}</span>
          /person
        </p>
      </div>
    </div>
  );
};
