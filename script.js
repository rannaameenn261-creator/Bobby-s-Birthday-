
const audio = document.getElementById('birthdaySong');
const toggle = document.getElementById('musicToggle');
if (audio && toggle) {
  toggle.addEventListener('click', async () => {
    if (audio.paused) {
      try { await audio.play(); toggle.textContent = '♫ إيقاف الأغنية'; }
      catch(e) { toggle.textContent = 'اضغطي مرة أخرى لتشغيل الأغنية'; }
    } else { audio.pause(); toggle.textContent = '♫ شغّلي الأغنية'; }
  });
  audio.addEventListener('ended', () => toggle.textContent = '♫ شغّلي الأغنية');
}
