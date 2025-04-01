// test
<ul>
{zombieFighters.map((fighter) => (
  <li>
    <img src={fighter.img} />
    <h3>{fighter.name}</h3>
    <p><span>Price: </span>{fighter.price}</p>
    <p><span>Strength: </span>{fighter.strength} </p>
    <p><span>Agility: </span>{fighter.agility} </p>
    <button onClick={() => handleRemoveFighter(fighter)}>Remove</button>
  </li>

))}
</ul>


const totalStrength = team.reduce((accumulator,fighter) => {
  return accumulator +=fighter.price
})

const totalAgility = team.reduce((accumulator, fighter) => {
  return accumulator += fighter.agility
}, 0)



const handleAddFighter = (fighter) => {
  if (fighter.price > money) {
    return console.log("not enough money")
  } else {
    setTeam([...team, fighter]);
    setMoney(money - fighter.price);
    removeFighter(fighter.id);

  }
}


<ul>
{team.map((fighter) => (
  <li>
    <img src={fighter.img} />
    <h3>{fighter.name}</h3>
    <p><span>Price: </span>{fighter.price}</p>
    <p><span>Strength: </span>{fighter.strength} </p>
    <p><span>Agility: </span>{fighter.agility} </p>
    <button onClick={() => handleRemoveFighter(fighter)}>Remove</button>
  </li>
))}
</ul>


