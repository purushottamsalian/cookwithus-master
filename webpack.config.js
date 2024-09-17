const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);
  
  // Add the rule for handling CSS
  config.module.rules.push({
    test: /\.css$/i,
    use: ["postcss-loader"],
  });

  // Add the PostCSS loader to handle Tailwind
  config.module.rules.push({
    test: /\.js$/,
    loader: 'babel-loader',
    exclude: /node_modules/,
    options: {
      presets: ['@babel/preset-env', '@babel/preset-react'],
      plugins: [
        ['nativewind/babel', { mode: 'compileOnly' }],
      ],
    },
  });

  return config;
};