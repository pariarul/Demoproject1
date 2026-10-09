function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 50px",
        backgroundColor: "#111827",
        color: "white",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
      }}
    >
      <h1
        style={{
          margin: 0,
          fontSize: "24px",
          color: "#38bdf8",
        }}
      >
        My Portfolio
      </h1>

      <ul
        style={{
          display: "flex",
          gap: "30px",
          listStyle: "none",
          margin: 0,
          padding: 0,
        }}
      >
        <li>
          <a
            href="/about"
            style={{
              color: "red",
              textDecoration: "none",
              fontSize: "16px",
              fontWeight: "500",
            }}
          >
            About
          </a>
        </li>

        <li>
          <a
            href="/skill"
            style={{
              color: "white",
              textDecoration: "none",
              fontSize: "16px",
              fontWeight: "500",
            }}
          >
            Skill
          </a>
        </li>

        {/* <li>
          <a
            href="#contact"
            style={{
              color: "white",
              textDecoration: "none",
              fontSize: "16px",
              fontWeight: "500",
            }}
          >
            Contact
          </a>
        </li> */}
      </ul>
    </nav>
  );
}

export default Navbar;