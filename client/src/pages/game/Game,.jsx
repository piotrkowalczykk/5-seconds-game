import React, { useEffect, useState } from 'react';
import styles from "./Game.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsRotate, faHourglassStart, faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

function Game() {
    const [isCounting, setIsCounting] = useState(false);
    const [isFlipped, setIsFlipped] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);
    const [players, setPlayers] = useState(JSON.parse(localStorage.getItem("players") || "[]"));
    const [gameOver, setGameOver] = useState(false);
    const [currentPlayer, setCurrentPlayer] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(null);
    const [usedQuestionIds, setUsedQuestionIds] = useState([]);

    const clockAudio = new Audio("/public/clock.mp3");
    const btnAudio = new Audio("/public/btnClickAudio.mp3");

    const btnClickAudio = () => btnAudio.play();

    const fetchQuestion = async (id) => {
        const response = await fetch(`http://127.0.0.1:8080/question/${id}`);
        const data = await response.json();
        setCurrentQuestion(data);
    };

    const getRandomQuestion = () => {
        let id;
        do {
            id = Math.floor(Math.random() * 2) + 1;
        } while (usedQuestionIds.includes(id));
        setUsedQuestionIds([...usedQuestionIds, id]);
        return id;
    };

    useEffect(() => {
        const id = getRandomQuestion();
        fetchQuestion(id);
    }, [currentPlayer]);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    const handleStartTimer = () => {
        setIsCounting(true);
        clockAudio.play();
        setIsDisabled(true);
    };

    const handleAnswer = (isCorrect) => {
        const updatedPlayers = [...players];
        if (isCorrect) {
            updatedPlayers[currentPlayer].points += 1;
            if (updatedPlayers[currentPlayer].points >= 10) {
                setGameOver(true);
            }
        }
        setPlayers(updatedPlayers);
        localStorage.setItem("players", JSON.stringify(updatedPlayers));
        setCurrentPlayer((currentPlayer + 1) % players.length);
        setIsFlipped(false);
        setIsCounting(false);
        setIsDisabled(false);
        clockAudio.pause();
    };

    if (gameOver) {
        return (
            <div className={styles.container}>
                <h1>{players[currentPlayer].name} won!</h1>
                <Link to="/">
                    <button onClick={btnClickAudio} className={styles.quitBtn}>QUIT</button>
                </Link>
            </div>
        );
    }

    return (
        <>
            <div className={styles.container}>
                <Link to="/">
                    <button onClick={btnClickAudio} className={styles.quitBtn}>QUIT</button>
                </Link>
                <div className={styles.question}>
                    <div className={styles.questionFor}>It is {players[currentPlayer].name}'s turn</div>
                    <div className={isFlipped ? `${styles.card} ${styles.flipped}` : styles.card}>
                        <div className={styles.front}>?</div>
                        <div className={styles.back}>{currentQuestion?.description}</div>
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
                        <button className={styles.yesBtn} onClick={() => handleAnswer(true)} disabled={!isDisabled}>
                            <FontAwesomeIcon className={styles.fix} icon={faThumbsUp} />
                        </button>
                        <button className={styles.noBtn} onClick={() => handleAnswer(false)} disabled={!isDisabled}>
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
