import React from 'react';

import Controls from '../UI/controls.jsx'

class Gravity extends React.Component{
    constructor(props){
        super(props);



        this.state = {
            gravityX: 0,
            gravityY: 0,
            Engine: Matter.Engine,
            Render: Matter.Render,
            World: Matter.World,
            Bodies: Matter.Bodies,
            Body: Matter.Body,
            engine: null,
            circle: null,
            win: null,
            time: 0,
            bestTime: this.loadData(),
            currentBestTime: null
        }

    }

    saveData(){
        localStorage.setItem('score',  JSON.stringify( {bestTime: this.state.bestTime} ) );
    }

    loadData(){
        let  score = JSON.parse( localStorage.getItem('score') );
        let bestTime = null;
        if(score){
            bestTime = score.bestTime;
        }
        // console.log(bestTime);
        return bestTime;
    }


    componentDidMount(){

// timer

        this.interval = setInterval(() =>{
           this.setState({
               time: this.state.time + 1
           })
        }, 1000);

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
                background: 'gray',
                wireframes: false
            }
        });


// Elements

        //Borders

        var borderTop = this.state.Bodies.rectangle(700, 10, 1400, 40, {isStatic: true}),
            borderLeft = this.state.Bodies.rectangle(10, 410, 40, 1400, {isStatic: true}),
            borderRight = this.state.Bodies.rectangle(1390, 410, 40, 1400, {isStatic: true}),
            borderBottom = this.state.Bodies.rectangle(700, 990, 1400, 40, {isStatic: true});

        //Map

        var endPoint = this.state.Bodies.rectangle(1360, 500, 20, 100, {isStatic: true, render:{fillStyle: 'white'}}),
            wall1 = this.state.Bodies.rectangle(100, 150, 300, 40, {isStatic: true, render:{ fillStyle: 'black'}}),
            wall2 = this.state.Bodies.rectangle(400, 150, 40, 450, {isStatic: true, render:{ fillStyle: 'black'}}),
            wall3 = this.state.Bodies.rectangle(250, 355, 280, 40, {isStatic: true, render:{ fillStyle: 'black'}}),
            wall4 = this.state.Bodies.rectangle(130, 405, 40, 350, {isStatic: true, render:{ fillStyle: 'black'}}),
            wall5 = this.state.Bodies.rectangle(130, 850, 40, 350, {isStatic: true, render:{ fillStyle: 'black'}}),
            wall6 = this.state.Bodies.rectangle(400, 420, 40, 220, {isStatic: true, render:{ fillStyle: 'black'}}),
            crossroadsOne = this.state.Bodies.rectangle(324, 570, 10, 190, {isStatic: true, render:{ fillStyle: 'black'}}),
            crossroadsTwo = this.state.Bodies.rectangle(292, 698, 10, 190, {isStatic: true, render:{ fillStyle: 'black'}}),
            wall7 = this.state.Bodies.rectangle(320, 780, 200, 40, {isStatic: true, render:{ fillStyle: 'black'}}),
            wall8 = this.state.Bodies.rectangle(620, 870, 40, 210, {isStatic: true, render:{ fillStyle: 'black'}}),
            wall9 = this.state.Bodies.rectangle(450, 665, 10, 290, {isStatic: true, render:{ fillStyle: 'black'}}),
            wall10 = this.state.Bodies.rectangle(605, 454.5, 10, 280, {isStatic: true, render:{ fillStyle: 'black'}}),
            wall11 = this.state.Bodies.rectangle(620, 620, 40, 130, {isStatic: true, render:{ fillStyle: 'black'}}),
            wall12 = this.state.Bodies.rectangle(740, 740, 40, 730, {isStatic: true, render:{ fillStyle: 'black'}}),
            wall13 = this.state.Bodies.rectangle(490, 180, 20, 190, {isStatic: true, render:{ fillStyle: 'black'}}),
            wall14 = this.state.Bodies.rectangle(680, 330, 20, 160, {isStatic: true, render:{ fillStyle: 'black'}}),
            wall15 = this.state.Bodies.rectangle(480, 70, 20, 210, {isStatic: true, render:{ fillStyle: 'black'}}),
            wall16 = this.state.Bodies.rectangle(700, 245, 20, 220, {isStatic: true, render:{ fillStyle: 'black'}}),
            wall17 = this.state.Bodies.rectangle(800, 214, 20, 120, {isStatic: true, render:{ fillStyle: 'black'}}),
            wall18 = this.state.Bodies.rectangle(620, 70, 20, 220, {isStatic: true, render:{ fillStyle: 'black'}}),
            wall19 = this.state.Bodies.rectangle(790, 320, 20, 180, {isStatic: true, render:{ fillStyle: 'black'}}),
            wall20 = this.state.Bodies.rectangle(935, 290, 40, 1200, {isStatic: true, render:{ fillStyle: 'black'}}),
            wall21 = this.state.Bodies.rectangle(1035, 700, 40, 1200, {isStatic: true, render:{ fillStyle: 'black'}}),
            wall22 = this.state.Bodies.rectangle(1135, 290, 40, 1200, {isStatic: true, render:{ fillStyle: 'black'}}),
            wall23 = this.state.Bodies.rectangle(1235, 700, 40, 1200, {isStatic: true, render:{ fillStyle: 'black'}}),
            wall24 = this.state.Bodies.rectangle(1345, 430, 60, 40, {isStatic: true, render:{ fillStyle: 'black'}}),
            wall25 = this.state.Bodies.rectangle(1345, 570, 60, 40, {isStatic: true, render:{ fillStyle: 'black'}});



        borderLeft.render.fillStyle = 'black';
        borderTop.render.fillStyle = 'black';
        borderRight.render.fillStyle = 'black';
        borderBottom.render.fillStyle = 'black';
        this.state.Body.rotate(crossroadsOne, 1);
        this.state.Body.rotate(crossroadsTwo, -0.5);
        this.state.Body.rotate(wall9, -0.5);
        this.state.Body.rotate(wall10, 1);
        this.state.Body.rotate(wall13, -0.9);
        this.state.Body.rotate(wall14, -0.9);
        this.state.Body.rotate(wall15, -0.9);
        this.state.Body.rotate(wall16, -0.9);
        this.state.Body.rotate(wall17, -0.9);
        this.state.Body.rotate(wall18, -0.9);
        this.state.Body.rotate(wall19, 0.6);



