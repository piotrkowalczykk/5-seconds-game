import styles from "./Game.module.css"
function Game(){

    const players = JSON.parse(localStorage.getItem("players") || "[]");
    console.log(players)

    return(
        <>
        <div className={styles.container}>
            <div className={styles.question}>
                <label className={styles.questionFor}></label>
                <p className={styles.text}></p>
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