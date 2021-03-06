import * as fs from 'fs';
// Step -1 directry ko read krna vriable k andr
// step -2 for loop ka use krna ( api ko print krne k liye )
// step -3 api file ko read krna for loop k sath veriqable me store krna 
// step -4 verible ko 3rd blank array me store krna json file me
export default async function handler(req, res) {
  let data = await fs.promises.readdir("blogdata");
  let myfile;
  let allBlogs = [];
    for (let index = 0; index < data.length; index++) 
    {
      const item = data[index];
      // console.log(item);
      myfile = await fs.promises.readFile(('blogdata/' + item ),'utf-8')
      allBlogs.push(JSON.parse(myfile))
    }
  // console.log(allBlogs)
    res.status(200).json(allBlogs)
}
