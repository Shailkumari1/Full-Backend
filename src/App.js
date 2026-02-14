// //  C R E A T E - S E R V E R .......................

// const express = require ('express');

//   const app = express();   //  server create 

//   app.use(express.json());  // middleware

//     //   api

//     const notes = [];
//        // POST api
//          app.post('/notes',(req,res) => {
//              notes.push(req.body);
//                 res.status(201).json({
//                     messege : 'note created successfully',
//                 })
//          })

//         // GET api
        
//          app.get('/notes',(req,res) =>{
//               res.status(200).json({
//                 messege : 'notes retrieved successfully',
//                 data : notes
//               })
//          })

//          // Delete api

//               // notes - static and index - dynamic

//             app.delete('/notes/:index', (req,res) =>{

//                  const id = req.params.index ;
//                     delete notes[id];
//                     res.status(200).json({
//                         messege : 'note deleted successfully',
//                     })
//             })

//          // update api  / patch api 

//             app.patch('/notes/:index',(req,res) =>{

//                 const id = req.params.index;
//                 const title = req.body.title;
//                 const description = req.body.description;

//                 notes[id].title = title;
//                 notes[id].description= description; 

//                 res.status(200).json({
//                     messege : 'note updated successfully',
//                 })

//          })


// module.exports = app;



              // M O D E L  S E R V E R   W I T H   D A T A B A S E


   const express = require ('express');
   const notemodel = require ('./models/note.model');
   
   
   const app = express();  // create server

      app.use (express.json());// mideleware
      // CRUD oprttaions with database
      // POST GET DELETE UPDATE

      //post api

      app.post('/notes', async (req,res)=>{

          const data = req.body;
           await  notemodel.create({
            title : data.title,
            description : data.description,
          })

          res.status(201).json({
            messege : 'note create',

          })

      })

      //  get api

      app.get('/notes', async (req,res) =>{

         const notes = await notemodel.find();

         res.status(200).json({
          messege : "note fetched ",
          note : notes
         })
      })

      // delete api

      app.delete('/notes/:id', async (req,res) => {
        const id = req.params.id;

        await notemodel.findByIdAndDelete(id);

        res.status(200).json({
          messege : 'note deleted'

        })
      })

      // update api - patch api

      app.patch('/notes/:id', async (req,res) =>{
        const id = req.params.id;
        const description = req.body.description;
            

            await notemodel.findByIdAndUpdate({_id : id },{description : description});

            res.status(200).json({
              messege : "note updated"
            })

})


   module.exports = app;
