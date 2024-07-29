import { useQuery } from "@tanstack/react-query";
import { Place } from "../../types";
import { getPlaces } from "../../api";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import Card from "./Card";
import { useSearchParams } from "react-router-dom";
import { Params } from "../../api";

const List = () => {
  // url'deki parametreleri al ve nesne haline getir.
  const [params] = useSearchParams();

  const paramsObj = Object.fromEntries(params.entries());

  const { isLoading, error, data } = useQuery<Place[]>({
    queryKey: ["places", paramsObj],
    queryFn: () => getPlaces(paramsObj as Params),
  });

  return (
    <div className="mt-10">
      <h1 className="font-bold text-2xl">Yakınınızdaki Lokasyonlar</h1>
      <div>
        {isLoading ? (
          <Loader />
        ) : error ? (
          <Error info={error.message} name={"places"} />
        ) : (
          <div>
            {data?.map((place) => (
              <Card key={place.id} place={place} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default List;
