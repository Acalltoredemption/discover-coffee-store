import {useRouter} from 'next/router';
import Link from 'next/link';

import coffeestoreData from '../../data/coffee-stores.json';

export function getStaticProps(staticProps){
    const params = staticProps.params;
    return {
        props: {
            coffeeStore: coffeestoreData.find(coffeeStore => {
                return coffeeStore.id === params.id
            })
        }
    }
}

export function getStaticPaths (){
    return {
        paths: [{params: {id: "1"}, params: {id: "2"}}],
    }
}


const CoffeeStore = () => {
    const router = useRouter();
    return <div>Coffee Store Page
        <Link href="/"><a>Back to Home</a></Link>
        
    </div>
};

export default CoffeeStore;