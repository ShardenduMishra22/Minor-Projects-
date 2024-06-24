// generate color
const color = function(){
    const hex = "0123456789ABCDEF";
    const clr = '#';
    for(let i=0;i < 6;i++){
        let num = Math.floor((mat.random()*16))
        color += hex[num]; 
    }
    return clr;
}

