interface CardProps {
  item: any;
}

const Card = ({ item }: CardProps) => {
  return (
    <div className="max-w-sm bg-white">
      <a href="#">
        <img
          className="w-full h-[160px] object-cover"
          src={item.img}
          alt=""
        />
      </a>
      <div>
        <a href={item.link}>
          <h5 className="mt-4 mb-2 text-xl font-bold tracking-tight text-gray-900">
            {item.name}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700">{item.description}</p>
        <a
          href={item.link}
          className={`${item.link === '#' && "disabled:opacity-30 line-through"} inline-flex items-center py-2 text-sm font-medium text-center text-blue-700`}
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
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Card;
