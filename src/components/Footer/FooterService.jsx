import { Link } from "react-router";

export default function FooterService({ title, description, url }) {
  return (
    <div className="flex flex-col">
      <Link
        to={url}
        className="text-sm text-gray-300 hover:text-white hover:underline"
      >
        {title}
      </Link>
      <span className="text-xs text-gray-400">{description}</span>
    </div>
  );
}
