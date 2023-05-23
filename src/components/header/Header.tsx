import { Nav } from "../nav/Nav";

export function Header() {
  const title = "forms to complete";

  return (
    <header>
      <h1>{title}</h1>
      <Nav></Nav>
    </header>
  );
}
