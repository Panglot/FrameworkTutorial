
var canvas=document.getElementById("ourCanvas");

canvas.width         = document.body.clientWidth;
canvas.height        = document.body.clientHeight;
canvas.style.width   = canvas.width + "px";
canvas.style.height  = canvas.height + "px";

var ctx              = canvas.getContext('2d');

//var rect = new Rectangle(250, 150, 100, 100);
////rect.color=new Color(160,160,255,1);
//var rectRed1 = new Rectangle(150, 50, 80, 300);
//rectRed1.color=new Color(255,100,100,1);
//var rectRed2 = new Rectangle(770, 50, 80, 300);
//rectRed2.color=new Color(255,100,100,1);

//
//var movingX=-10;

var anim = new Animation(16, 16, 0, 0, 8, "mario.png", 12, 4, 5);
anim.position.Set(50,50);

setInterval(function()
{
    if(input.d)
        anim.SetRow(0);
    else if (input.a);
        anim.SetRow(2);

    if(input.a)
        anim.position.Move(new Vector2(-1,0));
    else if(input.d)
        anim.position.Move(new Vector2(1,0));
    else if(input.w)
        anim.position.Move(new Vector2(0,-1));
    else if(input.s)
        anim.position.Move(new Vector2(0,1));
    anim.Update();

}, 1);





setInterval(function()
    {
        ctx.clearRect(0,0,canvas.width, canvas.height);

        anim.Draw(ctx);
//        rectRed1.Draw(ctx);
//        rectRed2.Draw(ctx);


//        if(anim.Intersects(rectRed1) || anim.Intersects(rectRed2))
//        {
//            movingX*= -1;
//            if(movingX>0);
//            movingX+=0.5;
//            if(movingX<0)
//                movingX-=0.5;
//            if(movingX>=20)
//                movingX/=2;
//            else if(movingX<=-20)
//                movingX/=-2;
//        }
//        anim.position.x+=movingX;



    }, 33);