import { BlogPosts } from 'app/components/posts'
import Link from 'next/link'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <p className="mb-4">
        {`I'm a Vim enthusiast and tab advocate, finding unmatched efficiency in
        Vim's keystroke commands and tabs' flexibility for personal viewing
        preferences. This extends to my support for static typing, where its
        early error detection ensures cleaner code, and my preference for dark
        mode, which eases long coding sessions by reducing eye strain.`}
      </p>
      
      <div className="my-6 space-y-3">
        <Link href="/blog" className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
          View All Posts
        </Link>
        <Link href="/contact" className="inline-block px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors ml-3">
          Contact Me
        </Link>
        <button onClick={() => window.location.href = '/nonexistent'} className="inline-block px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors ml-3">
          Broken Link
        </button>
      </div>
      
      <div className="my-8">
        <h2 className="text-xl font-medium mb-4">Recent Posts</h2>
        <BlogPosts />
        <div className="mt-6">
          <Link href="/blog" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200">
            See more posts →
          </Link>
        </div>
      </div>
    </section>
  )
}
