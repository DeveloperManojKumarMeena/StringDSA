let l1 = [9,9,9,9,9,9,9];
let l2 = [9,9,9,9]
let ans = [];
let rem = 0;

if(l1.length>=l2.length){
    for(let i = 0; i<l1.length;i++){
        if(l2[i]==undefined)l2[i]=0 
        let tem = l1[i]+l2[i]+rem
        ans[i] = tem%10;

        if(tem>9){
            rem = 1
        }else rem=0
    }
}else{

}
if(rem == 1)ans[ans.length]=1;
console.log(ans)