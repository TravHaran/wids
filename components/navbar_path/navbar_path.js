const NavbarPath = ({ paths }) => {
  return (
    <>
      {paths.map((path, i, { length }) => {
        if (i + 1 == length) {
          return (
            <>
              <a href={path.loc}>
                <h3>{path.name}</h3>
              </a>
            </>
          );
        } else {
          return (
            <>
              <a href={path.loc}>
                <h3>{path.name}</h3>
              </a>
              <a>
                <h3>/</h3>
              </a>
            </>
          );
        }
      })}
    </>
  );
};

export default NavbarPath;
