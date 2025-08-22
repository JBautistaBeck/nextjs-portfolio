import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default function Page() {
  return (
    <section className="max-w-4xl mx-auto px-4">
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Blog</h1>
      
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

      <BlogPosts />
      
      <div className="mt-8 text-center">
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Load More Posts
        </button>
      </div>
    </section>
  )
}
