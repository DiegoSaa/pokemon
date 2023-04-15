import Link from 'next/link';
import styles from './Pokemon.module.css';

const Pokemon = ({ pokemon }) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                {pokemon.id}. {pokemon.name}
            </h1>
            <div className={styles.card}>
                <img className={styles.image} src={pokemon.image} alt={pokemon.name} />
                <p className={styles.info}>
                    <span className={styles.bold}>Weight:</span> {pokemon.weight}
                </p>
                <p className={styles.info}>
                    <span className={styles.bold}>Height:</span>
                    {pokemon.height}
                </p>
                <h2 className={styles.subtitle}>Types</h2>
                {pokemon.types.map((type, index) => (
                    <p className={styles.info} key={index}>{type.type.name}</p>
                ))}
            </div>
            <p className={styles.link}>
                <Link href="/">
                    <a className={styles.button}>
                        Home
                    </a>
                </Link>
            </p>
        </div>
    )
}


export const getServerSideProps = async (context) => {
    const { id } = context.query;
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemon = await res.json();
    const paddedId = ('00' + id).slice(-3);
    pokemon.image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`;
    return {
        props: { pokemon },
    };
}

export default Pokemon