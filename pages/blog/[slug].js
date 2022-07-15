import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'

const Post = () => {
  //Step : 1 - find the file corrensponding to the slug

  const router = useRouter()
    const { slug } = router.query
    let url = `http://localhost:3000/api/getblogs?slug=${slug}`

  const [blog, setblog] = useState();
  useEffect(() => {
    
    axios.get(url)
      .then(function (response) {
        // console.log(response.data);
        setblog(response.data);
      });
  }, [])


  return (
    <>
      <style jsx>
        {`
.sno-title{
  text-align: center;
  font-size: 25px;
  font-weight: 600;
  margin-top: 40px;
}
.sno-text{
  margin: 20px 60px;
  padding: 10px 20px;
  text-align: center;
}
`}
      </style>
      <div className='sno-title'>{blog && blog.title}</div>
      <div className="sno-text">{blog && blog.content}</div>
    </>
  )
}

export default Post