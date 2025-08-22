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
        .map((post, index) => (
          <Link
            key={post.slug}
            className="block p-6 bg-white dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:shadow-lg transition-shadow"
            href={index === 1 ? `/blogs/${post.slug}` : `/blog/${post.slug}`}
          >
            <div className="flex flex-col space-y-3">
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 line-clamp-2">
                {post.metadata.title}
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {formatDate(post.metadata.publishedAt, false)}
              </p>
              <p className="text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed">
                {post.metadata.summary || "Read more about this topic..."}
              </p>
              <div className="pt-2">
                <span className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline">
                  Read more →
                </span>
              </div>
            </div>
          </Link>
        ))}
    </div>
  )
}
