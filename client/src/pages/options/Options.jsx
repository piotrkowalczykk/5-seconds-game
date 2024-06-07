import React, { useState } from "react";
import styles from "./Options.module.css";
import { Link } from 'react-router-dom';

function Options(){

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
        }
    };

    const removePlayer = (index) => {
        const updatedPlayers = [...players];
        updatedPlayers.splice(index, 1);
        setPlayers(updatedPlayers);
    };

    const colors = ["red", "green", "yellow", "blue", "white", "black", "orange", "purple", "aqua", "gray"];

    return (
        <div className={styles.container}>
            <Link to="/">
                <button className={styles.backBtn}>←</button>
            </Link>
            <Link to="/game">
                <button className={styles.startBtn}>START</button>
            </Link>
            <div className={styles.form}>
                <input type="text" onChange={changehandle} value={newPlayer.name} name="name" placeholder="Player name" className={styles.textField}></input>
                <button onClick={addPlayer} className={`${styles.addBtn} ${players.length >= 10 ? styles.disabled : ""}`} disabled={players.length >= 10}>ADD PLAYER</button>
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
                            <td><button onClick={() => removePlayer(index)}>Remove</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Options;
