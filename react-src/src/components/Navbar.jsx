import styles from './Navbar.module.css'

export default function Navbar() {
    return(
        <nav className={styles.navbar}>
            <span className={styles.brand}>My App</span>
            <ul className={styles.links}>
                <li><a href="https://motolans.github.io/">Home</a></li>
                <li><a href="https://motolans.github.io/about">About</a></li>
                <li><a href="https://motolans.github.io/contact">Contact</a></li>
            </ul>
        </nav>
    )
}