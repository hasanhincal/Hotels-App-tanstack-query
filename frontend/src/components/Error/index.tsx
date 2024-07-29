import { useQueryClient } from "@tanstack/react-query";

const Error = ({ info, name }: { info: string; name: string }) => {
  // kurulum
  const queryClient = useQueryClient();

  // Places sorgusunu tekrar çalıştırır.
  // invalidateQueries daha önce useQuery ile tanımladığımız
  //bir sorguyu tekrardan tetiklemek için kullandığımız fonksiyondur.
  const retry = () => {
    queryClient.invalidateQueries({ queryKey: [name] });
  };

  return (
    <>
      <div className="mt-20 bg-red-500 text-white rounded-md text-center p-4 font-semibold">
        <p className="mb-5">Üzgünüz Beklenmedik Bir Haa Oluştu!</p>
        <p>{info}</p>
      </div>
      <div className="flex justify-center my-10">
        <button
          onClick={retry}
          className="border px-3 py-2 rounded-md transition hover:bg-zinc-200 hover:shadow-md "
        >
          Tekrar Dene
        </button>
      </div>
    </>
  );
};

export default Error;
