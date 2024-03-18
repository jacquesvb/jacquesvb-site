import Image from 'next/image';
import Link from 'next/link';
import { client, urlFor } from '@/lib/sanity';
import { simpleBlogCard } from '@/lib/interface';
import Card from '@/components/Card';
import Hero from '@/components/Hero';
import { CardType } from './util/globalSettings';

export const revalidate = 30; // revalidate every 30 seconds

async function getData() {
  const query = `
  *[_type == 'blog'] | order(_createdAt desc){
    title,
      smallDescription,
      "currentSlug": slug.current,
      titleImage
  }`;

  const data = await client.fetch(query);

  return data;
}

export default async function Home() {
  const data: simpleBlogCard[] = await getData();
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-5">
      <Hero />
      {data.map((post, idx) => (
        <Card key={idx}
          cardImage={urlFor(post.titleImage).url()}
          cardImageAlt="image"
          cardTitle={post.title}
          cardDescription={post.smallDescription}
          buttonLabel="Read More"
          buttonLink={`/blog/${post.currentSlug}`}
          backgroundColor={CardType.retro}
        />
      ))}
    </div>
  );
}