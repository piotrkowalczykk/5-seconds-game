import React, { useState } from "react";
import styles from "./Options.module.css";
import { Link } from 'react-router-dom';

function Options(){

    const [btnAudio] = useState(new Audio("/public/btnClickAudio.mp3"));
    const [startAudio] = useState(new Audio("/public/start.mp3"));

    const btnClickAudio = () => btnAudio.play()

    const [players, setPlayers] = useState([]);
    const [newPlayer, setNewPlayer] = useState({
        name:"",
        points: 0,
        color: ""
    });

    const changehandle = (e) => {
        setNewPlayer({ ...newPlayer, [e.target.name]: e.target.value });
    };

    const addPlayer = () => {
        if (newPlayer.name.trim() !== "") {
            const colorIndex = players.length;
            const color = colors[colorIndex];
            const playerToAdd = { ...newPlayer, color: color };
            setPlayers([...players, playerToAdd]);
            setNewPlayer({ name: "", points: 0 });
            btnClickAudio()
        }
    };

    const removePlayer = (index) => {
        const updatedPlayers = [...players];
        updatedPlayers.splice(index, 1);
        setPlayers(updatedPlayers);
        btnClickAudio()
    };

    const startGame = () =>{
        localStorage.setItem("players", JSON.stringify(players));
        startAudio.play();
    }

    const colors = ["red", "green", "yellow", "blue", "white", "lightgreen", "orange", "purple", "aqua"];

    return (
        <div className={styles.container}>
            <Link to="/">
                <button onClick={btnClickAudio} className={styles.backBtn}>←</button>
            </Link>
            {players.length >= 2 &&
             <Link to="/game">
                <button onClick={startGame} className={styles.startBtn}>START</button>
            </Link> }

            <div className={styles.form}>
                <input type="text" maxLength="9" onChange={changehandle} value={newPlayer.name} name="name" placeholder="Player name" className={styles.textField}></input>
                <button onClick={addPlayer} className={`${styles.addBtn} ${players.length >= 9 ? styles.disabled : ""}`} disabled={players.length >= 9}>ADD PLAYER</button>
            </div>
            <table className={styles.playerTable}>
                <thead>
                    <tr>
                        <th>Player Name</th>
                        <th>Player Color</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {players.map((player, index) => (
                        <tr key={index}>
                            <td>{player.name}</td>
                            <td style={{ backgroundColor: player.color }}></td>
                            <td><button className={styles.removeBtn} onClick={() => removePlayer(index)}>Remove</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Options;
