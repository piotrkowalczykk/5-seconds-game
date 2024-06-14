import styles from "./Game.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsRotate, faHourglassStart, faThumbsUp, faThumbsDown} from "@fortawesome/free-solid-svg-icons";
function Game(){

    const players = JSON.parse(localStorage.getItem("players") || "[]");

    return(
        <>
        <div className={styles.container}>
            <div className={styles.question}>
                <div className={styles.questionFor}>Siema</div>
                <div className={styles.text}></div>
                <div className={styles.timerContainer}>
                    <div className={styles.timer}></div>
                </div>
                <div className={styles.buttons}>
                    <button className={styles.flipBtn}><FontAwesomeIcon className={styles.fix} icon={faArrowsRotate} /> SHOW</button>
                    <button className={styles.startTimerBtn}><FontAwesomeIcon className={styles.fix} icon={faHourglassStart} /> START</button>
                    <button className={styles.yesBtn}><FontAwesomeIcon className={styles.fix} icon={faThumbsUp} /></button>
                    <button className={styles.noBtn}><FontAwesomeIcon className={styles.fix} icon={faThumbsDown} /></button>
                </div>
            </div>
        </div>
        <div className={styles.playersScore}>
            {players.map((player, index) => (
                <div style={{background: player.color}}className={styles.player}>
                    <span>{player.name}</span>
                    <span>{player.points}</span>
                </div>
            ))}
        </div>
        </>
    );
}
export default Game