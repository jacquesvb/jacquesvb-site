import Link from "next/link";

interface NavButtonProps {
  icon: JSX.Element;
  linkUrl: string;
  buttonLabel: string;
}

export default function NavButton(props: NavButtonProps) {
  return (
    <Link href={props.linkUrl}>
      <div className="text-center">
        <button className="btn btn-square">{props.icon}</button>
        <div className="text-black text-center font-bold">
          {props.buttonLabel}
        </div>
      </div>
    </Link>
  );
}
