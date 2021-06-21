export default function one(app) {
  app.innerHTML += `
<header style="display:flex; justify-content:center; align-items:center; background-color: antiquewhite;">
    <nav style="width:100%">
        <ul style="display:flex; justify-content:center; align-items:center; list-style:none; gap:10%; color: white; ">
            <li style="padding:10px; background-color: salmon; border-radius: 10px;"><a href="#" style="text-decoration:none; color: white; ">Home</a></li>
            <li style="padding:10px; background-color: salmon; border-radius: 10px;"><a href="#" style="text-decoration:none; color: white; ">Shop</a></li>
            <li style="padding:10px; background-color: salmon; border-radius: 10px;"><a href="#" style="text-decoration:none; color: white; ">Contacts</a></li>
            <li style="padding:10px; background-color: salmon; border-radius: 10px;"><a href="#" style="text-decoration:none; color: white; ">About project</a></li>
        </ul>
    </nav>
</header>
    `;
}
