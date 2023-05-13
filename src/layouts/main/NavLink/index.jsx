import Link from "next/link";

export const NavLink = ({ link, label }) => {
  return (
    <Link href={link}>
      <p className="hover:text-secondary-light">{label}</p>
    </Link>
  );
};
