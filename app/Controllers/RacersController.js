import { ProxyState } from "../AppState.js";




function draw() {
  let racers = ProxyState.racers
  let template = ''
  racers.forEach(r => r.Template)
  document.getElementById('racers').innerHTML = template
}
export class RacersController {
  constructor(){
    console.log('racers controller loaded')
    draw()
  }
}
