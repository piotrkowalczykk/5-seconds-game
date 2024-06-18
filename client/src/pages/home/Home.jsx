import styles from "./Home.module.css"
import { Link } from 'react-router-dom';

function Home(){

    let btnAudio = new Audio("/public/btnClickAudio.mp3")

    const btnClickAudio = () => btnAudio.play()

    return (
        <div className={styles.container}>
            <img className={styles.logo} src="/public/logo.png"></img>
            <Link to="/options" className={styles.link}>
            <button onClick={btnClickAudio} className={styles.playBtn}>PLAY</button>
            </Link>
            {/* <div className={styles.language}>
                <button className={styles.lang}><img src="/public/pl.jpg"></img></button>
                <button className={styles.lang}><img src="/public/eng.png"></img></button>
            </div> */}
        </div>
    )
}

export default Home