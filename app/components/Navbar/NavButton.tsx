import Link from "next/link";

interface NavButtonProps {
  icon: JSX.Element;
  linkUrl: string;
  buttonLabel: string;
}

export default function NavButton( props: NavButtonProps ) {
  return (
    <div className="text-center">
      <button className="btn btn-square">
        <Link href={props.linkUrl}>
          {props.icon}
        </Link>
      </button>
      <div className="text-black text-center font-bold">{props.buttonLabel}</div>
    </div>
  )
}