import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavListLinkProps {
  path: string;
  title: string;
  disabled?: boolean;
}

export function NavListLink({ path, title, disabled }: NavListLinkProps) {
  const pathname = usePathname();

  if (disabled) {
    return (
      <li className="p-4 border-b-4 border-transparent text-slate-300 dark:text-slate-500">
        <a className="p-4">{title}</a>
      </li>
    );
  }

  return (
    <li
      className={`p-4 border-b-4 border-transparent ${
        pathname === path ? "text-red-600 font-bold" : "hover:border-red-600"
      }`}
    >
      <Link className="p-4" href={path}>{title}</Link>
    </li>
  );
}
