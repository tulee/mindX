function findPrime(){
    let inputNumb01 = parseInt(document.getElementById("inputValue01").value);
    let inputNumb02 = parseInt(document.getElementById("inputValue02").value);
    let result = [];
    if(inputNumb01 <= inputNumb02){
        for(i=inputNumb01;i<=inputNumb02;i++){
            if(isPrime(i)==1){
                result.push(i);
            }
        }
    }else {
        for(i=inputNumb02;i<=inputNumb01;i++){
            if(isPrime(i)==1){
                result.push(i);
            }
        }
    }
    document.getElementById("result").innerHTML = result;
}

function isPrime(n){
    //flag = 0 => không phải số nguyên tố
    //flag = 1 => số nguyên tố
    
    let flag = 1;

    if (n <2) return flag = 0; /*Số nhỏ hơn 2 không phải số nguyên tố => trả về 0*/
    
    /*Sử dụng vòng lặp while để kiểm tra có tồn tại ước số nào khác không*/
    let i = 2;
    while(i <n){
        if( n%i==0 ) {
            flag = 0;
            break; /*Chỉ cần tìm thấy 1 ước số là đủ và thoát vòng lặp*/
        }
        i++;
    }

    return flag;
}