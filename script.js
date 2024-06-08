document.addEventListener("DOMContentLoaded", function() {
    const envelope = document.getElementById('envelope');
    const letter = document.getElementById('letter');
    const music = document.getElementById('music');
    const lyrics = document.getElementById('lyrics');

    envelope.addEventListener('click', function() {
        envelope.style.transform = 'rotateY(180deg)';
        setTimeout(() => {
            letter.style.display = 'block';
            music.play();
            synchronizeLyrics(); // Sincroniza a letra com a música quando a carta é aberta
        }, 500);
    });

    function synchronizeLyrics() {
        const lyricsArray = lyrics.querySelectorAll('p');
        const lyricsDuration = music.duration / lyricsArray.length;

        let currentLine = 0;

        function updateLyrics() {
            if (currentLine < lyricsArray.length) {
                lyricsArray[currentLine].style.color = 'red'; // Destaca a linha atual da letra
                currentLine++;
            }
        }

        updateLyrics();
        const lyricsInterval = setInterval(updateLyrics, lyricsDuration * 1000);
        
        music.addEventListener('ended', function() {
            clearInterval(lyricsInterval); // Limpa o intervalo quando a música termina
        });
    }
});
