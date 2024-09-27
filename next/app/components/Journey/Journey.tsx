"use client";
import styles from './Journey.module.css';

const Journey = () => {
  return (
    <section className={styles.journey}>
      <h2>Join our journey</h2>
      <p>
        We are on a rapid growth journey and are looking for great people to join our global team. 
        Do you want to empower a smart and sustainable world?
      </p>
      <button className={styles.button}>Join us</button>
    </section>
  );
};

export default Journey;
