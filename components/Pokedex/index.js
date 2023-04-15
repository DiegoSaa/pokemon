import { useState } from 'react';
import Image from 'next/image';

import bottomPokedex from '../../assets/images/bottomPokedex.svg';
import topPokedex from '../../assets/images/topPokedex.svg';
import pokeball from '../../assets/images/pokeball.svg';

import styles from './Pokedex.module.css';

export default function Pokedex({ children }) {
    return (
        <div className={styles.Pokedex__container}>

            <div className={styles.Pokedex__top}>
                <Image
                    src={topPokedex}
                    alt="Top pokedex"
                    width={400}
                    height={300}
                />
            </div>

            <div className={styles.Pokedex__green_screen}>
                <div className={styles.Pokedex__content}>
                    {children}
                </div>
            </div>

            <div className={styles.Pokedex__bottom}>
                <Image
                    src={bottomPokedex}
                    alt="Bottom pokedex"
                    width={400}
                    height={300}
                />
            </div>

            <div className={styles.Pokeball__center}>
                <Image
                    src={pokeball}
                    alt="pokeball"
                    width={100}
                    height={100}
                />
            </div>

        </div>
    );
}