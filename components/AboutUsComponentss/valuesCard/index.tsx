import { Ellipse } from "../../../assets/images";
import styles from "./styles.module.css";

const ValuesCard: React.FC<{
  header: string;
  paragraph: string;
  strokeColor: string;
}> = ({ header, paragraph, strokeColor, ...rest }) => {
  return (
    <div className={styles.container} {...rest}>
      <Ellipse className={styles[strokeColor]} />
      <h4>{header}</h4>
      <p className="mt-6">{paragraph}</p>
    </div>
  );
};

export { ValuesCard };
