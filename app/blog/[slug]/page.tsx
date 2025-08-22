"use client"

import { notFound } from 'next/navigation'
import { CustomMDX } from 'app/components/mdx'
import { formatDate, getBlogPosts } from 'app/blog/utils'
import { baseUrl } from 'app/sitemap'

export async function generateStaticParams() {
  let posts = getBlogPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export function generateMetadata({ params }) {
  let post = getBlogPosts().find((post) => post.slug === params.slug)
  if (!post) {
    return
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata
  let ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${baseUrl}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

export default function Blog({ params }) {
  let post = getBlogPosts().find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <section className="max-w-3xl mx-auto">
      <div className="mb-4">
        <a href="/blog" className="text-blue-500 hover:underline">
          ← Back to Blog
        </a>
      </div>
      
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${baseUrl}${post.metadata.image}`
              : `/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${baseUrl}/blog/${post.slug}`,
            author: {
              '@type': 'Person',
              name: 'My Portfolio',
            },
          }),
        }}
      />
      
      <h1 className="title font-semibold text-2xl tracking-tighter mb-4">
        {post.metadata.title}
      </h1>
      
      <div className="flex justify-between items-center mb-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
        <div>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Published: {formatDate(post.metadata.publishedAt)}
          </p>
          <p className="text-xs text-neutral-500 dark:text-neutral-500">
            Reading time: {Math.ceil(post.content.length / 200)} min
          </p>
        </div>
        <button 
          className="px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600"
          onClick={() => alert('Share functionality coming soon!')}
        >
          Share
        </button>
      </div>
      
      <article className="prose max-w-none">
        <CustomMDX source={post.content} />
      </article>
      
      <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Have a question? <a href="/contact" className="text-blue-500 hover:underline">Contact me</a>
        </p>
      </div>
    </section>
  )
}
