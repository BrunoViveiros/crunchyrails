import { Anime } from '@/domain/Anime';
import styles from './styles/CardCollection.module.css';
import { Card } from '@/components/atoms/Card/Card';

type CardCollectionProps = {
  title: string;
  cards: Anime[];
};

const CardCollection = ({ title, cards }: CardCollectionProps) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>

      <div className={styles.cardContainer}>
        {cards.map(({ id, name, image }) => (
          <Card key={id} imageSrc={image} title={name} alt={name} />
        ))}
      </div>
    </div>
  );
};

export { CardCollection };
