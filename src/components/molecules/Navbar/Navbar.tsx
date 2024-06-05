import { Link } from "@/lib/Components/Link/Link";
import styles from "./styles/Navbar.module.css";
import { Image } from "@/lib/Components/Image/Image";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Image src="/logo.svg" alt="logo" width={50} height={50} />
      </div>

      <ul className={styles.listContainer}>
        <li>
          <Link href="/" className={styles.listLink}>
            Search
          </Link>
        </li>
        <li>
          <Link href="/" className={styles.listLink}>
            Social
          </Link>
        </li>
        <li>
          <Link href="/" className={styles.listLink}>
            Forum
          </Link>
        </li>
      </ul>

      <div className={styles.buttonContainer}>
        <button className={styles.loginButton}>Login</button>
        <button className={styles.signUpButton}>Sign Up</button>
      </div>
    </nav>
  );
};

export { Navbar };
