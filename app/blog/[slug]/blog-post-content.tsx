"use client"

import { formatDate } from 'app/blog/utils'

export function BlogPostContent({ post }) {
  return (
    <div className="flex justify-between items-center mb-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
      <div>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Published: {formatDate(post.metadata.publishedAt)}
        </p>
        <p className="text-xs text-neutral-500 dark:text-neutral-500">
          Reading time: {Math.ceil(post.content.length / 200)} min
        </p>
      </div>
      <button 
        className="px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600"
        onClick={() => alert('Share functionality coming soon!')}
      >
        Share
      </button>
    </div>
  )
} 