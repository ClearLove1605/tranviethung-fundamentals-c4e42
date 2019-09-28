let soundArray = ["rain", "thunderStorm", "firePlace", "forest", "train"]
function randomThreeSound(arr) {
    if (!arr || !arr instanceof Array || arr.length < 3) return arr
    let randomIndex = []
    let max = arr.length - 1
    let min = 0

    while (randomIndex.length < 3) {
        let index = Math.floor(Math.random() * (max - min) + min);
        if (!randomIndex.includes(index)) {
            randomIndex.push(index)
        }
    }
    return randomIndex.map (i => arr[i])
}
let x = randomThreeSound(soundArray);
console.log (x)
let click = document.getElementById('random');
click.addEventListener ('click', function () {
audio[1].play();
})


// let src = [
//     "E:\sound_project\rain.mp3",
//     "E:\sound_project\thunderstorm.mp3",
//     "E:\sound_project\fireplace.mp3",
//     "E:\sound_project\forest.mp3",
//     "E:\sound_project\train.mp3"
// ];


// $('button').on('click', function (e) {
//     var rand = Math.floor(Math.random() * src.length);
//     $('#audio-fail source').attr("src", src[rand])  
//     $('#audio-fail')[0].load();
//     $('#audio-fail')[0].play();
//   });

// let click = document.getElementById('random');
// click.addEventListener ('click', function () {
// ('audio-fail')[1].play();
// })