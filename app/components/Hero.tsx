import Image from 'next/image'

export default function Hero() {
  return (
    <div className="bg-blue-100 dark:bg-blue-800 p-5 my-5 rounded-lg col-span-6 relative h-96">
      <h1 className="text-4xl text-center font-merienda">The Compelling Website of</h1>
      <Image
        src="/NameSign.png"
        alt="Hero Image"
        fill
        className="absolute object-cover top-0 left-0 w-full h-full rounded-lg"
      />
      <div className="absolute bottom-0 left-0 h-16 w-16 ml-5 mb-5">    
      </div>
    </div>
  )
}