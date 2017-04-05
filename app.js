const wechat = require('wechat')
const express = require('express')

const app = express()
const config = {
  token: 'wechat',
  appid: 'wxb71708e8fc08e734',
  encodingAESKey: 'RSmS09Xf7H2MzxhoGehEkeqwbCUjJu1wjsuPmQk8P7V',
};

// 在微信公众平台的开发->基本配置->URL(服务器地址)下填入该url
// eg:https://28718514.qcloud.la/wechat
app.use('/wechat', wechat(config, function (req, res, next) {
  // 微信输入信息都在req.weixin上
  // req.weixin = {
  //  ToUserName,
  //  FromUserName,
  //  CreateTime,
  //  MsgType,
  //  Content,
  //  MsgId,
  // }
  const message = req.weixin
  res.reply(message.Content)
  if (message.FromUserName === 'diaosi') {
    // 回复屌丝(普通回复)
    res.reply('hehe');
  } else if (message.FromUserName === 'text') {
    //你也可以这样回复text类型的信息
    res.reply({
      content: 'text object',
      type: 'text'
    });
  } else if (message.FromUserName === 'hehe') {
    // 回复一段音乐
    res.reply({
      type: "music",
      content: {
        title: "来段音乐吧",
        description: "一无所有",
        musicUrl: "http://mp3.com/xx.mp3",
        hqMusicUrl: "http://mp3.com/xx.mp3",
        thumbMediaId: "thisThumbMediaId"
      }
    });
  } else {
    // 回复高富帅(图文回复)
    res.reply([
      {
        title: '你来我家接我吧',
        description: '这是女神与高富帅之间的对话',
        picurl: 'http://nodeapi.cloudfoundry.com/qrcode.jpg',
        url: 'http://nodeapi.cloudfoundry.com/'
      }
    ]);
  }
}));

app.listen(8080, () => {
  console.log('服务已启动')
})