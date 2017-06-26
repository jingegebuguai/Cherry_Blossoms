# Cherry_Blossoms
jquery实现web页面樱花坠落的特效

## 开发原因
- 上课看到一位女生桌面背景是一课樱花树，顿时产生了一个让樱花可以在web页面飞舞的想法；
- 开发过焦点图，轮转图，瀑布流等应用插件，但是这类型插件还是第一次做，那个啥兴趣使然对吧；
## 开发工具
- Jquery+webstorm,无需额外配置任何环境，移动端无法使用

## 效果演示
为了更加显眼，背景换成了黑色,gif图有些卡顿，实际效果比较流畅
![image](https://github.com/jingegebuguai/Cherry_Blossoms/blob/master/yinghua.gif)

## 使用方法
- 在需要加入效果的页面加入html代码,位置最好放在body元素下第一个标签

 ```
  <div class="cherry">
    <img id="yinghua" src="../image/yinghua.png" alt="" >
  </div>
 ```
 
- 导入一下js代码其中各变量可根据需要改变

  ```
  $(function(){
          $('.cherry').Cherry_Blossoms({
              is_Cherry:true,//是否生成樱花
              image_min:10,//花瓣最小宽度和高度
              image_max:50,//花瓣最大宽度和高度
              time_min:10000,//花瓣最快下坠时间
              time_max:20000,//花瓣最慢下坠时间
              interval:500//花瓣生成时间间隔
          })
      })
  ```
  
## js插件
- IIFE（立即执行匿名函数）
- $.extend(),扩展插件定义默认参数  
- randomNum（）设置[m,n]类型随机数
