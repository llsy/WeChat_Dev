//logs.js
var util = require('../../utils/util.js')
var app = getApp()
Page({
  data: {
    logs: [],
    userInfo:{}
  },
  bindViewTap: function() {
    wx.navigateBack()
  },
  onLoad: function () {
    var that = this
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        return util.formatTime(new Date(log))
      })
    })
  }
})
