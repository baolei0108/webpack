//main.js,入口文件

// require("!style-loader!css-loader!./style1.css");//加入module之前页面引用css

require("./style1.css");

const greeter=require("./Greeter");
document.getElementById("root").appendChild(greeter());



//vue
// import Vue from 'vue'
// new Vue({
//     el:'body',
//     data:{
//         message:'test success!'
//     }
// });
