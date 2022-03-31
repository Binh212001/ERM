import { Link, useMatch, useResolvedPath } from "react-router-dom";
function CustomLink({ children, to, icon }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div
      style={{ width: "100%", display: "flex", alignItems: "center" }}
      className={`${match ? "active" : ""}`}
    >
      <i>{icon}</i>
      <Link
        to={to}
        style={{
          color: `${match ? "#fff " : "#365571"}`,
          textDecoration: "none",
          display: "block",
          width: "100%",
          padding: "10px 80px 10px 10px",
        }}
      >
        {children}
      </Link>
    </div>
  );
}
export default CustomLink;
