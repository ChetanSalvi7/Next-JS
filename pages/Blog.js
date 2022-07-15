import axios from 'axios';
import React, { useEffect ,useState} from 'react'
import Styles from '../styles/blog.module.css'
import Link from 'next/Link'


const Blog = () => {
  //Step : 1 - Collect all the blogdata from blogdata directory
  //Step : 2 - Iterate through the and Display them  
   let url = "http://localhost:3000/api/blogs"

   const [blogs, setblogs] = useState([])
  useEffect(() => {
    axios.get(url)
      .then(function (response) {
        console.log(response.data);
        setblogs(response.data);
      });
  }, [])
  return (
    <>

      <div className={Styles.blogtitle}> 
      {blogs.map((item)=>{
        return(
          <div key={item.slug}>
            <Link href={`/blog/${item.slug}`}>
           <h3 className={Styles.title1} >{item.title}</h3></Link>
           <p>{item.content.substr(0 , 100)}</p>
          </div>
        )
      })}
      </div>

    </>
  )
}

export default Blog