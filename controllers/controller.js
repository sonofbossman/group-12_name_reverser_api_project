function submitName(req, res) {

    const name = req.body.name

    if (typeof name !== 'string' || !name) {
       if (!name) {
         res.status(400).json({error: "Name query parameter is missing and must be provided"})
       } else {
        res.status(400).json({error: "Name query parameter is invalid"})
       }
    }
}