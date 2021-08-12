import React,{Component} from 'react';
import fat from'./Fat.jpeg';
import './Sports.css';
import carbohydrates from'./carbohydrates.JPEG';
import protein from './Protein.jpeg'
import vegetables from './Vegetable.jpeg'
import fruits from './Fruits.jpeg'
import exercise from './exercise.jpeg'
class FoodPyramid extends Component {
render(){
return(
<div>
<h1 className="shadow-5 mid-gray bg-lightest-blue ">The Healthy Pyramid </h1>
<div>
      
      <img src={carbohydrates} alt="logo" class="center" className="shadow-5"/>
    </div>
<div>
<h1 className="shadow-5 mid-gray bg-lightest-blue ">Carbohydrates</h1>
<h3 className="shadow-5 mid-gray bg-lightest-blue">Carbohydrates provide the most easily accessible energy source for your body. The other main sources of energy are protein and fats. However, carbohydrates are efficiently converted into glucose which will be used for energy. Glucose is used directly by your muscles and brain. Excess glucose is stored as glycogen in your muscles. Where a supply of glucose is not available, your muscles will burn fat as a source of energy.

</h3>
</div>
<div>
<div>
      <img src={fat} alt="logo" class="center shadow-5 w-5 hig"/>
    </div>
<div>
<h1 className="bg-lightest-blue mid-gray shadow-5">Fat</h1>
<h3 className="bg-lightest-blue mid-gray shadow-5" >Fat, any substance of plant or animal origin that is nonvolatile, insoluble in water, and oily or greasy to the touch. Fats are usually solid at ordinary temperatures, such as 25 °C (77 °F), but they begin to liquefy at somewhat higher temperatures. Chemically, fats are identical to animal and vegetable oils, consisting primarily of glycerides, which are esters formed by the reaction of three molecules of fatty acids with one molecule of glycerol.
Together with oils, fats comprise one of the three principal classes of foodstuffs, the others being proteins and carbohydrates. Nearly all cells contain these basic substances. Fat is sometimes called nature’s storehouse of energy because on a weight basis it contains more than twice as much energy as does carbohydrate or protein. It is probably as storehouses or depots of concentrated energy that fats appear in plant reproductive organs, such as pollen grains and seeds. It is this fat that humans recover from plants for use as food or in industry. The fat content of the nonreproductive tissue of plants is usually so low that recovery is impracticable. Yet much dietary fat comes from natural foodstuffs without being separated from the other plant materials with which it occurs. The proportion of fat in these foodstuffs varies from 0.1 percent in white potatoes to 70 percent in some nut kernels.</h3>
</div>
</div>
<div>
      <img src={protein} alt="logo" class="center shadow-5"/>
    </div>
<div>
<h1 className="bg-lightest-blue mid-gray shadow-5">Protein</h1>
<h3 className="bg-lightest-blue mid-gray shadow-5" >Proteins are large biomolecules and macromolecules that are comprised of one or more long chains of amino acid residues. Proteins perform a vast array of functions within organisms, including catalysing metabolic reactions, DNA replication, responding to stimuli, providing structure to cells and organisms, and transporting molecules from one location to another. Proteins differ from one another primarily in their sequence of amino acids, which is dictated by the nucleotide sequence of their genes, and which usually results in protein folding into a specific 3D structure that determines its activity.</h3>
</div>
<div>
      <img src={vegetables} alt="logo" class="center shadow-5"/>
    </div>
<div>
<h1 className="bg-lightest-blue mid-gray shadow-5">Vegetables</h1>
<h3 className="bg-lightest-blue mid-gray shadow-5" >Vegetables are parts of plants that are consumed by humans or other animals as food. The original meaning is still commonly used and is applied to plants collectively to refer to all edible plant matter, including the flowers, fruits, stems, leaves, roots, and seeds. An alternate definition of the term is applied somewhat arbitrarily, often by culinary and cultural tradition. It may exclude foods derived from some plants that are fruits, flowers, nuts, and cereal grains, but include savoury fruits such as tomatoes and courgettes, flowers such as broccoli, and seeds such as pulses.</h3>
</div>
<div>
      <img src={fruits} alt="logo" class="center shadow-5"/>
    </div>
<div>
<h1 className="bg-lightest-blue mid-gray shadow-5">Fruits</h1>
<h3 className="bg-lightest-blue mid-gray shadow-5" >Fruits are the means by which flowering plants (also known as angiosperms) disseminate their seeds. Edible fruits in particular have long propagated using the movements of humans and animals in a symbiotic relationship that is the means for seed dispersal for the one group and nutrition for the other; in fact, humans and many animals have become dependent on fruits as a source of food.[1] Consequently, fruits account for a substantial fraction of the world's agricultural output, and some (such as the apple and the pomegranate) have acquired extensive cultural and symbolic meanings.</h3>
</div>
<div>
      <img src={exercise} alt="logo" class="center shadow-5"/>
    </div>
<div>
<h1 className="bg-lightest-blue mid-gray shadow-5">Daily Exercise And Weight Control</h1>
<h3 className="bg-lightest-blue mid-gray shadow-5" >All types of exercises offer health benefits. Performing different types of exercises can expand the range of benefits even further. But it is important to remember that some exercise is better than none, and that most everyone can participate in some form of exercise safely.</h3>
<hr className="mw10  bw3 ba b--blue "/>
<br/>
<br/>
<h1 className="bg-blue  near-white shadow-5">Types of Exercise</h1>
<br/>
<h1 className="bg-blue  near-white shadow-5">Aerobic And Cardiovascular physical activity</h1>
<h3 className="bg-blue  near-white shadow-5" >These are activities that are intense enough and performed long enough to maintain or improve one’s heart and lung fitness. Examples: walking, jogging, dancing, bicycling, basketball, soccer, swimming</h3>
</div>
<h1 className="bg-blue  near-white shadow-5">Muscle-strengthening activity</h1>
<h3 className="bg-blue  near-white shadow-5" >This may be referred to as resistance training. These activities maintain or increase muscle strength, endurance, and power. Examples: weight machines, free weights, resistance elastic bands, Pilates, daily activities of living (lifting children, carrying groceries or laundry, climbing stairs)

</h3>
<h1 className="bg-blue  near-white shadow-5">Flexibility training</h1>
<h3 className="bg-blue  near-white shadow-5" >This may be referred to as stretching. It lengthens or flexes a skeletal muscle to the point of tension, and holds for several seconds to increase elasticity and range of motion around a joint. Improving flexibility can enhance the overall physical performance of other types of exercise. Examples: dynamic stretches performed with movement (yoga, tai chi), static stretches without movement (holding a pose for several seconds or longer), passive stretching (using an external force like a strap or wall to hold an elongated pose), and active stretching (holding a pose without an external force)
</h3>
<h1 className="bg-blue  near-white shadow-5">Balance training</h1>
<h3 className="bg-blue  near-white shadow-5" >These activities are intended to throw off one’s balance to improve body control and stability. They can help to prevent falls and other injuries. Examples: standing on one foot, walking heel-to-toe in a perfectly straight line, standing on a balance or wobble board.

</h3>
</div>

	);
}

}

export default FoodPyramid;