const homelist = function(req, res){
    res.render('index',{title:'Welcome to Movies Store'});
};

const listDisplay = function(req,res){
    res.render('list-display',{movie:movieArray});
};

var movieArray = [
                 {
                   name:"Movie : The Lion King", 
                   year:"Directed by: Jon Favreau"  
                 },
                 {
                name:"Movie : Toy Story",
                year:"Directed by: Josh Cooley"
                },
                 {
                name:"Movie : Captain Marvel",
                year:"Directed by: Kevin Feige"
                } 
];


module.exports = {
  homelist,
  listDisplay
};