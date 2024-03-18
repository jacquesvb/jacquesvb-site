import Image from 'next/image'
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="bg-blue-100 dark:bg-gray-800 p-5 rounded-lg col-span-3 relative h-96">
      <h1 className="text-4xl text-center font-merienda">The Compelling Website of</h1>
      <Image
        src="/NameSign.png"
        alt="Hero Image"
        fill
        className="absolute object-cover top-0 left-0 w-full h-full rounded-lg"
      />
      <div className="absolute bottom-0 left-0 h-16 w-16 ml-5 mb-5">
        <button className="btn btn-primary mt-7 w-32">
          <Link href="/about" className={"font-bold text-lg"}>About Me</Link>
        </button>
        
      </div>
    </div>
  )
}