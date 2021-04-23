import { World } from "./World";

export interface Animal{
    id:number;
    name:String;
    imageUrl:String;
    description:String;
    catched:Boolean;
    world:number;
    page:number;
}