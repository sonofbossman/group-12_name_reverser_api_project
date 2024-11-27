const home = (req, res)=>
{
  res.status(200).send('<h2 align="center"> Name Reserver API Networks </h2>')
}

function reversedName(req, res){

const {name} = req.query // Destructuring the query params from the request body

if(!name) {

return res.status(400).json({ error: "Name query parameter must be provided!"})
}

res.json(reverseNameFunc(name))

}

function submitName(req, res) {

    const name = req.body.name

    if (typeof name !== 'string' || !name) {
       if (!name) {
         res.status(400).json({error: "Name query parameter is missing and must be provided"})
       } else {
        res.status(400).json({error: "Name query parameter is invalid"})
       }
    }
    res.json(reverseNameFunc(name)) // returns the reversed name and original as a json object
}

function reverseNameFunc(name){

  /*
      To reverse a name, we first use the split() function to convert the string into an array,
      then apply the reverse() function to reverse the array.
      Finally, use the join() function to convert the reversed array back into a string.
  */

  const reversed_name = name.split('').reverse().join('')
  console.log(reversed_name) 
  return {
      original: name,
      reversed: reversed_name
  }    
}

export {home, submitName, reversedName} // exporting local modules for use