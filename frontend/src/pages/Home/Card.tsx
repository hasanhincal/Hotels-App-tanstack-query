import { Link } from "react-router-dom";
import { Place } from "../../types";
import Availability from "./Availability";
import Rating from "./Rating";

const Card = ({ place }: { place: Place }) => {
  return (
    <Link
      to={`/place/${place.id}`}
      className="rounded-md border p-4 gap-3 grid grid-cols-6 cursor-pointer min-h-[300px]"
    >
      <div className="col-span-2">
        <img
          className="w-full h-full object-cover rounded-lg"
          src={place.image_url}
          alt=""
        />
      </div>
      <div className="col-span-4 flex flex-col justify-between">
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <h1 className="font-semibold text-2xl">{place.name}</h1>
            <Availability status={place.availability} />
          </div>

          <p>{place.location}</p>

          <div className="flex gap-4">
            {place.amenities.slice(0, 2).map((i, key) => (
              <span className="border p-1 rounded-md" key={key}>
                {i}
              </span>
            ))}
          </div>

          <Rating point={place.rating} />
        </div>

        <div className="flex flex-col items-end">
          <span className="font-bold text-2xl">{place.price_per_night}$</span>
          <span className="text-sm text-gray-400">
            vergiler ve ücretler dahildir
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Card;
