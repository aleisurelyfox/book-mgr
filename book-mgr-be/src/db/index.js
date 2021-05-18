const mongoose = require('mongoose');

//1.给哪个数据库的
//哪个集合
//添加什么格式的文档

//Schema 
//Modal  可以理解成根据Schenma生成的一套方法，这套方法用来操作MongoDB集合和集合下的文档


const UserSchema = new mongoose.Schema({
    nickname:String,
    password:String,
    age:Number,
});

const UserModal = mongoose.model('User',UserSchema);

const connect = ()=>{
    //连接数据库
    mongoose.connect('mongodb://127.0.0.1:27017/book-mgr');

    //当数据库被打开的时候做一些事情
    mongoose.connection.on('open',() =>{
        console.log('连接成功');

        //创建文档
        const user =new UserModal({
            nickname:'小红',
            password:'123456',
            age:12,

        });
        user.age = 99;

        //保存，同步到MongoDB
        user.save();

    });
};

connect();
