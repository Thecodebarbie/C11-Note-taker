const express = require("express")
const path = require("path")
const PORT = process.env.PORT || 3001 //for deployment to heroku

const app = express()

const fs =  require("fs")

// extended  exact data from original after parsing.
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(express.static('public'))

// api routes
app.get("/api/notes", (req,res)=>{
    fs.readFile("./db/db.json","utf8",(err,data)=>{
        const newData = JSON.parse(data)
        res.json(newData)
    })
})


app.post("/api/notes", (req,res)=>{
    // Read the existing notes from the database
    fs.readFile("./db/db.json", "utf8", (err, data) => {
        if (err) {
            console.error("Error reading database file:", err);
            return res.status(500).send("Internal Server Error");
        }

        // Parse the existing notes data
        const notes = JSON.parse(data);

        // Generate a unique ID for the new note
        const newNoteId = notes.length > 0 ? notes[notes.length - 1].id + 1 : 1;

        // Extract the new note data from the request body
        const newNote = {
            id: newNoteId,
            title: req.body.title, // Assuming title is sent in the request body
            text: req.body.text // Assuming text is sent in the request body
        };

        // Add the new note to the existing notes array
        notes.push(newNote);

        // Write the updated notes array back to the database file
        fs.writeFile("./db/db.json", JSON.stringify(notes), err => {
            if (err) {
                console.error("Error writing to database file:", err);
                return res.status(500).send("Internal Server Error");
            }

            // Respond with the newly added note
            res.json(newNote);
        });
    });
})

// Route handler for DELETE /api/notes/:id
/*app.delete("/api/notes/:id", (req, res) => {
    const noteId = req.params.id;
  
    // Example: Delete the note from a file or database
    // For demonstration purposes, assuming you are using a JSON file as your database
    const filePath = path.join(__dirname, "db", "notes.json");
    
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        console.error("Error reading notes file:", err);
        return res.status(500).send("Internal Server Error");
      }
  
      const notes = JSON.parse(data);
      const updatedNotes = notes.filter(note => note.id !== noteId);
  
      fs.writeFile(filePath, JSON.stringify(updatedNotes), err => {
        if (err) {
          console.error("Error writing notes file:", err);
          return res.status(500).send("Internal Server Error");
        }
  
        res.status(200).send("Note deleted successfully");
      });
    });
});*/


app.get("/notes", (req,res)=>{
    res.sendFile(path.join(__dirname, "./public/notes.html"))
})


// html routes
//http://localhost:3001/*
app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname, './public/index.html'))
})

// Route handler for DELETE /api/notes/:id
app.delete("/api/notes/:id", (req, res) => {
    const noteId = req.params.id;
  
    // Read the existing notes from the database
    fs.readFile("./db/db.json", "utf8", (err, data) => {
        if (err) {
            console.error("Error reading database file:", err);
            return res.status(500).send("Internal Server Error");
        }
  
        // Parse the existing notes data
        const notes = JSON.parse(data);
  
        // Filter out the note with the specified ID
        const updatedNotes = notes.filter(note => note.id !== parseInt(noteId));
  
        // Write the updated notes array back to the database file
        fs.writeFile("./db/db.json", JSON.stringify(updatedNotes), err => {
            if (err) {
                console.error("Error writing to database file:", err);
                return res.status(500).send("Internal Server Error");
            }
  
            // Respond with a success message
            res.status(200).send("Note deleted successfully");
        });
    });
});


app.listen(PORT, ()=>{
    console.log('app is listening at PORT: http://localhost:'+PORT)
})




