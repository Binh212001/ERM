import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { Menu } from "antd";
function CustomLink({ children, to, icon }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div className={`${match ? "active" : null}`}>
      <Menu.Item
        icon={icon}
        style={{
          listStyle: "none",
          display: "block",
          width: "100%",
        }}
      >
        <Link
          to={to}
          style={{
            color: `${match ? "#fff " : "#365571"}`,
            textDecoration: "none",
            display: "inline-block",
            textAlign: "center",
            padding: "10px 80px 10px 10px",
          }}
        >
          {children}
        </Link>
      </Menu.Item>
    </div>
  );
}
export default CustomLink;
