const MENU = [

/* ================= SOUP ================= */
{ id:1, name:"Seblak Level 1", price:15000, img:"🍲", cat:["soup","spicy"], taste:"spicy" },
{ id:2, name:"Seblak Level 3", price:18000, img:"🍲", cat:["soup","spicy"], taste:"spicy" },
{ id:3, name:"Seblak Level 5", price:20000, img:"🍲", cat:["soup","spicy"], taste:"spicy" },
{ id:4, name:"Bakso Urat", price:20000, img:"🥣", cat:["soup"], taste:"medium" },
{ id:5, name:"Soto Ayam", price:22000, img:"🍜", cat:["soup"], taste:"medium" },
{ id:6, name:"Rawon", price:30000, img:"🥣", cat:["soup"], taste:"medium" },
{ id:7, name:"Tom Yum Seafood", price:38000, img:"🍜", cat:["soup","seafood"], taste:"spicy" },
{ id:8, name:"Chicken Ramen", price:35000, img:"🍜", cat:["soup","ramen"], taste:"medium" },
{ id:9, name:"Beef Ramen", price:40000, img:"🍜", cat:["soup","ramen"], taste:"medium" },
{ id:10, name:"Seafood Ramen", price:42000, img:"🍜", cat:["soup","ramen"], taste:"spicy" },

/* ================= FRIED RICE ================= */
{ id:11, name:"Chicken Fried Rice", price:22000, img:"🍛", cat:["fried rice"], taste:"medium" },
{ id:12, name:"Seafood Fried Rice", price:35000, img:"🍛", cat:["fried rice"], taste:"spicy" },
{ id:13, name:"Mutton Fried Rice", price:30000, img:"🍛", cat:["fried rice"], taste:"spicy" },
{ id:14, name:"Green Chili Fried Rice", price:25000, img:"🍛", cat:["fried rice","spicy"], taste:"spicy" },
{ id:15, name:"Vegetarian Fried Rice", price:20000, img:"🥗", cat:["fried rice"], taste:"medium" },

/* ================= NOODLES ================= */
{ id:16, name:"Fried Noodles", price:18000, img:"🍝", cat:["noodles"], taste:"medium" },
{ id:17, name:"Kwetiau Goreng", price:20000, img:"🍝", cat:["noodles"], taste:"medium" },
{ id:18, name:"Mie Aceh", price:28000, img:"🍝", cat:["noodles","spicy"], taste:"spicy" },
{ id:19, name:"Mie Ayam", price:15000, img:"🍜", cat:["noodles"], taste:"medium" },
{ id:20, name:"Indomie Special", price:12000, img:"🍜", cat:["noodles"], taste:"medium" },

/* ================= SATAY ================= */
{ id:21, name:"Chicken Satay", price:25000, img:"🍢", cat:["satay"], taste:"medium" },
{ id:22, name:"Mutton Satay", price:45000, img:"🍢", cat:["satay"], taste:"medium" },
{ id:23, name:"Taichan Satay", price:22000, img:"🍡", cat:["satay","spicy"], taste:"spicy" },
{ id:24, name:"Chicken Skin Satay", price:20000, img:"🍢", cat:["satay"], taste:"medium" },
{ id:25, name:"Beef Satay Special", price:50000, img:"🍢", cat:["satay"], taste:"medium" },

/* ================= STEAK & GRILL ================= */
{ id:26, name:"Wagyu Tenderloin", price:250000, img:"🥩", cat:["steak"], taste:"medium" },
{ id:27, name:"Wagyu Sirloin", price:220000, img:"🥩", cat:["steak"], taste:"medium" },
{ id:28, name:"Wagyu Rib Eye", price:235000, img:"🥩", cat:["steak"], taste:"medium" },
{ id:29, name:"Grilled Salmon", price:75000, img:"🐟", cat:["grilled"], taste:"medium" },
{ id:30, name:"Grilled Chicken", price:30000, img:"🍗", cat:["grilled"], taste:"medium" },

/* ================= FAST FOOD ================= */
{ id:31, name:"Cheese Burger", price:35000, img:"🍔", cat:["burger"], taste:"medium" },
{ id:32, name:"Double Burger", price:45000, img:"🍔", cat:["burger"], taste:"medium" },
{ id:33, name:"French Fries", price:18000, img:"🍟", cat:["snack"], taste:"medium" },
{ id:34, name:"Hotdog Classic", price:25000, img:"🌭", cat:["snack"], taste:"medium" },
{ id:35, name:"BBQ Chicken Pizza", price:80000, img:"🍕", cat:["pizza"], taste:"medium" },

/* ================= RICE & EGG ================= */
{ id:36, name:"Ayam Geprek", price:20000, img:"🍗", cat:["rice","spicy"], taste:"spicy" },
{ id:37, name:"Spicy Egg Balado", price:15000, img:"🥚", cat:["rice","spicy"], taste:"spicy" },
{ id:38, name:"Fried Egg + Rice", price:12000, img:"🍳", cat:["rice"], taste:"medium" },
{ id:39, name:"Cheese Omelet", price:18000, img:"🍳", cat:["egg"], taste:"medium" },
{ id:40, name:"Chicken Porridge", price:15000, img:"🥣", cat:["porridge"], taste:"sweet" },

/* ================= DESSERT ================= */
{ id:41, name:"Chocolate Donut", price:8000, img:"🍩", cat:["sweet"], taste:"sweet" },
{ id:42, name:"Vanilla Donut", price:8000, img:"🍩", cat:["sweet"], taste:"sweet" },
{ id:43, name:"Red Velvet Donut", price:9000, img:"🍩", cat:["sweet"], taste:"sweet" },
{ id:44, name:"Tiramisu Donut", price:9000, img:"🍩", cat:["sweet"], taste:"sweet" },
{ id:45, name:"Strawberry Donut", price:8000, img:"🍩", cat:["sweet"], taste:"sweet" },
{ id:46, name:"Brownies Fudge", price:25000, img:"🍰", cat:["sweet"], taste:"sweet" },
{ id:47, name:"Cheesecake", price:32000, img:"🍰", cat:["sweet"], taste:"sweet" },
{ id:48, name:"Matcha Cake", price:30000, img:"🍵", cat:["sweet"], taste:"sweet" },
{ id:49, name:"Pandan Cake", price:28000, img:"🍰", cat:["sweet"], taste:"sweet" },
{ id:50, name:"Macaroons Box", price:30000, img:"🍪", cat:["sweet"], taste:"sweet" },

/* ================= DRINK ================= */
{ id:51, name:"Thai Tea", price:18000, img:"🧋", cat:["drink"], taste:"sweet" },
{ id:52, name:"Iced Lemon Tea", price:15000, img:"🍋", cat:["drink"], taste:"medium" },
{ id:53, name:"Mango Smoothie", price:25000, img:"🥭", cat:["drink"], taste:"sweet" },
{ id:54, name:"Strawberry Milkshake", price:27000, img:"🍓", cat:["drink"], taste:"sweet" },
{ id:55, name:"Durian Ice", price:25000, img:"🍧", cat:["drink"], taste:"sweet" },
{ id:56, name:"Avocado Ice", price:20000, img:"🍧", cat:["drink"], taste:"sweet" },
{ id:57, name:"Es Teler", price:18000, img:"🍧", cat:["drink"], taste:"sweet" },

/* ================= HEALTHY ================= */
{ id:58, name:"Caesar Salad", price:30000, img:"🥗", cat:["healthy"], taste:"medium" },
{ id:59, name:"Greek Salad", price:28000, img:"🥗", cat:["healthy"], taste:"medium" },
{ id:60, name:"Oatmeal Fruit", price:20000, img:"🥣", cat:["healthy"], taste:"sweet" },

/* ================= EXTRA ================= */
{ id:61, name:"Chicken Curry", price:32000, img:"🍛", cat:["rice"], taste:"medium" },
{ id:62, name:"Beef Rendang", price:35000, img:"🥩", cat:["rice"], taste:"spicy" },
{ id:63, name:"Fried Tofu", price:12000, img:"🍢", cat:["snack"], taste:"medium" },
{ id:64, name:"Tempe Goreng", price:10000, img:"🍢", cat:["snack"], taste:"medium" },
{ id:65, name:"Garlic Bread", price:15000, img:"🍞", cat:["snack"], taste:"medium" }

];

