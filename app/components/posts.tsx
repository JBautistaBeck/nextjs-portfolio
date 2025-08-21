import Link from 'next/link'
import { formatDate, getBlogPosts } from 'app/blog/utils'

export function BlogPosts() {
  let allBlogs = getBlogPosts()

  return (
    <div className="space-y-6">
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
            className="group block transition-all duration-200 hover:translate-x-1"
            href={`/blog/${post.slug}`}
          >
            <article className="border-l-2 border-neutral-200 dark:border-neutral-700 pl-6 py-2 hover:border-neutral-400 dark:hover:border-neutral-500 transition-colors duration-200">
              <div className="flex flex-col space-y-2">
                <h3 className="text-lg font-medium text-neutral-900 dark:text-neutral-100 group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors duration-200">
                  {post.metadata.title}
                </h3>
                {post.metadata.summary && (
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {post.metadata.summary}
                  </p>
                )}
                <time className="text-xs text-neutral-500 dark:text-neutral-500 font-mono tracking-wide">
                  {formatDate(post.metadata.publishedAt, false)}
                </time>
              </div>
            </article>
          </Link>
        ))}
    </div>
  )
}
