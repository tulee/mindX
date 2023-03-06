function numberOneTriangle(n){
    for(i=1;i<=n;i++){
        let string="";
        for(j=1;j<=i;j++){
            string=string + " *";
        }
        console.log(string);
    }
}

numberOneTriangle(5);