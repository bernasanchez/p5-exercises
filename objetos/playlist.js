// Playlist
// Tenemos un Arreglo playlist con canciones seleccionadas al azar por Spotify para reproducir. Tenemos otro Arreglo playlistEscuchada que tiene canciones que ya escuchamos. Usando .filter(), creá una nueva lista con las canciones guardadas en playlist que no estén en playlistEscuchada. Guardá el resultado en la Variable playlistSinEscuchar.

let playlist = ['Smells Like Teen Spirit', 'Everlong', 'Come As You Are', 'The  Pretender', 'Heart-Shaped Box', 'Learn to Fly', 'Lithium']
let playlistEscuchada = ['The Pretender', 'Lithium', 'Come As You Are']

//Ej RESUELTO POR P5
//1 Filtramos el array que contiene todas las canciones
//2 Pregutamos con indexOf() en array "playlistEscuchada" si alguna cancion coincide con el otro array. Si es = -1 quiere decir que no coincide
//3 Se guarda la cancion en arrar playlistSinEscuchar 
let playlistSinEscuchar = playlist.filter(cancion => { 
    return playlistEscuchada.indexOf(cancion) == -1;
});

console.log(playlistSinEscuchar);
// Debería mostrar
// [ 'Smells Like Teen Spirit', 'Everlong', 'Heart-Shaped Box', 'Learn to Fly' ]