import Link from "next/link";

const Pokemon = ({ pokemon }) => {
  const id = pokemon.url
    .split("/")
    .filter((x) => x)
    .pop();
  return (
    <li>
      <Link href={`/pokemons/${id}`}>{pokemon.name}</Link>
    </li>
  );
};

export default function Pokemons({ pokemons }) {
  // console.log(pokemons);
  return (
    <div>
      <p>Pokemons</p>
      <ul>
        {pokemons.map((pokemon) => (
          <Pokemon key={pokemon.name} pokemon={pokemon} />
        ))}
      </ul>
    </div>
  );
}

export const getStaticProps = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=150");
  const data = await response.json();

  return {
    props: {
      pokemons: data.results,
    },
  };
};
