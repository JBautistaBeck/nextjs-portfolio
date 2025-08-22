import { BlogPosts } from 'app/components/posts'
import Link from 'next/link'

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default function Page() {
  return (
    <section>
      <div className="flex justify-between items-center mb-8">
        <h1 className="font-semibold text-2xl tracking-tighter">Latest Articles</h1>
        <div 
          className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
        >
          View Archive →
        </div>
      </div>
      <BlogPosts />
    </section>
  )
}
