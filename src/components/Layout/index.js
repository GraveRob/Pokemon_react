import styles from "./styles.module.css";

const Layout = ({id, title, urlBg, colorBg, children}) =>{
    const styleReact = {};
    if(urlBg) {styleReact.backgroundImage = `url(${urlBg})`}
    else if(colorBg) {styleReact.backgroundColor = colorBg}
    return(
        <section className={styles.root} style = {styleReact} id = {id}>
            <div className={styles.wrapper}>
                <article>
                    <div className={styles.title}>
                        { title && (<h3>{title}</h3>) }
                        <span className={styles.separator}></span>
                    </div>
                    <div className={styles.desc + " " + styles.full}>
                       {children}
                    </div>
                </article>
            </div>
        </section>
    );
}

export default Layout;