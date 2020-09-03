import replace from '@rollup/plugin-replace';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import html from '@rollup/plugin-html';
import scss from 'rollup-plugin-scss';
import { terser } from 'rollup-plugin-terser';
import livereload from 'rollup-plugin-livereload';
import { readFileSync } from 'fs';
import { join } from 'path';
import typescript from 'rollup-plugin-typescript2';
import { config as envConfig } from 'dotenv';
import json from '@rollup/plugin-json';
import copy from 'rollup-plugin-copy';

envConfig();

let isProd = false;
if (process.env.NODE_ENV === 'production') isProd = true;
const extensions = ['.js', '.ts', '.tsx'];

export default {
  input: join("src", "mounter.tsx"),
  output: {
    file: join("public", "bundle.js"),
    format: 'cjs',
  },
  plugins: [
    copy({
      targets: [
        { src: 'assets/*', dest: 'public/assets' }
      ]
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify(isProd ? 'production' : 'development'),
    }),
    resolve({
      extensions,
    }),
    commonjs({
      include: /node_modules/,
    }),
    json(),
    typescript(),
    babel({
      extensions,
      exclude: /node_modules/,
      babelrc: false,
      babelHelpers: "runtime",
      presets: [
        '@babel/preset-env',
        '@babel/preset-react',
        '@babel/preset-typescript',
      ],
      plugins: [
        'react-require',
        '@babel/plugin-syntax-dynamic-import',
        '@babel/plugin-proposal-class-properties',
        ['@babel/plugin-proposal-object-rest-spread', {
          useBuiltIns: true,
        }],
        ['@babel/plugin-transform-runtime', {
          corejs: 3,
          helpers: true,
          regenerator: true,
          useESModules: false,
        }],
      ],
    }),
    html({
      fileName: 'index.html',
      title: 'Commie',
      template: ({ title }) => {
        const file = readFileSync(join("src", "index.html"));
        return file.toString().replace(/\{\{ title \}\}/g, title);
      },
    }),
    scss({
      output: 'public/style.css',
    }),
    (isProd && terser()),
    (!isProd && livereload({
      watch: 'public',
    })),
  ]
};