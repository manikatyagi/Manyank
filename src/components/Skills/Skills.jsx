import skills from "../../data/skills.json";
import styles from "./Skills.module.css";

export const Skills = () => {
  return (
    <div className={styles.Container} id="Skills">
      <div className={styles.Wrapper}>
        <div className={styles.Title}>SKILLS</div>
        <div className={styles.SkillsContainer}>
          {skills.map((skill, index) => (
            <div className={styles.Skill} key={index}>
              <div className={styles.SkillTitle}>{skill.title}</div>
              <div className={styles.SkillList}>
                {skill.skills.map((item, idx) => (
                  <div className={styles.SkillItem} key={idx}>
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
