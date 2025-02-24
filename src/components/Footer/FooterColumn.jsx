import { Link } from "react-router";

export default function FooterColumn({ title, links }) {
  return (
    <div className="flex flex-col">
      <h3 className="font-bold text-white mb-3">{title}</h3>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.text}>
            <Link
              to={link.url}
              className="text-sm text-gray-300 hover:text-white hover:underline"
            >
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
