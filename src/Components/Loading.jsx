const Loading = () => {
  return (
    <>
      <h1 className="w-64 h-8 rounded bg-slate-300 animate-pulse"></h1>
      <div className="flex items-center space-x-2">
        <div className="flex items-center px-8 py-4 space-x-1 rounded cursor-pointer bg-slate-300 animate-pulse"></div>
        <div className="flex items-center px-8 py-4 space-x-1 rounded cursor-pointer bg-slate-300 animate-pulse"></div>
      </div>
      <h1 className="w-20 h-8 rounded bg-slate-300 animate-pulse"></h1>
      <p className="w-64 rounded h-28 bg-slate-300 animate-pulse"></p>
    </>
  );
};

export default Loading;
