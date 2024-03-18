import Image from 'next/image';
import Link from 'next/link';

interface cardProps {
  cardImage: string;
  cardImageAlt: string;
  cardTitle: string;
  cardDescription: string;
  buttonLabel: string;
  buttonLink: string;
  backgroundColor: string;
}

export default function Card(props: cardProps) {
  return (
    <div className={`p-5 ${props.backgroundColor} rounded-lg`}>
      <div className="card bg-gray-300 dark:bg-gray-800 w=96 shadow-xl">
        <figure><Image src={props.cardImage} alt={props.cardImageAlt} width={500} height={500} /></figure>
        <div className="card-body">
        <h2 className="card-title">{props.cardTitle}</h2>
        <p>{props.cardDescription}</p>
          <div className="card-actions justify-center">
            <button className="btn btn-primary">
              <Link href={props.buttonLink}>{props.buttonLabel}</Link>
            </button>
         </div>
        </div>
      </div>
    </div>
  )
}