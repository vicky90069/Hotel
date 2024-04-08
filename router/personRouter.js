const express = require("express");
const router = express.Router();
const person = require("../models/Person"); // Changed to `person`

router.post("/signup", async (req, res) => {
  // Added async keyword to make the function asynchronous
  try {
    const data = req.body;

    // Creating a new person instance using the model
    const newPerson = new person(data); // Changed to `person`

    // Save the new person to the database
    const response = await newPerson.save();
    console.log("Data saved successfully");

    const token=generateToken(response.username);
    console.log("Token is :", token);

    res.status(200).json({response: response, token: token}); // Corrected response and token variables
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" }); // Fixed syntax error here
  }
});



///fatch data
router.get("/", async (req, res) => {
  try {
    const data = await person.find();
    console.log("Data fatch");
    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/:workType", (req, res) => {
  try {
    const workType = req.params.workType;
    if (workType == "chef" || workType == "maganger" || workType == "waiter") {
      console.log("respponce");
      res.status(200).json(responce);
    } else {
      res.status(404).json({ error: "inviled work type" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "internal error" });
  }
});


//update data 
router.put("/:id", async (req, res) => {
    try {
      const personId = req.params.id; // Corrected variable name to personId
      const updatePersonData = req.body;
  
      const response = await person.findByIdAndUpdate(
        personId,
        updatePersonData,
        {
          new: true,
          runValidators: true,
        });
  
        if(!response){
          return res.status(404).json({error:'person not found'});
        }
  
      console.log("data update");
      res.status(200).json(response);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "internal error" });
    }
  });

  //delete update

  router.delete('/:id', async (req, res) => {
    try {
        const personId = req.params.id;

        // Assuming you have a person model
        const response = await person.findByIdAndDelete(personId);

        if (!response) {
            return res.status(404).json({ error: "person not found" });
        }
        console.log('data delete');
        res.status(200).json(response);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "internal error" });
    }
});

  

module.exports = router;

