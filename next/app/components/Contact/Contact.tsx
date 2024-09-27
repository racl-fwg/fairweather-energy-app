"use client";
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <section className={styles.contact}>
      <div className="container">
        <h2>Get a Quote</h2>
        <form className={styles.form}>
          <input type="text" placeholder="Name" className={styles.input} />
          <input type="email" placeholder="Email" className={styles.input} />
          <textarea placeholder="Message" className={styles.textarea}></textarea>
          <button type="submit" className={styles.button}>Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
