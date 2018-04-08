import { Player } from '../data/models/player.interface';

export class PlayerService {
  private squad: Player[] = [];

  addPlayerToSquad(player: Player) {
    this.squad.push(player);
  }

  removePlayerFromSquad(player: Player) {
    const idx = this.squad.findIndex((plyr: Player) => plyr.id === player.id);
    this.squad.splice(idx, 1);
  }

  getSquad() {
    return this.squad.slice();
  }

  isSquadPlayer(player: Player) {
    return this.squad.find(plyr => player.id === plyr.id);
  }
}