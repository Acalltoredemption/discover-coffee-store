import { useRouter } from "next/router";

const Dynamic = () => {
    const router = useRouter();
    console.log(router);
    return (
        <div >
        <h1>{router.query.dynamic}</h1>
         <div>Welcome to page: {router.query.dynamic}</div>
         </div>
    )
};

export default Dynamic;