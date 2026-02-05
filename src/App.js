//  C R E A T E - S E R V E R .......................

const express = require ('express');

  const app = express();   //  server create 

  app.use(express.json());  // middleware

    //   api

    const notes = [];
       // POST api
         app.post('/notes',(req,res) => {
             notes.push(req.body);
                res.status(201).json({
                    messege : 'note created successfully',
                })
         })

        // GET api
        
         app.get('/notes',(req,res) =>{
              res.status(200).json({
                messege : 'notes retrieved successfully',
                data : notes
              })
         })

         // Delete api

              // notes - static and index - dynamic

            app.delete('/notes/:index', (req,res) =>{

                 const id = req.params.index ;
                    delete notes[id];
                    res.status(200).json({
                        messege : 'note deleted successfully',
                    })
            })

         // update api  / patch api 

            app.patch('/notes/:index',(req,res) =>{

                const id = req.params.index;
                const title = req.body.title;
                const description = req.body.description;

                notes[id].title = title;
                notes[id].description= description; 

                res.status(200).json({
                    messege : 'note updated successfully',
                })

         })


module.exports = app;