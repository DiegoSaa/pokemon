import Image from 'next/image';
import styles from './WhoIsThatPokemon.module.css';
import snorlax from '../../assets/images/snorlax.svg';
import question from '../../assets/images/question.svg';
import Link from "next/link";

export default function WhoIsThatPokemon() {
    return (
        <div className={styles.container}>
            <div className={styles.question}>
                <Image
                    src={question}
                    alt="question"
                    width={50}
                    height={50}
                    layout="fixed"
                />
            </div>
            <div className={styles.imageWrapper}>
                <div className={styles.image}>
                    <Link href={"/"}>
                        <Image
                            src={snorlax}
                            alt="image"
                            width={150}
                            height={150}
                            layout="fixed"
                            className={styles.imageFilter}
                        />
                    </Link>
                </div>
            </div>
            <Link href={"/"}>
                <button className={styles.button}>
                    Meet my friends
                </button>
            </Link>
        </div>
    );
}
