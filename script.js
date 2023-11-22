function showMenu() {
    document.getElementById("nav").innerHTML = `
    <div class="logo">
      <img src="./assets/images/logo.svg" alt="logo">
    </div>
   <nav id="drop">
   <div class="ul">
        <li><a href="#">Home</a></li>
        <li><a href="#">New</a></li>
        <li><a href="#">Popular</a></li>
        <li><a href="#">Trending</a></li>
        <li><a href="#">Categories</a></li>
        </div>
   </nav>
    <button class="menu">
    <a href="" onclick="goBack()"> 
    <img src="./assets/images/icon-menu-close.svg" alt="icon-menu-close">
      </a>
    </button>
        `
}