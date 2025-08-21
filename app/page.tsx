import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section className="max-w-3xl mx-auto">
      <header className="mb-16">
        <h1 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 mb-6">
          My Portfolio
        </h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
          I'm a Vim enthusiast and tab advocate, finding unmatched efficiency in
          Vim's keystroke commands and tabs' flexibility for personal viewing
          preferences. This extends to my support for static typing, where its
          early error detection ensures cleaner code, and my preference for dark
          mode, which eases long coding sessions by reducing eye strain.
        </p>
      </header>
      
      <section>
        <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100 mb-8 tracking-tight">
          Latest Posts
        </h2>
        <BlogPosts />
      </section>
    </section>
  )
}
