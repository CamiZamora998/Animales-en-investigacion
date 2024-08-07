import Animal from "./Animal.js";


const audioPlayer = document.getElementById("player");


class Leon extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }

  Rugir() {
    console.log(this.sonido);
    audioPlayer.src = `assets/sounds/${this.sonido}`;
    audioPlayer.play();
  }
}

class Lobo extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }

  Aullar() {
    console.log(this.sonido);
    audioPlayer.src = `assets/sounds/${this.sonido}`;
    audioPlayer.play();
  }
}

class Oso extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }

  Gruñir() {
    console.log(this.sonido);
    audioPlayer.src = `assets/sounds/${this.sonido}`;
    audioPlayer.play();
  }
}

class Serpiente extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }

  Sisear() {
    console.log(this.sonido);
    audioPlayer.src = `assets/sounds/${this.sonido}`;
    audioPlayer.play();
  }
}

class Aguila extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }

  Chillar() {
    console.log(this.sonido);
    audioPlayer.src = `assets/sounds/${this.sonido}`;
    audioPlayer.play();
  }
}

export { Leon, Lobo, Oso, Serpiente, Aguila};