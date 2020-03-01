import { useRouter } from "next/router";
import Layout from "../../comps/MyLayout";
import axios from 'axios';




const Post =({props, pokemon})  => {
    const router = useRouter();

console.log(router)

    return (
        <Layout>


            <p>{props.show.summary}</p>

            {pokemon.map((pokeman, i) => {
                return (
                    <p>
                        {i + 1} {pokeman.name}
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