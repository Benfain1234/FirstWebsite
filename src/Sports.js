import React,{Component} from 'react';
import football from'./football.jpeg';
import './Sports.css';
import basketball from'./basketball.png';
import tennis from './Tennis.jpeg'
import surfing from './Surfing.jpeg'
import Volleyball from './Volleyball.jpeg'
import Afootball from './Afootball.jpeg'
import Hockey from './Hocky.jpeg'
class Basketball extends Component {
constructor(){
    super();
    this.state={
       route: 'home'
      
       }
    }

render(){
if (this.state.route==='home') {return(

<div>
<div>
  <br/>
      <img src={basketball} alt="logo" class="center" className="shadow-5"/>
    </div>
<div>
<h1 className="shadow-5 gold bg-navy ">BASKETBALL</h1>
<h3 className="shadow-5 gold bg-navy">Basketball is a team sport in which two teams, most commonly of five players each, opposing one another on a rectangular court, compete with the primary objective of shooting a basketball (approximately 9.4 inches (24 cm) in diameter) through the defender's hoop (a basket 18 inches (46 cm) in diameter mounted 10 feet (3.048 m) high to a backboard at each end of the court) while preventing the opposing team from shooting through their own hoop. A field goal is worth two points, unless made from behind the three-point line, when it is worth three. After a foul, timed play stops and the player fouled or designated to shoot a technical foul is given one, two or three one-point free throws. The team with the most points at the end of the game wins, but if regulation play expires with the score tied, an additional period of play (overtime) is mandated.

</h3>
</div>
<div>
<div>
      <img src={football} alt="logo" class="center shadow-5 w-5 hig"/>
    </div>
<div>
<h1 className="bg-navy gold shadow-5">FOOTBALL</h1>
<h3 className="bg-navy gold shadow-5" >Football is a family of team sports that involve, to varying degrees, kicking a ball to score a goal. Unqualified, the word football normally means the form of football that is the most popular where the word is used. Sports commonly called football include association football (known as soccer in North America and Oceania); gridiron football (specifically American football or Canadian football); Australian rules football; rugby union and rugby league; and Gaelic football.[1] These various forms of football share to varying extent common origins and are known as football codes.f</h3>
</div>
</div>
<div>
      <img src={tennis} alt="logo" class="center shadow-5"/>
    </div>
<div>
<h1 className="bg-navy gold shadow-5">Tennis</h1>
<h3 className="bg-navy gold shadow-5" >Tennis is a racket sport that can be played individually against a single opponent (singles) or between two teams of two players each (doubles). Each player uses a tennis racket that is strung with cord to strike a hollow rubber ball covered with felt over or around a net and into the opponent's court. The object of the game is to manoeuvre the ball in such a way that the opponent is not able to play a valid return. The player who is unable to return the ball will not gain a point, while the opposite player will.</h3>
</div>
<div>
      <img src={surfing} alt="logo" class="center shadow-5"/>
    </div>
<div>
<h1 className="bg-navy gold shadow-5">Surfing</h1>
<h3 className="bg-navy gold shadow-5" >Surfing is a surface water sport in which an individual, a surfer (or two in tandem surfing), uses a board to ride on the forward section, or face, of a moving wave of water, which usually carries the surfer towards the shore. Waves suitable for surfing are primarily found on ocean shores, but can also be found in standing waves in the open ocean, in lakes, in rivers in the form of a tidal bore, or in wave pools.</h3>
</div>
<div>
      <img src={Volleyball} alt="logo" class="center shadow-5"/>
    </div>
<div>
<h1 className="bg-navy gold shadow-5">Volleyball</h1>
<h3 className="bg-navy gold shadow-5" >Volleyball is a team sport in which two teams of six players are separated by a net. Each team tries to score points by grounding a ball on the other team's court under organized rules.[1] It has been a part of the official program of the Summer Olympic Games since Tokyo 1964. Beach Volleyball was introduced to the programme at the Atlanta 1996. The adapted version of volleyball at the Summer Paralympic Games is sitting volleyball.</h3>
</div>
<div>
      <img src={Afootball} alt="logo" class="center shadow-5"/>
    </div>
<div>
<h1 className="bg-navy gold shadow-5">American football</h1>
<h3 className="bg-navy gold shadow-5" >American football, referred to simply as football in the United States and Canada and also known as gridiron,[nb 1] is a team sport played by two teams of eleven players on a rectangular field with goalposts at each end. The offense, the team with possession of the oval-shaped football, attempts to advance down the field by running with the ball or passing it, while the defense, the team without possession of the ball, aims to stop the offense's advance and to take control of the ball for themselves. The offense must advance at least ten yards in four downs or plays; if they fail, they turn over the football to the defense, but if they succeed, they are given a new set of four downs to continue the drive. Points are scored primarily by advancing the ball into the opposing team's end zone for a touchdown or kicking the ball through the opponent's goalposts for a field goal. The team with the most points at the end of a game wins.</h3>
</div>
<div>
      <img src={Hockey} alt="logo" class="center shadow-5"/>
    </div>
<div>
<h1 className="bg-navy gold shadow-5">Hockey</h1>
<h3 className="bg-navy gold shadow-5" >Hockey is a sport in which two teams play against each other by trying to manoeuvre a ball or a puck into the opponent's goal using a hockey stick. There are many types of hockey such as bandy, field hockey, ice hockey and rink hockey.</h3>
</div>
</div>

	);}

			
	
}
}

export default Basketball;