module.exports ={
    //this is going to be the netry file, in order to know 
//how to bundle the entire app.
    entry:'./src/index.js',

    module:{
//whiile bundling, what need to be done that is handled here.
//like we need to convert all the es6 and jsx code to browser understandable code
loaders:[
    {test: /\.js$/, loader:'babel-loader',exclude:/node_modules/},
    {test: /\.jsx$/, loader:'babel-loader',exclude:/node_modules/},
]

    },
    output:{
//where do we want he final product to be saved to
        filename : 'bundle.js',
        path: __dirname + './public'
    }
}