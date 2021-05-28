
const express =require('express')

const app = express()
const port = 3000

app.get('/number/:num',(req,res)=>{
    var number = req.params.num;
    console.log(number)
    if(number%2 ==0 ){
        res.send(`The number ${number} is even`)
    }
    
    else{
        res.send(`The number ${number} is odd`)
    }
    

}

)


app.listen(port, () => {
    console.log(`Ëxpress app listening at http://localhost:${port}`)
})