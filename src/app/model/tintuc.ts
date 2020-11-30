export interface category {
  idCategory?:number;
  parentIdCategory?:number;
  rankCategory?:number;
  titleCategory?:string;
  showMenu?:boolean;
  orderDisplay?:number;
  showPage?:boolean;
  orderShowPage?:number;
  showFooter?:boolean;
  orderShowFooter?:number;
  icon?:string;
}

export interface posts{
  idPosts?:number;
  idCategory?:number;
  briefDescription?:string;
  description?:string;
  metaKey?:string;
  orderFooter?:number;
  image?:string;
  datePost?:Date;
}
