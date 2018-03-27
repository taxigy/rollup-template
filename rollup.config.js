// rollup-plugin-{babel,postcss,node-resolve,replace,node-globals} autoprefixer
import babel from 'rollup-plugin-babel';
import globals from 'rollup-plugin-node-globals';
import postcss from 'rollup-plugin-postcss';
import replace from 'rollup-plugin-replace';
import html from 'rollup-plugin-generate-html-template';

export default {
  input: 'src/index.js',
  output: {
    file: 'build/index.js',
    format: 'iife',
  },
  plugins: [
    babel({
      exclude: ['node_modules/**', 'src/**/*.css'],
    }),
    postcss({
      plugins: [
        require('postcss-import'),
      ]
    }),
    globals(),
    replace({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    html({
      template: 'src/index.html',
      target: 'build/index.html',
    }),
  ],
};
