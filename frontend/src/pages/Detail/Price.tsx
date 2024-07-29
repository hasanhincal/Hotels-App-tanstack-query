const Price = ({ data }: { data: number }) => {
  return (
    <div className="text-xl font-semibold">
      <p>
        ${data}
        <span className="text-sm text-gray-600">/gece</span>
      </p>
    </div>
  );
};

export default Price;
