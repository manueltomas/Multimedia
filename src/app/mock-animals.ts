import { Animal } from "./Animal";
import { WORLDS } from "./mock-worlds";

export const ANIMALS: Animal[] = [
    {id:1, name:'cat', description:'', imageUrl:'../assets/img/cat.png', catched:false, world:WORLDS[0].id, page:4, x:0.8715, y:0.4386, link:"http://en.wikipedia.org/wiki/Cat"},
    {id:2, name:'boar', description:'', imageUrl:'../assets/img/boar.png', catched:false, world:WORLDS[0].id, page:4, x:0.0613, y:0.3953, link:"https://en.wikipedia.org/wiki/Wild_boar"},
    {id:3, name:'frog', description:'', imageUrl:'../assets/img/frog.png', catched:false, world:WORLDS[1].id, page:1, x:0.4855, y:0.3934, link:"https://en.wikipedia.org/wiki/Frog"},
    {id:4, name:'koala', description:'', imageUrl:'../assets/img/koala.png', catched:false, world:WORLDS[1].id, page:2, x:0.5914, y:0.5759, link:"https://en.wikipedia.org/wiki/Koala"},
    {id:5, name:'fox', description:'', imageUrl:'../assets/img/fox.png', catched:false, world:WORLDS[2].id, page:4, x:0.1, y:0.1, link:"https://en.wikipedia.org/wiki/Fox"},
    {id:6, name:'dog', description:'', imageUrl:'../assets/img/dog.png', catched:false, world:WORLDS[2].id, page:4, x:0.1, y:0.1, link:"https://en.wikipedia.org/wiki/Dog"},
  ];