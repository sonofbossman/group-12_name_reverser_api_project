function submitName(req, res) {

    const name = req.body.name

    if (typeof name !== 'string' || !name) {
       if (!name) {
         res.status(400).json({error: "Name query parameter is missing and must be provided"})
       } else {
        res.status(400).json({error: "Name query parameter is invalid"})
       }
    }

    res.json(reverseNameFunc(name))
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