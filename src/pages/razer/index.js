import React,{useEffect} from 'react'
import { useRouter } from 'next/router'
import { useHistory } from '../../utils/useNavigationHistory';


const Razer = () => {
    const router = useRouter();
    const { back, history } = useHistory();
    console.log('11111111111wwwwwwwwwwwww1111',history)
        const handler=()=>{
            router.push('/routetesting')
        }

   
    return (
        <div>
           <button onClick={handler}>Submit</button>
        </div>
    )
}

export default Razer
