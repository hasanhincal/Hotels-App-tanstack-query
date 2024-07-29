import { MdKeyboardArrowLeft } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { deletePlace } from "../../api";
import { toast } from "react-toastify";

const Buttons = ({ id }: { id: number }) => {
  const navigate = useNavigate();

  const { isPending, mutate } = useMutation({
    mutationFn: () => deletePlace(id),
    onSuccess: () => {
      toast.info("Hotel akıştan kaldırıldı.");
      navigate("/");
    },
    onError: () => {
      toast.error("Üzgünüz bir sorun oluştu");
    },
  });

  return (
    <div className="flex justify-between mb-5">
      <Link
        to={"/"}
        className="flex items-center gap-2 border hover:bg-gray-200 rounded-md px-3 py-1 transition hover:shadow"
      >
        <MdKeyboardArrowLeft /> Geri
      </Link>
      <button
        disabled={isPending}
        onClick={() => mutate()}
        className="disabled:bg-gray-200 flex items-center gap-2 border hover:bg-red-200 rounded-md px-3 py-1 transition hover:shadow"
      >
        <FaRegTrashAlt /> Sil
      </button>
    </div>
  );
};

export default Buttons;
