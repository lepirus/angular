export class CounterService {
  activeCounter = 0;
  inactiveCounter = 0;

  incrementActives() {
    this.activeCounter++;
    console.log('Inactives to actives: ' + this.activeCounter);
  }

  incrementInactives() {
    this.inactiveCounter++;
    console.log('Actives to inactives: ' + this.inactiveCounter);
  }
}
