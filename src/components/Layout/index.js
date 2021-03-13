import styles from "./styles.module.css";
import img from "../../bg3.jpg";

const Layout = ({title, descr, urlBg, colorBg}) =>{
    const styleReact = urlBg ? {backgroundImage: `url(${img})`} : {backgroundColor: `${colorBg}`};

    return(
        <section className={styles.root} style = {styleReact}>
            <div className={styles.wrapper}>
                <article>
                    <div className={styles.title}>
                        { title && (<h3>{title}</h3>) }
                        <span className={styles.separator}></span>
                    </div>
                    <div className={styles.desc + " " + styles.full}>
                        { descr && (<p>{descr}</p>)}
                    </div>
                </article>
            </div>
        </section>
    );
}

export default Layout;