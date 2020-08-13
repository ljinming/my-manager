const path = require('path');
const CracoLessPlugin = require('craco-less');
const resolve = pathUrl => path.join(__dirname, pathUrl);
module.exports={
    // 自定义引入文件的快捷模式
    webpack:{
        alias:{
            '@router':resolve('src/router'),
            '@constants':resolve('src/constants'),
        },
        devServer: {
            port: 3001,
            host: '0.0.0.0',
        }
    },
    babel:{  // 用来支持装饰器
        plugins:[
            ['import',{libraryName:'antd',style:true}],
            ['@babel/plugin-proposal-decorators',{legacy:true}]]
    },
    plugins:[
        {
            plugin: CracoLessPlugin,
            options:{
                lessLoaderOptions:{
                    lessOptions:{
                        javascriptEnabled: true
                    }
                }
            }
        }
    ],
   rules:[
       {test:/\.(js|jsx)$/,
        use:'babel-loader'
       },
       {
           test:/\.(css|less)$/,
           use:''
       }
   ]

};