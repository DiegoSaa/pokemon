import Link from 'next/link';
import Image from 'next/image';
import styles from './Home.module.css';

export default function Home({ pokemon }) {

  return (
    <>
      <h1 className={styles.Home__container}>Pokedex</h1>
      <ul className={styles.Home__pokemons_list}>
        {pokemon.map((item, index) => (
          <li key={index}>
            <Link href={`/${item.url.slice(-3,-1)}`}>
              <a className={styles.Home__reference}>
                <Image
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 mr-3"
                  width={200}
                  height={200}
                />
                <span className= {styles.Home__name}>
                  {index + 1}.
                </span>
                {item.name}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}


export const getServerSideProps = async ({params}) => {
  console.log("params", params);
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=20$&offset=${params.id}`);
  const { results } = await res.json();
  const pokemon = results.map((pokemon, index) => {
    const paddedId = ("00"+pokemon.url.slice(-3,-1)).slice(-3);
    const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`;
    return { ...pokemon, image };
  });
  return {
    props: { pokemon },
  };g
}