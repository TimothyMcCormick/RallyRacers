

export class Racer {
  constructor(name, picture, number, distance){
    this.name = name
    this.picture = picture
    this. number = number
    this.distance = distance
  }
  
  get Template(){
    return `
    <div class="col-12">
    <div><span>${this.distance}</span></div>
    </div>
    `
  }
}
