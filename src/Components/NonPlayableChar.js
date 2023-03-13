import React from "react";
import { useState } from "react";
import PersonDetail from "./PersonDetail";

export const localNpc = [
  {
    id: 1,
    nameNpc: "Abigail",
    pictures: "Abigail_Neutral.png",
    loves:
      "Loves: amethyst, banana pudding, blackberry cobbler, chocolate cake, pumpkin, pufferfish, spicy eel",
    hates: "Hates: clay, holly",
    description:
      "Abigail is an adventurous soul and a fan-favorite marriage candidate. She is in Sam and Sebastian's band and is a fantastic drummer and flute player. She isn't too fond of the domestic life and spends her time exploring the valley.",
  },
  {
    id: 2,
    nameNpc: "Alex",
    pictures: "Alex.png",
    loves: "Loves: complete breakfast, salmon dinner",
    hates: "Hates: holly, quartz",
    description:
      "Alex is the town jock who lives with his grandparents. He has a tragic backstory of having a broken home. His mother is deceased and Alex hates his abusive, alcoholic father. Alex hopes he can have the family life he missed out on growing up.",
  },
  {
    id: 3,
    nameNpc: "Elliot",
    pictures: "Elliott.png",
    loves:
      "Loves: pomegranate, crab cakes, lobster, tom kha soup, duck feather, squid ink ",
    hates: "Hates: amaranth, quartz, salmonberry, sea cucumber",
    description:
      "Elliot is a writer who lives on the beach. Like Leah, he left the city to focus on writing his novels. He is very eloquent and often has some very dramatic conversations.",
  },
  {
    id: 4,
    nameNpc: "Emily",
    pictures: "Emily.png",
    loves:
      "Loves: amethyst, aquamarine, emerald, jade, ruby, topaz, cloth, wool, survival burger",
    hates: "Hates: fish taco, maki roll, salmon dinner, sashimi, holly",
    description:
      "Emily is a waitress at the Stardrop Saloon. She loves everything crystals and is an excellent tailer and cook. She lives with her sister Haley and is good friends with Sandy from Calico Desert. ",
  },
  {
    id: 5,
    nameNpc: "Haley",
    pictures: "Haley.png",
    loves: "Loves: coconut, fruit salad, pink cake, sunflower ",
    hates: "Hates: clay, prismatic shard, wild horseradish ",
    description:
      "Haley is good friends with Alex. Haley can come across as mean and snobbish. This makes her a difficult person to romance. She has a deep passion of photography.",
  },
  {
    id: 6,
    nameNpc: "Harvey",
    pictures: "Harvey.png",
    loves: "Loves: coffee, pickles, super meal, truffle oil, wine",
    hates:
      "Hates: coral, nautilus shell, rainbow shell, salmonberry, spice berry",
    description:
      "Harvey is the awkward town doctor. When not offering his services in the town clinic, he spends his time at the Stardrop Saloon. His sweet and shy personality makes for a genuine, low drama romance. ",
  },
  {
    id: 7,
    nameNpc: "Leah",
    pictures: "Leah.png",
    loves:
      "Loves: goat cheese, poppyseed muffin, salad, stir fry, truffle, vegetable medley, wine",
    hates: "Hates: bread, hashbrowns, pancakes, pizza, void eggs",
    description:
      "Leah is an affectionate artist. She moved to town to get in touch with her creative side. She can be seen all around the  valley sculpting and painting whatever her heart desires. She is good friends with Elliot. ",
  },
  {
    id: 8,
    nameNpc: "Maru",
    pictures: "Maru.png",
    loves:
      "Loves: battery pack, diamond, gold bar, iridium bar, radioactive bar, cauliflower, cheese cauliflower, miner's treat, pepper poppers, rhubarb pie, strawberry",
    hates: "Hates: holly, honey, snow yam, pickles, truffle",
    description:
      "Maru is Sebastian's half-sister. She shares her father's interest in science and works with Harvey at the clinic. She enjoys observing the night sky from her telescope. ",
  },
  {
    id: 9,
    nameNpc: "Penny",
    pictures: "Penny.png",
    loves:
      "Loves: diamond, emerald, melon, poppy, poppyseed muffin, red plate, roots platter, tom kha soup, sandfish",
    hates:
      "Hates: beer, grapes, hops, mead, pale ale, pina colada, wine, rabbit's foot, holly",
    description:
      "Penny is Pam's quiet daughter. She is the local school teacher and spends most of her days tutoring Vincent and Jas at the library. She loves books and has a passion for education. ",
  },
  {
    id: 10,
    nameNpc: "Sam",
    pictures: "Sam.png",
    loves: "Loves: cactus fruit, maple bar, pizza, tigereye",
    hates:
      "Hates: coal, copper bar, gold bar, gold ore, iridium ore, iridium bar, iron bar, refined quartz, duck mayonnaise, mayonnaise, pickles",
    description:
      "Sam is the laid-back, best friend of Sebastian. He enjoys skateboarding and playing music with his band. His father is away in the military during the first year of of the game, so Sam does his best to watch after his younger brother Vincent.",
  },
  {
    id: 11,
    nameNpc: "Sebastian",
    pictures: "Sebastian.png",
    loves: "Loves: frozen tear, pumpkin soup, obsidian, sashimi, void egg",
    hates: "Hates: clay, complete breakfast, farmer's lunch, omelet",
    description:
      "Sebastian is the 'emo' boy of the game. He enjoys late night rides on his motorcycle to the city. He is in a band with Sam and Abigail. He has reclusive tendencies due to relational struggles in his family.",
  },
  {
    id: 12,
    nameNpc: "Shane",
    pictures: "Shane.png",
    loves: "Loves: beer, hot pepper, pepper poppers, pizza",
    hates: "Hates: pickles, quartz",
    description:
      "Shane lives with his aunt, Marnie, and works at the Joja Mart. Shane is a gruff man who struggles with addiction, and players will watch him hit rock bottom. He uses his deep love of chickens to rebuild his life. Shane is the only relationship path that unlocks blue hens.  ",
  },
];

const NonPlayableChar = (props) => {
  const [isShown, setIsShown] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    console.log("The link was clicked.");
    setIsShown((current) => !current);
  };
  return (
    <div className="npclist" onClick={handleClick}>
      <li className="nonplayablechar">
        <figure>
          {" "}
          <img src={props.pictures} />
          <figcaption>
            <h4 className="npcname">{props.nameNpc}</h4>
          </figcaption>
        </figure>

        {/* <button className="npcbtn" onClick={handleClick}> */}

        {/* </button> */}
        {isShown && (
          <div className="descriptiondiv">
            <p>{props.loves}</p>
            <p>{props.hates}</p>
            <p>{props.description}</p>
          </div>
        )}

        {/* 👇️ show component on click
        {isShown && <PersonDetail />} */}
      </li>
    </div>
  );
};

export default NonPlayableChar;
