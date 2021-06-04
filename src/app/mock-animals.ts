import { Animal } from "./Animal";
import { WORLDS } from "./mock-worlds";

export const ANIMALS: Animal[] = [
    {id:1, name:'cat', description:'', imageUrl:'../assets/img/cat.png', catched:false, world:WORLDS[0].id, page:4},
    {id:2, name:'boar', description:'', imageUrl:'../assets/img/boar.png', catched:false, world:WORLDS[0].id, page:4},
    {id:3, name:'rabbit', description:'', imageUrl:'../assets/img/rabbit.png', catched:false, world:WORLDS[1].id, page:4},
    {id:4, name:'squirrel', description:'', imageUrl:'../assets/img/squirrel.png', catched:false, world:WORLDS[1].id, page:4},
    {id:5, name:'fox', description:'', imageUrl:'../assets/img/fox.png', catched:false, world:WORLDS[2].id, page:4},
    {id:6, name:'dog', description:'', imageUrl:'../assets/img/dog.png', catched:false, world:WORLDS[2].id, page:4},
  ];