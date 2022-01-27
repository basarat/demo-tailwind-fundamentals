import styles from './button.module.css';

export const Button: React.FC = ({ children }) => {
  return (
    <button className={styles.btn}>
      {children}
    </button>
  );
};