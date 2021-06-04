const caesar = function(string, shift) {
    //Take in a string 
    let code = shift 
    let input = string
    let array = ""
    //convert each individual character 
    let fix = (x,y) =>{
        x % y 
        
    }
    for (i=0; i<input.length; i++){
        let check =  input.charCodeAt(i);
        let newHex = input.charCodeAt(i) + code;
        let overUnder = 0;
        //checking if a letter
        if (check >= 65 && check <= 90) {
             if (newHex>90) {
                newHex -= 26
            } else if(newHex<65){
                newHex += 26
            } 
            array += String.fromCharCode(newHex)
        } else if(check >= 97 && check <= 122) {
            if (newHex<97) {
                newHex += 26
            } else if(newHex>122){
                newHex -= 26
            } 
            array += String.fromCharCode(newHex)
        } else{
            array += String.fromCharCode(check)
        }
        if (i === input.length - 1){
            return array
        }

    }
};

module.exports = caesar;

/*
    //Take in a string 
    let code = shift 
    let input = string
    let array = ""
    //convert each individual character 
    for (i=0; i<input.length; i++){
        let newHex = input.charCodeAt(i) + code;
        //checking if a letter
        if ((newHex >= 65 && newHex <= 122)) {
            //keeping positive shifts from moving value into non letter range
            if(newHex >= 91 && newHex <= 96 && shift > 0){
               newHex -= 26
            }
             //keeping negative shifts from moving value into non letter range
            if(newHex >= 91 && newHex <= 96 && shift < 0){
                newHex += 26
             }
            array += String.fromCharCode(newHex)
        } else if() {

        } else {
            array += String.fromCharCode(newHex - code)
        }
        if (i === input.length - 1){
            return array
        }

    }
};

85 - 140
55
3
88

*/