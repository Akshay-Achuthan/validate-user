import styles from "./UserResult.module.css"

const UserResult = (props) => {

  return ( 
      <ul className={styles['custom-card']}>
        {props.dataItems.map((item,index) => (
          <li key={index}>{item.text}  {item.age} (years old)</li>
        ))}
      </ul>
  );
}

export default UserResult;