import { NavLink } from "react-router";

export default function Header() {
  return (
    <div className="bg-black text-white p-3 flex items-baseline justify-between">
      <h1 className="text-2xl">React Router</h1>

      <nav className="space-x-7">
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/contact"}>Contact</NavLink>
      </nav>
    </div>
  );
}
