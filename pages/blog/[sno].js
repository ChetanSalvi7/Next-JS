
import { useRouter } from 'next/router' 

const Post = () => {
  //Step : 1 - find the file corrensponding to the slug
    const router = useRouter()
    const { sno } = router.query

  return (
    
        <p>Title of the page  : { sno }</p>
    
   
  )
}

export default Post