---
home: true
heroImage: /images/photo.png
actionText: 最新更新ღ
actionLink: guide.html
---
---
> 只有透彻地认识到，某件事情是自己一生都避不开、逃不掉的，才有动力坚持做好它。

<style type="text/css">
.home .hero .description{
  max-width: 40rem;
}
.home .hero img{
  width: 300px;
  height: 300px;
  border-radius: 50%;
  transition: transform 2s ease-in-out;
  transform: rotateZ(0deg);
}
.home .hero img:hover{
  transform: rotateZ(360deg);
}
.description{
   background-image: -webkit-linear-gradient(left, #3498db, #f47920 10%, #d71345 20%, #f7acbc 30%,
            #ffd400 40%, #3498db 50%, #f47920 60%, #d71345 70%, #f7acbc 80%, #ffd400 90%, #3498db);
   border: none;
   color: transparent; /*文字填充色为透明*/
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;          /*背景剪裁为文字，只将文字显示为背景*/
    background-size: 200% 100%;            /*背景图片向水平方向扩大一倍，这样background-position才有移动与变化的空间*/
    /* 动画 */
    animation: masked-animation 4s infinite linear;
}
@keyframes masked-animation {
    0% {
        background-position: 0 0;   /*background-position 属性设置背景图像的起始位置。*/
    }
    100% {
        background-position: -100% 0;
    }
}
</style>
