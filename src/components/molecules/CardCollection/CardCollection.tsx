import styles from "./styles/CardCollection.module.css";
import { Card } from "@/components/atoms/Card/Card";

const CardCollection = () => {
  const mockArray = [1, 2, 3, 4, 5, 6];

  return (
    <>
      <h3 className={styles.title}>Last Season</h3>

      <div className={styles.cardContainer}>
        {mockArray.map((numb) => {
          return <Card key={numb} />;
        })}
      </div>
    </>
  );
};

export { CardCollection };
