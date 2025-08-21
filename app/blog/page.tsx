import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default function Page() {
  return (
    <section className="max-w-3xl mx-auto">
      <header className="mb-16">
        <h1 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 mb-6">
          My Blog
        </h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
          Thoughts, ideas, and insights about programming, technology, and development.
        </p>
      </header>
      
      <section>
        <BlogPosts />
      </section>
    </section>
  )
}
