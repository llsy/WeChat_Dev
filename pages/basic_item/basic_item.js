//basic_item.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: '你好',
    userInfo: {},
    allitemname:[
      {title:"视图容器",array:[{name: 'View'}, 
                              {name: 'Scroll_View'},
                              {name: 'Swiper'}]},
      {title:"基础内容",array:[{name: 'Icon'}, 
                              {name: 'Text'},
                              {name: 'Progress'}]},
      {title:"表单组件",array:[{name: 'Button'}, 
                              {name: 'Checkbox'},
                              {name: 'Form'},
                              {name: 'Input'},
                              {name: 'Label'},
                              {name: 'Picker'},
                              {name: 'Radio'},
                              {name: 'Slider'},
                              {name: 'Switch'}]},
      {title:"操作反馈",array:[{name: 'Action-sheet'}, 
                              {name: 'Modal'},
                              {name: 'Toast'},
                              {name: 'Loading'}]},
      {title:"导航",array:[{name: 'Navigator'}]},
      {title:"媒体组件",array:[{name: 'Audio'}, 
                              {name: 'Image'},
                              {name: 'Video'},]},
      {title:"地图",array:[{name: 'Map'}]},
      {title:"画布",array:[{name: 'Canvas'}]},                        
    ],
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  bindView: function() {
    wx.navigateTo({
      url: '../basic_item/itemView/itemView'
    })
  },
  bindScroll_View: function() {
    wx.navigateTo({
      url: '../basic_item/itemView/itemScroll-View'
    })
  },
  bindSwiper: function() {
    wx.navigateTo({
      url: '../basic_item/itemView/itemSwiper'
    })
  },
  bindText: function() {
    wx.navigateTo({
      url: '../basic_item/itemBasic/itemText'
    })
  },
  bindIcon: function() {
    wx.navigateTo({
      url: '../basic_item/itemBasic/itemIcon'
    })
  },
  bindProgress: function() {
    wx.navigateTo({
      url: '../basic_item/itemBasic/itemProgress'
    })
  },
  bindButton: function() {
    wx.navigateTo({
      url: '../basic_item/itemForm/itemButton'
    })
  },
  bindCheckbox: function() {
    wx.navigateTo({
      url: '../basic_item/itemForm/itemCheckbox'
    })
  },
  bindForm: function() {
    wx.navigateTo({
      url: '../basic_item/itemForm/itemForm'
    })
  },
  bindInput: function() {
    wx.navigateTo({
      url: '../basic_item/itemForm/itemInput'
    })
  },
  bindLabel: function() {
    wx.navigateTo({
      url: '../basic_item/itemForm/itemLabel'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
