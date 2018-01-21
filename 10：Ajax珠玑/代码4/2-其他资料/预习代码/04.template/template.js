var $_fox = {
  // 模板引擎   
  // 实现了 定义模板文本,传入对象 替换文本中的内容 返回结果
  template:function(templateStr,obj){
      // 正则表达式
          var reg = /<%=\s*([^%>]+\S)\s*%>/;
          // 匹配
          var result;
         while(result = reg.exec(templateStr)){
          // 匹配的 文本
          var matchString = result[0];
          // 匹配的 =号 之后的 字母
          var matchWord = result[1];
          // 使用 字符串的replace 进行替换
          templateStr = templateStr.replace(matchString, obj[matchWord]);
         }
         return templateStr;
  }
}

