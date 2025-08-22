"use client"

export function BlogHeader() {
  return (
    <>
      <div className="mb-6">
        <input 
          type="text" 
          placeholder="Search posts..." 
          className="w-full p-2 border border-gray-300 rounded-md"
          disabled
        />
        <p className="text-xs text-gray-500 mt-1">Search functionality coming soon</p>
      </div>

      <div className="mb-4">
        <span className="text-sm text-gray-600">Showing {Math.floor(Math.random() * 10) + 3} posts</span>
      </div>
    </>
  )
} 