module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['./src'],
        // eslint-disable-next-line no-sparse-arrays
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
          ,
        ],
        alias: {
          '@/navigation': './src/navigation',
          '@/components': './src/components',
          '@/screens': './src/screens',
          '@/theme': './src/theme',
          '@/constants': './src/constants',

          '@assets': './assets',
        },
      },
    ],
  ],
};
