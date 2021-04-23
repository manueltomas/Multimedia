import { Animal } from "./Animal";
import { WORLDS } from "./mock-worlds";

export const ANIMALS: Animal[] = [
    {id:1, name:'cat', description:'', imageUrl:'../assets/img/cat.png', catched:false, world:WORLDS[0].id, page:4},
    {id:2, name:'dog', description:'', imageUrl:'../assets/img/cat.png', catched:false, world:WORLDS[0].id, page:4},
    {id:3, name:'rabbit', description:'', imageUrl:'../assets/img/cat.png', catched:false, world:WORLDS[0].id, page:4},
    {id:4, name:'frog', description:'', imageUrl:'../assets/img/cat.png', catched:false, world:WORLDS[1].id, page:4},
    {id:5, name:'horse', description:'', imageUrl:'../assets/img/cat.png', catched:false, world:WORLDS[0].id, page:4},
    {id:6, name:'wolve', description:'', imageUrl:'../assets/img/cat.png', catched:false, world:WORLDS[0].id, page:4},
  ];