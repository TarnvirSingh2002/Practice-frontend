let num = [0,71,0,41];
let apnafilter=(cb,arr)=>{
    let temp=[];
    for(let i=0;i<arr.length;i++){
        let bool=Boolean(cb(arr[i],i,arr));
        bool && temp.push(arr[i]);
    }
    return temp;
}
let filterValue=apnafilter((val,i,arr)=>{
    return val;
},num);
console.log(filterValue);