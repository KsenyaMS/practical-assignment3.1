import styles from './Card.module.css';

export const Card = () => {
    return <div className={styles.cardWrap}>
        <div className={styles.imageWrap}>
            <div className={styles.imageContainer}></div>
        </div>
        <div className={styles.buttonWrap}>
            <h3 className={styles.titleStyle}>Птица какаду</h3>
            <button className={styles.button}>Узнать больше</button>
        </div>
        <div className={styles.contentWrap}>
            <hr className={styles.divider}/>
            <h3 className={styles.contentTitle}>Описание</h3>
            <p className={styles.description}>Какаду — единственные птицы, способные танцевать под музыку. Они могут двигаться в такт, кружиться и шевелить головой.</p>
        </div>
    </div>;
}