import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

export default function Page() {
  return (
    <div className="container m-auto grid grid-cols-3 gap-4 bg-gray-200 dark:bg-gray-800 p-5 mt-5 rounded-lg relative">
      <Card className="col-span-1 p-3 border-solid border-2 border-green-800 bg-slate-400 h-[200px] relative">
        <Image 
          src="/Jacques.png"
          alt="Me"
          fill
          objectFit="contain"
          className="p-3"
        />
      </Card>
      <div className="col-span-2 border-solid border-2 border-green-800 rounded-lg h-[200px]">
        <h3>Some stuff about me</h3>
      </div>
      <div className="col-span-3 border-solid border-2 border-green-800 rounded-lg h-[100px]">
        <h3>Links to stuff</h3>
      </div>
    </div>
  )
}