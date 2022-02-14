import styles from "./Nav.module.css";
import navList from "./NavList";

function Nav() {
    return (
        <div>
            <nav className={styles.container}>
                <div className={styles.title}>
                    <a href="/">
                        <strong>POPFLEX</strong>
                    </a>
                </div>
                <ul className={styles.option__list}>
                    <li>    
                        <a>High Rating</a>
                    </li>
                    <li>
                        <a>Romance</a>
                    </li>
                    <li>
                        <a>Thriller</a>
                    </li>
                    <li>
                        <a>Animation</a>
                    </li>
                </ul>
                <ul className={styles.icon__list}>
                    <li>
                        <a href="https://twitter.com/?lang=ko" target="_blank">
                            <i class="fab fa-twitter-square" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/" target="_blank">
                            <i class="fab fa-instagram" />
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )

}

export default Nav;