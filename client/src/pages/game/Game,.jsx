import React, { useState } from 'react';
import styles from "./Game.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsRotate, faHourglassStart, faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

function Game() {

    const [isCounting, setIsCounting] = useState(false);
    const [isFlipped, setIsFlipped] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);
    let clockAudio = new Audio("/public/clock.mp3");
    let btnAudio = new Audio("/public/btnClickAudio.mp3")

    const btnClickAudio = () => btnAudio.play()


    const players = JSON.parse(localStorage.getItem("players") || "[]");

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    const handleStartTimer = () =>{
        setIsCounting(!isCounting)
        clockAudio.play()
        setIsDisabled(true)
    }

    return (
        <>
            <div className={styles.container}>
                <Link to="/">
                    <button onClick={btnClickAudio} className={styles.quitBtn}>QUIT</button>
                </Link>
                <div className={styles.question}>
                    <div className={styles.questionFor}>Siema</div>
                    <div className={isFlipped ? `${styles.card} ${styles.flipped}` : styles.card}>
                        <div className={styles.front}>?</div>
                        <div className={styles.back}>Druga strona</div>
                    </div>
                    <div className={styles.timerContainer}>
                        <div className={isCounting ? `${styles.timer} ${styles.animate}` : styles.timer}></div>
                    </div>
                    <div className={styles.buttons}>
                        <button className={styles.flipBtn} onClick={handleFlip}>
                            <FontAwesomeIcon className={styles.fix} icon={faArrowsRotate} /> SHOW
                        </button>
                        <button className={styles.startTimerBtn} onClick={handleStartTimer} disabled={isDisabled}>
                            <FontAwesomeIcon className={styles.fix} icon={faHourglassStart} /> START
                        </button>
                        <button className={styles.yesBtn}>
                            <FontAwesomeIcon className={styles.fix} icon={faThumbsUp} />
                        </button>
                        <button className={styles.noBtn}>
                            <FontAwesomeIcon className={styles.fix} icon={faThumbsDown} />
                        </button>
                    </div>
                </div>
            </div>
            <div className={styles.playersScore}>
                {players.map((player, index) => (
                    <div key={index} style={{ background: player.color }} className={styles.player}>
                        <span>{player.name}</span>
                        <span>{player.points}</span>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Game;
