const addQuestion = require('./functions/addQuestion');
const getQuestion = require('./functions/getQuestion');
const saveScore = require('./functions/saveScore');
const getscore = require('./functions/getscore');

const cors = require('cors');
var path = require('path');
var express = require('express');
var ObjectId = require('mongodb').ObjectID


module.exports = router => {
    //---------------API to get questions and options--------------------//
    router.get('/getQuestion',cors(),(req,res)=>{
    getQuestion.getQuestion()
             .then(result=>{
                res.status(result.status).json({
                 "message": result.usr
             })
         })       
         .catch(err => res.status(err.status).json({
             message: err.message
         }).json({
             status: err.status
         }));
});         

//---------------API to add questions and options--------------------//
router.post('/addQuestion',cors(), (req, res) => {   
        const series = req.body.series;
        if (!series) {
                        res.status(400).json({
                        message: 'Invalid Request !'
                        });  
                    } 
        else {
                        addQuestion.addQuestion(series)
                        .then(result => {            
                            res.status(result.status).json({
                            message: result.message
                            })
                        })
            
                        .catch(err => res.status(err.status).json({
                            message: err.message
                        }).json({
                            status: err.status
                        }));
                    }
});

//---------------API to save score calculation--------------------//
router.post("/saveScore", (req, res) => {
        var  score = req.body.score;
        var  key = req.body.key;
        
         saveScore.saveScore(score,key)
                    .then(result => { 
                        res.status(200).json({
                                                "message": "Score stored sucessfully!",
                                                "txid": result.query
                                            });      
                                    })                    
    });

//---------------API to get score calculation--------------------//
    router.post("/getscore", (req, res) => {
        var  key = req.body.key;
    
         getscore.getscore(key)
                    .then(result => {
                                        res
                                            .status(200)
                                            .json({
                                                "message": "Get Score sucessfully!",
                                                "result": result.query
                                            });
                                    })
                              
    });
   }
