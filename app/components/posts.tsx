import Link from 'next/link'
import { formatDate, getBlogPosts } from 'app/blog/utils'

export function BlogPosts() {
  let allBlogs = getBlogPosts()

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="group block p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700"
            href={`/blogs/${post.slug}`}
          >
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                  {formatDate(post.metadata.publishedAt, false)}
                </p>
                <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
                  Article
                </span>
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {post.metadata.title}
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-300 line-clamp-2">
                {post.metadata.summary || "Read more about this topic..."}
              </p>
              <div className="pt-2 border-t border-gray-100 dark:border-gray-700">
                <span className="text-sm text-blue-600 dark:text-blue-400 group-hover:underline">
                  Read more →
                </span>
              </div>
            </div>
          </Link>
        ))}
    </div>
  )
}
