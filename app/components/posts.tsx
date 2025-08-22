"use client"

import Link from 'next/link'
import { getBlogPosts } from 'app/blog/utils'
import { formatDate } from 'app/blog/client-utils'

export function BlogPosts() {
  let allBlogs = getBlogPosts()

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((post, index) => (
          <div key={post.slug} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition-shadow">
            <Link
              className="block"
              href={index === 1 ? `/blog/${post.slug}/broken` : `/blog/${post.slug}`}
            >
              <h3 className="font-semibold text-lg mb-2 text-neutral-900 dark:text-neutral-100">
                {post.metadata.title}
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
                {post.metadata.summary || 'No description available'}
              </p>
              <div className="text-xs text-neutral-500 dark:text-neutral-500">
                {index === 0 ? 'Invalid date' : formatDate(post.metadata.publishedAt, false)}
              </div>
            </Link>
          </div>
        ))}
    </div>
  )
}