//Game Elements

        var circleA = this.state.Bodies.circle(100, 10, 30, {
            render:{
                fillStyle: 'white'
            }
        });
        this.setState({
            circle: circleA,
            win: borderLeft
        });

// Creating Elements

        this.state.World.add(engine.world, [circleA, borderTop, borderLeft, borderBottom, borderRight]);

        //Creating the maze

        this.state.World.add(engine.world, [wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall10, wall11, crossroadsOne, crossroadsTwo, wall9]);
        this.state.World.add(engine.world, [wall12, wall13, wall14, wall15, wall16, wall17, wall18, wall19, wall20, wall21, wall22, wall23, wall24, wall25, endPoint]);

//Gravity

        engine.world.gravity.x = this.state.gravityX;
        engine.world.gravity.y = this.state.gravityY;

//Events
        Matter.Events.on(engine, 'collisionStart', (event) => {
            var pairs = event.pairs;
            for(var i=0; i<pairs.length; i++){
                var pair = pairs[i];
                if(pair.bodyA === endPoint && pair.bodyB === circleA){
                    this.state.Body.setPosition(circleA, {x: 100, y: 15});
                    console.log('you win');
                    if(this.state.time < this.state.bestTime || this.state.bestTime == null){
                        this.setState({
                            bestTime: this.state.time
                        }, ()=>this.saveData())
                    }
                    if(this.state.time < this.state.currentBestTime || this.state.currentBestTime == null){
                        this.setState({
                            currentBestTime: this.state.time
                        })
                    }
                    this.setState({
                        time: 0
                    });
                }
            }
        });

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
                <div>Time: {this.state.time}</div> <div>Highscore: {this.state.bestTime}</div> <div> Your best: {this.state.currentBestTime}</div>
            </div>
        )
    }

    gravOutputUpdate = (axis, val) => {
        this.state.engine.world.gravity[axis] = val;
        if(axis === 'y') {
            this.setState({
                gravityY: val
            })
        }else{
            this.setState({
                gravityX: val
            })
        }
    };
}

module.exports = Gravity;