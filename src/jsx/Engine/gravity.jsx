import React from 'react';

import Controls from '../UI/controls.jsx'

class Gravity extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            gravityX: 0,
            gravityY: 0,
            rendered: false,
            Engine: Matter.Engine,
            Render: Matter.Render,
            World: Matter.World,
            Bodies: Matter.Bodies,
            Body: Matter.Body,
            engine: null
        }
    }

    componentDidMount(){
        // module aliases

// create an engine

        var engine = this.state.Engine.create();
        this.setState({
            engine: engine
        });
// Renderer(canvas)
        var render = this.state.Render.create({
            element: document.body,
            engine: engine,
            options: {
                width: 1400,
                height: 1000,
                background: '#366b31',
                wireframes: false
            }
        });


// Elements

        //Borders

        var borderTop = this.state.Bodies.rectangle(700, 10, 1400, 40, {isStatic: true}),
            borderLeft = this.state.Bodies.rectangle(10, 410, 40, 1400, {isStatic: true}),
            borderRight = this.state.Bodies.rectangle(1390, 410, 40, 1400, {isStatic: true}),
            borderBottom = this.state.Bodies.rectangle(700, 990, 1400, 40, {isStatic: true});

        //Game Elements

        var boxA = this.state.Bodies.rectangle(400, 200, 80, 80),
            boxB = this.state.Bodies.rectangle(450, 50, 80, 80),
            circleA = this.state.Bodies.circle(100, 10, 30, {
            render:{
                fillStyle: 'gold'
            }
        });

        //Map

        var wallOne = this.state.Bodies.rectangle(100, 150, 300, 40, {isStatic: true, render:{ fillStyle: 'black'}}),
            wallTwo = this.state.Bodies.rectangle(400, 150, 40, 450, {isStatic: true, render:{ fillStyle: 'black'}}),
            wallThree = this.state.Bodies.rectangle(250, 355, 280, 40, {isStatic: true, render:{ fillStyle: 'black'}}),
            wallFour = this.state.Bodies.rectangle(130, 405, 40, 350, {isStatic: true, render:{ fillStyle: 'black'}}),
            wallFive = this.state.Bodies.rectangle(130, 850, 40, 350, {isStatic: true, render:{ fillStyle: 'black'}}),
            wallSix = this.state.Bodies.rectangle(400, 420, 40, 220, {isStatic: true, render:{ fillStyle: 'black'}}),
            crossroadsOne = this.state.Bodies.rectangle(324, 570, 10, 190, {isStatic: true, render:{ fillStyle: 'black'}}),
            crossroadsTwo = this.state.Bodies.rectangle(292, 698, 10, 190, {isStatic: true, render:{ fillStyle: 'black'}}),
            wallSeven = this.state.Bodies.rectangle(320, 780, 200, 40, {isStatic: true, render:{ fillStyle: 'black'}}),
            wallEight = this.state.Bodies.rectangle(620, 870, 40, 210, {isStatic: true, render:{ fillStyle: 'black'}}),
            wallNine = this.state.Bodies.rectangle(450, 665, 10, 290, {isStatic: true, render:{ fillStyle: 'black'}});
            // wall = this.state.Bodies.rectangle(450, 665, 10, 290, {isStatic: true, render:{ fillStyle: 'black'}});



        boxA.render.fillStyle = 'black';
        boxB.render.fillStyle = 'white';
        borderLeft.render.fillStyle = 'black';
        borderTop.render.fillStyle = 'black';
        borderRight.render.fillStyle = 'black';
        borderBottom.render.fillStyle = 'black';
        this.state.Body.rotate(crossroadsOne, 1);
        this.state.Body.rotate(crossroadsTwo, -0.5);
        this.state.Body.rotate(wallNine, -0.5);

// Creating Elements

        this.state.World.add(engine.world, [boxA, boxB, circleA, borderTop, borderLeft, borderBottom, borderRight]);

        //Creating the maze

        this.state.World.add(engine.world, [wallOne, wallTwo, wallThree, wallFour, wallFive, wallSix, wallSeven, wallEight, crossroadsOne, crossroadsTwo, wallNine]);
//Gravity

        engine.world.gravity.x = this.state.gravityX;
        engine.world.gravity.y = this.state.gravityY;

// run the engine

        this.state.Engine.run(engine);


// run the renderer

        this.state.Render.run(render);

    }
    
    render() {


// Gravity Changer Events and return

        // this.engine.world.gravity.x = this.state.gravityX;
        // this.engine.world.gravity.y = this.state.gravityY;
        // Matter.render();

        return(
            <div>
                <Controls handleGravity={this.gravOutputUpdate} valueY={this.state.gravityY} valueX={this.state.gravityX} />
            </div>
        )
    }

    gravOutputUpdate = (axis, val) => {
        this.state.engine.world.gravity[axis] = val;
        console.log('works');
        if(axis === 'y') {
            this.setState({
                gravityY: val
            })
        }else{
            this.setState({
                gravityX: val
            })
        }
        console.log(axis, val)
    };

    handleGravityChangeX = (el) => {
        this.setState({
            gravityX: el
        });
    };

    handleGravityChangeY = (el) => {
        this.setState({
            gravityY: el
        });
    };

}

module.exports = Gravity;