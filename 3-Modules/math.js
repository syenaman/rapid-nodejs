module.exports.sum = function(){
    var tot =0;
    for(var i=0;i<arguments.length;i++){
        tot+=arguments[i];    
    }
    return tot;
}