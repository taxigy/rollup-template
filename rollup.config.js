// rollup-plugin-{babel,postcss,node-resolve,replace,node-globals} autoprefixer
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import globals from 'rollup-plugin-node-globals';
import html from 'rollup-plugin-generate-html-template';
import postcss from 'rollup-plugin-postcss';
import replace from 'rollup-plugin-replace';
import resolve from 'rollup-plugin-node-resolve';

export default {
  input: 'src/index.js',
  output: {
    file: 'build/index.js',
    format: 'iife',
  },
  plugins: [
    resolve({
      jsnext: true,
      main: true,
    }),
    commonjs({
      include: 'node_modules/**',
    }),
    babel({
      exclude: ['node_modules/**', 'src/**/*.css'],
      presets: ['react-app'],
    }),
    postcss({
      modules: true,
      plugins: [require('precss'), require('postcss-import')],
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
