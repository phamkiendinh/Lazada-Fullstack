import styles from './TopNav.module.css';

const TopNav = () => (
    <nav className={`${styles.topNav} d-flex justify-content-between align-items-center px-3`}>
        <h5 className={styles.brand}>Seller Dashboard</h5>
    </nav>
);

export default TopNav;
