const ShimmerCard  = () => {
  return (
    <div className="w-64 h-72 bg-gray-200 rounded-lg shadow-md p-4 animate-pulse m-4">
      <div className="w-full h-40 bg-gray-300 rounded-md mb-4"></div>
      <div className="h-4 bg-gray-300 rounded mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-1/2"></div>
    </div>
  );
};


const Shimmer = () => {
    return <div className="flex flex-wrap justify-center">
       {Array(10).fill("").map((_, index) => <ShimmerCard key={index}/>)}
    </div>
}

export default Shimmer