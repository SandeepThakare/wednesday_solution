module.exports = {
  plugins: [
    [
      'import',
      { libraryName: 'ant-design-vue', libraryDirectory: 'es', style: true },
    ],
    '@babel/plugin-syntax-dynamic-import',
  ],
};
