import Link from 'next/link';
import BlogCard from '@/components/BlogCard';
import SectionHeading from '@/components/SectionHeading';
import { getAllPosts } from '@/lib/blog';

export default function Insights() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <section className="section-shell border-y border-white/[0.06] bg-[#090D14]">
      <div className="site-container">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Insights / How I think"
            title="Engineering notes for teams building real products."
          />
          <Link href="/blog" className="inline-flex items-center gap-2 font-semibold text-cyan-200 hover:text-white">All articles →</Link>
        </div>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {posts.map((post) => <BlogCard key={post.slug} post={post} />)}
        </div>
      </div>
    </section>
  );
}
