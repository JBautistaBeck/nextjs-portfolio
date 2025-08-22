import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default function Page() {
  return (
    <section>
      <div className="mb-8">
        <h1 className="font-bold text-3xl mb-4 tracking-tight">Latest Articles</h1>
        <p className="text-neutral-600 dark:text-neutral-400 text-lg">
          Thoughts, tutorials, and insights about web development and technology.
        </p>
      </div>
      <BlogPosts />
    </section>
  )
}
