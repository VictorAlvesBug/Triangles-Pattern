let initialAngle = 0;

function setup()
{
	createCanvas(600, 600);
}

function draw()
{
	background(0);

	if(initialAngle%TWO_PI < PI)
	{
		background(0);
		fill(255);
		noStroke();

		for(let i=0; i<20; i++)
		{
			for(let j=0; j<20; j++)
			{
				let triangleSide = 50;
				let triangleHeight = triangleSide * (sqrt(3)/2);
				drawTriangle(-50+triangleSide*i, -50+triangleHeight*j, triangleSide, 1);
			}	
		}
	}
	else
	{
		background(255);
		fill(0);
		noStroke();

		for(let i=0; i<20; i++)
		{
			for(let j=0; j<20; j++)
			{
				let triangleSide = 50;
				let triangleHeight = triangleSide * (sqrt(3)/2);
				drawTriangle(-50+triangleSide/2 + triangleSide*i, -50+triangleHeight/3 + triangleHeight*j, triangleSide, 2);
			}	
		}
	}

	initialAngle+=0.01;
}

function drawTriangle(px, py, triangleSide, mode)
{
	//triangleRadius = (2/3) * triangleHeight
	let triangleHeight = triangleSide * (sqrt(3)/2);
	let triangleRadius = (2/3) * triangleHeight;

	if(mode == 1)
	{
		beginShape();
		for (let ang=initialAngle+PI/2; ang<TWO_PI+initialAngle; ang+=TWO_PI/3)
		{
			vertex(px+triangleRadius*cos(ang), py+triangleRadius*sin(ang));
		}
		endShape();
	}
	else
	{
		beginShape();
		for (let ang=initialAngle+3*PI/2; ang<TWO_PI+initialAngle+PI; ang+=TWO_PI/3)
		{
			vertex(px+triangleRadius*cos(ang), py+triangleRadius*sin(ang));
		}
		endShape();
	}
}