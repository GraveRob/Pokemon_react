import styles from "./styles.module.css";
const Header = ({title, descr}) =>{
    return(
        <header className={styles.root}>
            <div className={styles.forest}>
                <div className={styles.container}>
                    {
                        title && (<h1>{title}</h1>)
                    }
                    {
                        descr && (<p>{descr}!</p>)
                    }
                </div>
            </div>
        </header>
    );
}

export default Header;