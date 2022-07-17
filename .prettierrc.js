module.exports = {
  useTabs: false, // 使用tab缩进还是空格缩进，选择false(制表符)
  tabWidth: 2, // tab是空格的情况下，是几个空格，选择两个
  printWidth: 100, // 当行字符的长度，推荐80，也有人喜欢100或120，我这里使用100
  singleQuote: true, // 是否适用单引号，选择true适用单引号，false为双引号
  trailingComma: 'none', // 在多行输入的尾逗号是否添加，设置为none
  semi: true // 语句末尾是否要加分号，默认值true，选择false表示不加
};

// vscode中保存文件后prettier格式化代码无效的解决办法：https://www.jianshu.com/p/aeb49fe2031e

// json格式的写法，文件名不加后缀默认JSON格式，即.prettierrc
/* {
  "useTabs": false,
  "tabWidth": 2,
  "printWidth": 80,
  "singleQuote": true,
  "trailingComma": "none",
  "semi": true,
} */
