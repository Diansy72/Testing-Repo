console.log('Hello world');
console.log('Today date:', new Date().toLocaleDateString());
function getGreeting() {
    const hour = new Date().getHours();
    if (hour < 12) return 'Selamat Pagi!';
    if (hour < 18) return 'Selamat Siang!';
    return 'Selamat Malam!';
}
console.log(getGreeting());
