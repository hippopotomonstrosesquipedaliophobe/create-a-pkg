import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import terser from '@rollup/plugin-terser';
import cleanup from 'rollup-plugin-cleanup';
import copy from 'rollup-plugin-copy';
import { external } from '@vvi/rollup-external';

export default {
  input: {
    index: './src/bin.ts', // 默认：聚合导出入口
  },
  output: ['es'].map(e => ({
    format: e, // ESM 模式
    entryFileNames: 'bin.js', // 打包文件名
    preserveModules: false, // 保留独立模块结构（关键）
    // preserveModulesRoot: 'src', // 保持 src 目录结构
    sourcemap: false, // 正式环境：关闭 source map
    // exports: 'named', // 导出模式
    dir: `dist/`,
  })),
  // 配置需要排除的包
  external: external({
    ignore: ['node:'],
    include: ['@vvi'],
  }),
  plugins: [
    resolve(),
    commonjs(),
    // 可打包 json 内容
    json(),
    typescript({}),
    // 去除无用代码
    cleanup(),
    terser({
      format: {
        comments: false, // 移除所有注释
      },
    }),
    copy({
      targets: [
        { src: ['README.md', 'LICENSE', 'CHANGELOG.md'], dest: 'dist' },
      ],
    }),
  ],
};
