function Loading() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div className="h-32 w-32 animate-spin rounded-full border-b-2 border-t-2 border-blue-500"></div>
      <p className="mt-4 text-lg text-gray-600">Loading, please wait...</p>
    </div>
  );
}

export default Loading;
