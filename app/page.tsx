import Hero from '@/components/Hero';

export default async function Home() {

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-5 min-h-[600px]">
      <Hero />
    </div>
  );
}