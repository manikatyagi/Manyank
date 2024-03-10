
import educatiom from "../../data/education.json"
import styles from "./education.module.css";
export const Education=()=>{

    return (
        <div id="education" className={styles.container}>
         <div className={styles.Wrapper}>
         <h2 className={styles.title}>Education</h2>
          <div className={styles.content}>

          <ul className={styles.education}>{
                    educatiom.map((eduItem,id)=>{
                        return <li key={id}className={styles.eduItem}>
                            <div className={styles.eduItemDetails}>
                                <h3>{`${eduItem.Degree},${eduItem.Institute}`}</h3>
                                <p>{`${eduItem.startDate}-${eduItem.endDate}`}</p>
                                <ul>{
                                     eduItem.description.map((edu,id)=>{
                                        return <li key={id}>
                                             {edu}
                                        </li>
                                     })
                                    }</ul>
                            </div>
                        </li>
                    })
                }</ul>
          </div>
         </div>
          
        </div>
    );
};