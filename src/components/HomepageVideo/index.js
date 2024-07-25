import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

export default function HomepageVideo() {
  return (
    <section className={styles.features}>
      <div className="container">
        <iframe width="100%" height="500wh" src="https://www.youtube-nocookie.com/embed/g4rIaFrjO7Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    </section>
  );
}
