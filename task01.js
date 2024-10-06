export function drawTriangle(height) {     //Le parametre de la function = height
    for (let i = 1; i <= height; i++) {      // boucle pour "\n" on ne peut pas les mettre dans la même ligne de code 
        console.log("$".repeat(i));        // i=\n  // == console.log
    }
}

