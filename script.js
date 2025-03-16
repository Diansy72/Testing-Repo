console.log('Hello world');
console.log('Today date:', new Date().toLocaleDateString());
function getGreeting() {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning!';
    if (hour < 18) return 'Good afternoon!';
    return 'Good evening!';
}
console.log(getGreeting());
document.body.insertAdjacentHTML('beforeend', '<footer>Copyright © 2025</footer>');
document.body.insertAdjacentHTML('afterbegin', '<header>Welcome home</header>');
