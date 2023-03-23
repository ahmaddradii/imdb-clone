import Image from "next/image";
import Link from "next/link";

import { FiThumbsUp } from "react-icons/fi";

const Card = ({ result }) => {
  return (
    <div className="cursor-pointer sm:p-3 sm:m-2 sm:border sm:border-slate-400 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg transition-shadow duration-200 group:">
      <Link href={`/movie/${result.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            result.backdrop_path || result.poster_path
          }`}
          width={500}
          height={300}
          alt="image is not available"
          placeholder="blur"
          blurDataURL="/spinner.svg"
          style={{ maxWidth: "100%", height: "auto" }}
          className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200"
        ></Image>
        <div className="p-2">
          <p className="line-clamp-2 text-md">{result.overview}</p>
          <p className="truncate text-lg font-bold">
            {result.title || result.name}
          </p>
          <p className="flex items-center">
            {result.release_date}
            <FiThumbsUp className="h-5 ml-3 mr-1" />
            {result.vote_count}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
