import { useRouter } from "next/router";
import Layout from '../comps/MyLayout';
import axios from 'axios';
import Link from 'next/link';




const Post =({props, pokemon})  => {
    const router = useRouter();

console.log(router)

    return (
        <Layout>
<title>Home</title>

            
<h1>Pokemdex</h1>
            {pokemon.map((pokeman, i) => {
                return (
                    <p>
                    <Link href={`/pokemon/${i + 1}`}>
                      <a>
                        {i + 1} {pokeman.name}
                      </a>
                    </Link>
                    </p>
                );
            })}
            </Layout>
    )
}

Post.getInitialProps = async function(context){

    
    const pokemon = await axios
    .get('http://pokeapi.co/api/v2/pokemon?limit=964')
    .then(response => response.data.results);
    
    return { pokemon };
}

export  default Post;