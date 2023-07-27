var str=prompt("Enter string");
var arr=str.split("");
var c=[];

document.write("Given string:"+str+"<br>");
for(i=0;i<arr.length;i++){
if(arr[i]=="a"||arr[i]=="e"||arr[i]=="i"||arr[i]=="o"||arr[i]=="u"){
    c.push(arr[i]);
    
}
}
document.write("vowel in given array:"+c+"<br><br>");


document.write("Number of vowel:"+c.length);
