import { Image } from '@/lib/Components/Image/Image';
import { Link } from '@/lib/Components/Link/Link';
import styles from './styles/Card.module.css';

export type CardProps = {
  title: string;
  imageSrc: string;
  alt: string;
};

const Card = ({ title, imageSrc, alt }: CardProps) => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.imageContainer}>
        <Image alt={alt} src={imageSrc} fill className={styles.image} />
      </Link>

      <Link href="/" className={styles.title}>
        {title}
      </Link>
    </div>
  );
};

export { Card };
