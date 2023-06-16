import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";

interface CardProps {
  item: any;
}

const Card = ({ item }: CardProps) => {
  return (
    <div className="flex flex-col bg-white">
        {!item.img ? (
          <div className="h-40 bg-gray-300 text-gray-400 grid">
            <p className="self-center place-self-center">currently unavailable</p>
          </div>
        ) : (
          <LazyLoadImage
            src={item.img}
            className="w-full sm:h-40 sm:object-fit"
            effect="opacity"
            threshold={-100}
          />
        )}
      <div className="grow flex flex-col">
          <h5 className="basis-1/4 mt-4 text-xl font-bold tracking-tight text-gray-900">
            {item.name}
          </h5>
        <p className="mb-3 font-normal text-gray-700">{item.description}</p>
        <a
          className={`${
            item.link === "#" && "disabled:opacity-30 line-through"
          } mt-auto inline-flex items-center py-2 text-sm font-medium text-center text-blue-700`}
        >
          Read more
          <svg
            aria-hidden="true"
            className="w-4 h-4 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Card;
