//코드의 중복을 피하기 위해 최상위 객체인 GameObject를 상속받자!!
class Mario extends GameObject{
    constructor(container,src,width,height,velX,velY,x,y){
        //내가 태어나기전에 부모가 먼저 존재해야 하므로, 어떠한 코드보다 부모의 생성자호출
        super(container,src,width,height,velX,velY,x,y);
        this.jump=false; //현재 점프중인지 여부를 판단하는 논리값..
        //마리오는 태어나자 마자 점프안한다 그래서 false 초기값
    }
    //상속시, 이미 부모가 정의한 메서드를 자식이 정의할때 어떻게될까?
    //이러한 메서드 정의기법을 오버라이딩이(Overriding)라 한다
    //이미 정의한 메서드를 중첩해서 정의한다고 하여 오버라이딩이라한다
    //왜 허용할까? 부모에게 이미 있는데 
    //부모가 가진 메서드가 나한테 맞지 않거나 현재시점에서 사용하기엔
    //무리가 있을떄, 또는 업그레이드가 필요할때 부모의 메서드와 동일한
    //메서드를 정의하면 자식메서드를 우선하여 호출!!
    tick(){
        this.x+=this.velX; //마리오 좌우 움직임 물리량

        //중력의 적용을 받게하자!!
        this.velY+=this.g;  //속도가 등속이 아닌 가속도가 됨..
                                  
        this.y+=this.velY;  //방향이 y축 방향이므로 중력가속도를 표현..

        //충돌체크!!(대상이 벽돌이다!) 1:多 관계
        for(var i=0; i<blocks.length;i++){
            var onBlock = collisionCheck(this.img,blocks[i].img);

            if(onBlock && this.jump==false){
                //마리오는 방금 부딪친 벽돌의 y축0에 서있되, 
                //마리오의 y축 -height 만큼 y축의 음수방향으로 올라가있게
                this.velY=0; //중력은 자연법칙이므로 손대면 안됨!
                this.y=blocks[i].y-this.height;
                
            }

            //점프후 this.jump 의 상태를 다시 false로 놓아야 위의 if문이 동작하게된다
            //즉 마리오의 점프가 끝나는 시점에 this.jump를 반대로 돌려놓자
            //중력에 못이겨 음수값이 양수로 전환되는 시점 == 꼭대기!!
            //this.velY=0 으로 음수에서 양수로 전환..
            if(this.velY>0){ //다시 떨어지는 시점..
                this.jump=false;
            }
        }
        //마리오의 y값이 화면을 넘어서면
        if(this.y>parseInt(this.container.style.height)){
            this.container.style.background="red";
            loopFlag=false;
        }
    }
    render(){
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";
        this.img.style.transform="scaleX("+this.scaleX+")";
    }
}
