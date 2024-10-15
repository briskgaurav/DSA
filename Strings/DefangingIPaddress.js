
var defangIPaddr = function(s) {

    let ans="";
    for(let i=0;i<s.length;i++){
      
        if(s[i]==='.'){
            ans=ans+'[.]';
        }
        else{
            ans=ans+s[i];
        }
       
    }
    return ans;
}