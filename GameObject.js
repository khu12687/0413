/*이 객체는 게임에 등장할 모든 오브젝트들의 최상위 객체이다!!
따라서 내용은 추상적일 수 밖에 없다!!
이 객체를 상속받는 하위 객체들은, 이 객체가 보유한 속성과 메서들을 마치
자기것처럼 접근할 수 있을 것이다!! 그래서 얻는것은
자식 클래스에서 중복된 코드를 작성하지 않아도된다!! 코드의 재사용
개발시간이 단축되고 돈으로 연결된다..
모든 객체지향 언어에서 통일된 명칭!!
주의!!!
객체지향 언어에서는 부모클래스를 parent라 하지 않고 Super라고한다
Parent 단어는 GUI프로그래밍시 특정요소를 포함한 바깥쪽 컨테이너를 지칭함
우리의 경우 자바스크립트이므로 주로 특정 엘리먼트를 포함한 div같은 경우가 바로
parent!!
참고 자식은?? sub 
GUI분야에서는 child*/
class GameObject{
    constructor(container,src,width,height,velX,velY,x,y){
        //아래와 같이 클래스에 소속된 변수를 가리켜 속성(=Property)
        this.container=container; //객체가 붙여질 parent 컨테이너
        this.img;
        this.src=src;
        this.width=width;
        this.height=height;
        this.velX=velX;
        this.velY=velY;
        this.x=x;
        this.y=y;
        this.g=0.6; //중력가속도!!
        this.scaleX=-1;

        //스타일시트 적용~~
        this.img=document.createElement("img");
        this.img.src=this.src;
        this.img.style.width=this.width+"px";
        this.img.style.height=this.height+"px";

        this.img.style.position="absolute";
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";

        //Parent 인 container에 부착!!
        this.container.appendChild(this.img);
    }

    //물리량 변화값 설정
    //객체의 유형이 너무나 다양하기 떄문에, 현재시점에서는 그내용을 
    // 즉 미래에 태어날 자식의 메서드 내용을 알수가 없다
    // 따라서 C#,java와 같은 객체지향에서는 최상위 객체가 보유한 메서드의 내용을
    //확정지을수 없을떄 추상메서드란 메서드 정의 기법을 지원한다
    // 하지만 자바스크립트에서는 추상메서드가 없다..(아쉽..)
    tick(){}
    render(){}
}