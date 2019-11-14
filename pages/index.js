import Link from 'umi/Link';
import styles from './index.css';

export default function() {
  return (
    <div className={styles.normal}>
      <h1>Page index</h1>
      <Link to="/users">go to /users</Link>
    </div>
  );
}
