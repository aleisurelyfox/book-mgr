//async-await

const request = (arg,isReject) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(isReject){
                reject('出错了');
                return;
            }
            console.log(arg);
            resolve(arg+1);
        },300);
    });
};


//async函数返回的是一个promise
const fn = async() =>{
    const res1 = await request(1);
    const res2 = await request(res1);
    const res3 = await request(res2);
    const res4 = await request(res3);
    const res5 = await request(res4);

    console.log(res5);
};

// const fn =()=>{
//     return new Promise((resolve,reject)=>{
//         resolve(1);
//     });
// };


fn();

//Promise
//回调函数

//一个接口要拿到数据跑五个前置接口

// const request = (arg,cb) =>{

//     setTimeout(() =>{
//         console.log(arg);''
//         cb(arg+1);
//     },300);

// };

// request(1,function(res){
//     console.log('res',res){
//         request(2,function(res){
//             console.log...
//             //回调地狱
//         });
//     };
// });



// request(1)
//     .then((res1)=>{
//         return request(res1,true);
//     })
//     .catch((msg)=>{
//         console.log(msg);
//     })
//     .then((res2)=>{
//         return request(res2);
//     })
//     .then((res3)=>{
//         return request(res3);
//     })
//     .then((res4)=>{
//         return request(res4);
//     })
//     .then((res5)=>{
//         return request('res5:', res5);
//     })
    
