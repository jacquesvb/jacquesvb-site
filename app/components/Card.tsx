import Image from "next/image";
import Link from "next/link";

interface cardProps {
  cardImage: string;
  cardImageAlt: string;
  cardTitle: string;
  cardDescription: string;
  buttonLabel: string;
  buttonLink: string;
}

export default function Card(props: cardProps) {
  return (
    <div className="card flex bg-gray-300 dark:bg-gray-800 w=96 shadow-xl">
      <div className="col-span-1 row-start-1 h-[200px] relative">
        <Image
          src={props.cardImage}
          alt={props.cardImageAlt}
          fill
          className="absolute object-cover top-0 left-0 w-full h-full rounded-lg"
        />
      </div>
      <div className="flex flex-col card-body p-2">
        <div className="text-lg font-medium text-center text-ellipsis">
          {props.cardTitle}
        </div>
        <div>{props.cardDescription}</div>
        <div className="mt-auto card-actions justify-center">
          <Link href={props.buttonLink}>
            <button className="btn btn-primary">{props.buttonLabel}</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
