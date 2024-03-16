import Image from 'next/image'
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 p-5 rounded-lg col-span-3 relative h-96 flex flex-col">
      <h1 className="text-4xl text-center font-merienda">The Compelling Website of</h1>
      <Image
        src="/NameSign.png"
        alt="Hero Image"
        fill
        objectFit="contain"
      />
      <div className="absolute bottom-0 left-0 h-16 w-16 ml-5 mb-5">
        <Button asChild className="mt-7">
          <Link href="/about">About Me</Link>
        </Button>
        
      </div>
    </div>
  )
}