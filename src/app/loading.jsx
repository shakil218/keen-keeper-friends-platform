export default function Loading() {
  return (
    <div className="min-h-screen w-full bg-gray-50 flex items-center justify-center">
      <div className="text-center space-y-6">
        {/* 🔵 Animated Spinner */}
        <div className="relative w-16 h-16 mx-auto">
          {/* outer ring */}
          <div className="absolute inset-0 rounded-full border-4 border-gray-200"></div>

          {/* spinning ring */}
          <div className="absolute inset-0 rounded-full border-4 border-indigo-600 border-t-transparent animate-spin"></div>

          {/* pulse dot */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-3 h-3 bg-indigo-600 rounded-full animate-ping"></div>
          </div>
        </div>

        {/* 🔵 Loading Text */}
        <p className="text-gray-600 text-sm font-medium">
          Loading your experience...
        </p>

        {/* 🔵 Skeleton shimmer blocks */}
        <div className="space-y-3 mt-6 w-64 mx-auto">
          <div className="h-3 bg-gray-200 rounded-full overflow-hidden relative">
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/60 to-transparent animate-[shimmer_1.2s_infinite]"></div>
          </div>

          <div className="h-3 bg-gray-200 rounded-full overflow-hidden relative">
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/60 to-transparent animate-[shimmer_1.2s_infinite]"></div>
          </div>

          <div className="h-3 bg-gray-200 rounded-full overflow-hidden relative">
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/60 to-transparent animate-[shimmer_1.2s_infinite]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
