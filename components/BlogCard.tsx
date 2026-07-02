import Link from 'next/link';
import type { BlogPost } from '@/lib/blog';

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="surface-card group flex h-full flex-col p-6">
      <div className="flex items-center justify-between gap-3 text-xs text-slate-500">
        <span className="uppercase tracking-[0.14em] text-cyan-300/60">{post.category}</span>
        <span>{post.readingTime}</span>
      </div>
      <h2 className="mt-5 text-xl font-black leading-7 text-white">
        <Link href={`/blog/${post.slug}`} className="after:absolute after:inset-0">{post.title}</Link>
      </h2>
      <p className="mt-4 flex-1 text-sm leading-6 text-slate-400">{post.description}</p>
      <div className="mt-6 flex items-center justify-between border-t border-white/[0.07] pt-4 text-xs text-slate-500">
        <time dateTime={post.date}>{new Intl.DateTimeFormat('en', { dateStyle: 'medium' }).format(new Date(post.date))}</time>
        <span className="text-cyan-200 transition group-hover:translate-x-1">Read →</span>
      </div>
    </article>
  );
}
