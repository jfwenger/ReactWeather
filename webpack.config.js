var compPath = "app/components/";

module.exports = {
  entry: "./app/app.jsx",
  output: {
    path: __dirname,
    filename: "./public/bundle.js"
  },
  resolve: {

    root: __dirname,

    alias: {
      Main: compPath + "Main.jsx",
      Nav: compPath + "Nav.jsx",
      Weather: compPath + "Weather.jsx",
      About: compPath + "About.jsx",
      Examples: compPath + "Examples.jsx",
      WeatherForm: compPath + "WeatherForm.jsx",
      WeatherMessage: compPath + "WeatherMessage.jsx",
      openWeatherMap: "app/api/openWeatherMap.jsx"
    },

    extensions: ["", ".js", ".jsx"]
  },
  module: {
    loaders: [
      {
        loader: "babel-loader",
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },

  devtool: "cheap-module-eval-source-map"
};
