const express = require("express")

const router = express.Router();


router.post('/',(req,res,next)=>{
    fs.readFile('chat.txt',{encoding:"utf-8"},(err,data)=>{
      if(err){
        console.log(err);
      }
      res.send(`<body>${data}</body>`)
    })
    
// localStorage.setItem('username',req.body)
res.send("<form> <input type='text'  name='message'> <button type='submit'>Send</button></form>")
fs.writeFileSync('chat.txt',req.body)
console.log(req.body);
res.redirect("/")
})

module.export = router;
