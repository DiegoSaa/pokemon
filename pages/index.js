import Link from 'next/link';
import Image from 'next/image';
import styles from './Home.module.css';

export default function Home({ pokemon }) {
  return (
    <>
      <h1 className={styles.Home__container}>Pokedex</h1>
      <div className={styles.Home__pokemons_list}>
        {pokemon.map((item, index) => (
          <Link key={index} href={`/${index + 1}`}>
            <a className={styles.Home__card}>
              <div className={styles.Home__card__image}>
                <Image
                  src={item.image}
                  alt={item.name}
                  width={200}
                  height={200}
                />
              </div>
              <div className={styles.Home__card__info}>
                <span className={styles.Home__card__number}>{index + 1}.</span>
                <span className={styles.Home__card__name}>{item.name}</span>
              </div>
            </a>
          </Link>
        ))}
      </div>
      <div className={styles.Home__button_container}>
        <Link href="/auth/login">
          <a className={styles.Home__button}>Login</a>
        </Link>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20');
  const { results } = await res.json();
  const pokemon = results.map((pokeman, index) => {
    const paddedId = ('00' + (index + 1)).slice(-3);
    const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`;
    return { ...pokeman, image };
  });
  return {
    props: { pokemon },
  };
};
