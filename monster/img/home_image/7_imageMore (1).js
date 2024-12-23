window.onload = () => {
    let canvas = document.querySelector('#canvas')
    context = canvas.getContext('2d')

    // 格線
    context.beginPath();
    let gap = 50
    if(canvas.width > canvas.height){
        range = canvas.width / gap
    }else{
        range = canvas.height / gap
    }
    for(let i = 0; i <= range; i++){
        let interval = i * gap
        // 水平線
        context.moveTo(           0, interval);
        context.lineTo(canvas.width, interval);
        // context.fillText(interval, 0, interval);
        
        // 垂直線
        context.moveTo(interval, 0);
        context.lineTo(interval, canvas.height);
        // context.fillText(interval, interval, 8);        
    }
    context.strokeStyle='rgba(0,0,0,0.3)';    
    // context.stroke(); 
    // =====

    // 1 常常需要 reload 才會出現所有圖片
    /*
    let pic1 = new Image()
    pic1.src = `../../images/cityscape.jpg`
    pic1.addEventListener('load', () => {
        context.drawImage(pic1, 0, 0, 1000, 800);
    })
    
    let pic2 = new Image()
    pic2.src = `../../images/Shinnosuke/Shinnosuke9.png`
    pic2.addEventListener('load', () => {
        context.drawImage(pic2, 0,   0, 250, 250);   // 左上
        context.drawImage(pic2, 0, 550, 250, 250);   // 左下
        context.drawImage(pic2, 750, 0, 250, 250);   // 右上
        context.drawImage(pic2, 750, 550, 250, 250);   // 右下
        context.drawImage(pic2, (1000 - 250) / 2, (800 - 250) / 2, 250, 250);   // 置中
    })
    */
   
    // 2
    pic1 = new Image()
    pic1.src = `../../images/cityscape.jpg`
    pic1.addEventListener('load', loadImage)
    
    pic2 = new Image()
    pic2.src = `../../images/Shinnosuke/Shinnosuke9.png`
    pic2.addEventListener('load', loadImage)
}

// function loadImage(){}      // 傳統函數
// const loadImage = () => {}  // IIFE + 箭頭函數
const loadImage = () => {
    context.globalAlpha=0.3;    
    context.drawImage(pic1, 0, 0, 1000, 800);

    context.globalAlpha=1;
    context.drawImage(pic2, 750, 550, 250, 250);   // 右下
}  