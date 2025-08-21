import { BlogPosts } from 'app/components/posts'
import Link from 'next/link'
import { SpecialButton } from 'app/components/broken-button'

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
        <SpecialButton />
      </div>
      
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