let cart = [];
let allOrders = [];

// ================= SEARCH =================
document.getElementById("chat-form").addEventListener("submit", function(e){
    e.preventDefault();

    const query = document.getElementById("chat-input").value.toLowerCase();
    document.getElementById("chat-input").value = "";

    const results = MENU.filter(item =>
        item.name.toLowerCase().includes(query) ||
        item.cat.some(c => query.includes(c)) ||
        query.includes(item.taste)
    );

    showResults(results);
});

function showResults(results){
    const container = document.getElementById("chat-messages");
    container.innerHTML = "";

    if(results.length === 0){
        container.innerHTML = "<div>No menu found.</div>";
        return;
    }

    results.forEach(item=>{
        container.innerHTML += `
            <div class="flex justify-between items-center border p-2 rounded">
                <div>
                    ${item.img} <strong>${item.name}</strong>
                    <div class="text-sm text-orange-600">
                        Rp ${item.price.toLocaleString()}
                    </div>
                </div>
                <button onclick="buy(${item.id})"
                    class="bg-black text-white px-3 py-1 rounded">
                    Buy
                </button>
            </div>
        `;
    });
}

// ================= CART =================
function buy(id){
    const item = MENU.find(m => m.id === id);
    cart.push(item);
    updateCart();
}

function updateCart(){
    const list = document.getElementById("cart-items");
    const totalEl = document.getElementById("cart-total");

    if(cart.length === 0){
        list.innerHTML = "Cart is empty";
        totalEl.innerText = "Rp 0";
        return;
    }

    list.innerHTML = cart.map(i=>`
        <div class="flex justify-between border p-2 rounded">
            <span>${i.img} ${i.name}</span>
            <span>Rp ${i.price.toLocaleString()}</span>
        </div>
    `).join("");

    const total = cart.reduce((sum,i)=>sum+i.price,0);
    totalEl.innerText = "Rp " + total.toLocaleString();
}

// ================= CHECKOUT =================
function checkout(){
    if(cart.length === 0) return;

    const order = {
        id: Date.now(),
        items: [...cart],
        total: cart.reduce((s,i)=>s+i.price,0)
    };

    allOrders.push(order);
    alert("Order sent successfully!");
    cart = [];
    updateCart();
}