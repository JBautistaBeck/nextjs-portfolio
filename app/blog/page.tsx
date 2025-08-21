import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default function Page() {
  return (
    <section className="max-w-4xl mx-auto">
      <div className="mb-12 text-center">
        <h1 className="font-bold text-4xl md:text-5xl mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
          My Blog
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Thoughts, insights, and discoveries from my journey in software development
        </p>
      </div>
      <BlogPosts />
    </section>
  )
}
