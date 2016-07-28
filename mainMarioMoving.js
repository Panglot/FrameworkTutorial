
var canvas=document.getElementById("ourCanvas");

canvas.width         = document.body.clientWidth;
canvas.height        = document.body.clientHeight;
canvas.style.width   = canvas.width + "px";
canvas.style.height  = canvas.height + "px";

var ctx              = canvas.getContext('2d');



var anim = new Animation(16, 16, 0, 0, 8, "mario.png", 15, 4, 5, 30, 30);
anim.position.Set(200,200);
//var rect = new Rectangle(20, 20, 50, 50);
//rect.color = new Color(255, 0 ,255, 1);


setInterval(function()
{

//    if(input.d)
//        rect.x += 1.5;
//    else if (input.a)
//        rect.x -= 1.5;
//    else if (input.s)
//        rect.y += 1.5;
//    else if (input.w)
//        rect.y -= 1.5;

    var offset = 3;

    if(input.a || input.left) {
        anim.position.Move(new Vector2(-offset, 0));
        anim.Update();
        anim.SetRow(2);
    }
    if(input.d || input.right) {
        anim.position.Move(new Vector2(offset, 0));
        anim.Update();
        anim.SetRow(0);
    }
    if(input.w || input.up){
    anim.position.Move(new Vector2(0, -offset));
    anim.Update();
    }
    if(input.s || input.down){
        anim.position.Move(new Vector2(0, offset));
        anim.Update();
    }
    // anim.position.Move(new Vector2(0,2));

}, 15);





setInterval(function()
    {
        ctx.clearRect(0,0,canvas.width, canvas.height);

//        rect.Draw(ctx);
        anim.Draw(ctx);


    }, 20);