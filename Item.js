//버섯 등 아이템을 표현!!
class Item extends GameObject{
    constructor(container,src,width,height,velX,velY,x,y){
        super(container,src,width,height,velX,velY,x,y);
        this.count=0;
    }

    //버섯만의 움직임은 부모와는 틀리다! 따라서 부모의 메서드를 나한테 맞게끔
    //오버라이딩 하자 !! 메서드 재정의
    tick(){
        this.x+=this.velX;
       this.count++;
       if(this.count%100==0){
            this.velX=-this.velX;
       }
    }
    render(){
        this.img.style.left=this.x+"px";
    }
}