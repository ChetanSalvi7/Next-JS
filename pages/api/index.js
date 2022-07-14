export default function handler(req, res) {
    console.log(req)
    res.status(200).json({ name: 'This is a Index JSON file.' })
  }
  