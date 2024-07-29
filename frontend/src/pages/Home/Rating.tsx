const Rating = ({ point, expand }: { point: number; expand?: boolean }) => {
  //renk belirle
  const color =
    point >= 4 ? "bg-green-500" : point >= 3 ? "bg-yellow-500" : "bg-red-500";

  // text belirle

  const text =
    point >= 4.5
      ? "Olağanüstü"
      : point >= 4
      ? "Güzel"
      : point >= 3
      ? "İyi"
      : point >= 2
      ? "Kötü"
      : "Çok Kötü";
  return (
    <p className={`${expand ? "flex gap-2 items-center" : ""}`}>
      <span className={`p-2 rounded-lg text-white font-bold w-fit ${color}`}>
        {point}
      </span>
      {expand && <span className="font-semibold text-lg">{text}</span>}
    </p>
  );
};

export default Rating;
