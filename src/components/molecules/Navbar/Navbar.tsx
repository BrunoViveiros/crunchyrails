import styles from "./styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>Logo</div>

        <ul className={styles.listContainer}>
          <li>Search</li>
          <li>Social</li>
          <li>Forum</li>
        </ul>

        <div className={styles.buttonContainer}>
          <button>Login</button>
          <button>Sign Up</button>
        </div>
      </nav>
    </div>
  );
};

export { Navbar };
