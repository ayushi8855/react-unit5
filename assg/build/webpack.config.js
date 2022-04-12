const path= require("path")
module.exports={
    entry:"./src/index.js",
    output:{
        path:path.resolve(".","build"),
        filename:"bundle.js"
    },
mode: "development",
// module: {
//     rules: [
//       {
//         test: /\.css$/i,
//         use: ["style-loader", "css-loader"],
//       },
      
//       {
//         test: /\.js$/i,
//         use: ["babel-loader"],
//       },
//     ],
//   },


module: {
  rules: [
    {
              test: /\.css$/i,
              use: ["style-loader", "css-loader"],
            },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },

  ],
}
}
