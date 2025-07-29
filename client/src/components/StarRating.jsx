import { assets } from '../assets/assets';

const StarRating = ({ rating = 4 }) => {
  return (
    <>
      {Array(5)
        .fill('')
        .map((_, index) => (
          <img
            src={
              rating > index ? assets.starIconFilled : assets.starIconOutlined
            }
            key={index}
            alt="star-icon"
            className="h-4.5 w-4.5"
          />
        ))}
    </>
  );
};

export default StarRating;
