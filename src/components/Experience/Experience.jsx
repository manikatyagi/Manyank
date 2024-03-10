import styles from './Experience.module.css'; // Import your CSS module
import experience from "../../data/experience.json"
import { getImageUrl } from '../../utils';

export const Experience = () => {
    return (
        <div className={styles.container} id="Experience">
            <div className={styles.Wrapper} >
                <h2 className={styles.title}>Work Experience</h2>
                <div className={styles.content}>
                <ul className={styles.experience}>
                    {experience.map((expItem, id) => (
                        <li key={id} className={styles.expItem}>
                             <img src={getImageUrl(expItem.imageSrc)} alt={`${expItem.organisation} logo`} />
                            <div className={styles.expItemDetails}>
                                <h3>{`${expItem.position}, ${expItem.company}`}</h3>
                                <p>{`${expItem.startDate} - ${expItem.endDate}`}</p>
                                
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            </div>
        </div>
    );
}


