import Link from 'next/link';
import Image from 'next/image';

export default function Home({ pokemon }) {

  return (
    <>
        <h1 className="text-4xl mb-8 text-center">NextJS Pokedex</h1>
        <ul>
                {pokemon.map((item, index) => (
                    <li key={index}>
                        <Link href={`/pokemon/${index + 1}`}>
                            <a className="border p-4 border-grey my-2 hover:shadow-md capitalize flex items-center text-lg bg-gray-200 rounded-md">
                                <Image 
                                    src={item.image}
                                    alt={item.name}
                                    className="w-20 h-20 mr-3"
                                    width = {100}
                                    height = {100}
                                />
                                <span className="mr-2 font-bold">
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

export const getStaticProps = async () => {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150');
    const { results }  = await res.json();
    const pokemon = results.map((pokeman, index) => {
        const paddedId = ('00' + (index + 1)).slice(-3);
        const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`;
        return { ...pokeman, image };
    });
    return {
        props: { pokemon },
    };

}