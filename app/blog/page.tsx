import { BlogPosts } from 'app/components/posts'
import { BlogHeader } from './blog-header'

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default function Page() {
  return (
    <section className="max-w-4xl mx-auto px-4">
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Blog</h1>
      
      <BlogHeader />
      
      <BlogPosts />
      
      <div className="mt-8 text-center">
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Load More Posts
        </button>
      </div>
    </section>
  )
}
