const throttle = (f, time) => {
  let timer = null;
  return (...args) => {
    if (timer) {
      return;
    }
    f.apply(undefined, args);
    timer = setTimeout(() => {
      timer = null;
    }, time);
  };
};
//经常用在用户频繁点击按钮，如每五秒钟点一次抢购

const debounce = (f, time) => {
  let timer = null;
  return (...args) => {
    if (timer) {
      clearTimeout(timer); //打断回城
    }
    //重新回城
    timer = setTimeout(() => {
      f.apply(undefined, args);
      timer = null;
    }, time);
  };
};
//页面修改大小的时候，重新定位，每次拖动打断，拖动结束停留3秒后就resize
//搜索框打字停止一两秒时候才开始提前搜索关键词