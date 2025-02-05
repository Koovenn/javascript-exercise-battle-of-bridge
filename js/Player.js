class Player {
    constructor(name, life, attack) {
        this.name = name;
        this.life = life;
        this.attack = attack;
    }

    attackPlayer(player, diceValue) {
        if (this.life > 0) {
            player.life -= this.attack * diceValue;
        }
        return player.life;
    }

    isDead() {
        if (this.life <= 0) {
            return true;
        } else {
            return false;
        }
    }
}