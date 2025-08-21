import Link from 'next/link'
import { formatDate, getBlogPosts } from 'app/blog/utils'

export function BlogPosts() {
  let allBlogs = getBlogPosts()

  return (
    <div className="space-y-8">
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
            href={`/blog/${post.slug}`}
            className="group relative block"
          >
            <article className="relative">
              {/* Number indicator */}
              <div className="absolute -left-4 top-0 w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-sm font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100">
                {index + 1}
              </div>
              
              {/* Main content */}
              <div className="pl-8 border-l-2 border-gray-100 dark:border-gray-800 group-hover:border-purple-300 dark:group-hover:border-purple-600 transition-colors duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h2 className="text-2xl font-light text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-200 leading-tight">
                    {post.metadata.title}
                  </h2>
                  <time className="text-sm text-gray-400 dark:text-gray-500 font-mono mt-1 sm:mt-0">
                    {formatDate(post.metadata.publishedAt, false)}
                  </time>
                </div>
                
                {post.metadata.summary && (
                  <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed max-w-3xl mb-3">
                    {post.metadata.summary}
                  </p>
                )}
                
                {/* Subtle hover line */}
                <div className="h-px bg-gradient-to-r from-purple-200 via-pink-200 to-purple-200 dark:from-purple-800 dark:via-pink-800 dark:to-purple-800 w-0 group-hover:w-full transition-all duration-500 ease-out"></div>
              </div>
              
              {/* Hover effect background */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-50/0 to-pink-50/0 group-hover:from-purple-50/30 group-hover:to-pink-50/30 dark:from-purple-900/10 dark:to-pink-900/10 rounded-lg transition-all duration-300 -z-10"></div>
            </article>
          </Link>
        ))}
    </div>
  )
}
