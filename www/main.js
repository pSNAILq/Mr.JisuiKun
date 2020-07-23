// document.addEventListener('init', function (event) {
//   var page = event.target;

//   if (page.matches('#stock-page')) {

//     // page.querySelector('#push-button').onclick = function() {
//     //   document.querySelector('#navigator').pushPage('page2.html');
//     // };
//     // page.querySelector('#detal0').onclick = function() {
//     //   document.querySelector('#navigator').pushPage('detail.html');
//     // };
//     page.querySelector('#add').onclick = function () {
//       document.querySelector('#navigator').pushPage('add.html');
//     };
//         page.querySelector('item').onclick = function () {
//       document.querySelector('#navigator').pushPage('add.html');
//     };
//     // page.querySelector(".item").onclick = function () {
//     //   document.querySelector('#navigator').pushPage('detail.html');
//     // };

//   } else if (page.matches('#second-page')) {

//     page.querySelector('#pop-button').onclick = function () {
//       document.querySelector('#navigator').popPage();
//     };

//   }
// });
// $(function () {
//   // Initialization code
//   // ons.notification.alert('Button is tapped!');


// // });
//コンテンツがロードされたら、リストのアイテムを動的生成
const id_num = 0;
const stock_num = 1;
const B_num = 2;
const name_num = 3;
const purchase_num = 4;
const B_num_ = 5;

var currentItem;
var currentItemNum = 2;

var allItems = [
  "cabbage",
  "eggplant",
  "happoushu",
  "lettuce",
  "milk",
  "minitomato",
  "onion",
  "tomato"
];

var items = [
  [allItems[0], 10, 3, "トマト", new Date(2020,01,11),new Date(2020,01,11)],
  [allItems[2], 10, 3, "トマト",  new Date(2020,10,2),new Date(2020,10,20)],
  [allItems[4], 10, 3, "トマト",  new Date(2020,10,3),new Date(2020,10,2)],
  [allItems[5], 2, 3, "トマト",  new Date(2020,10,4),new Date(2020,10,1)],
  [allItems[7], 1, 3, "トマト",  new Date(2020,10,5),new Date(2020,10,20)]
];


// ons.bootstrap();
// window.onload=function(){
// ons.ready(function() {
// alert(items.length);

// var list = document.getElementById("ons-stock-list");
// for(var i = 0; i<items.length;i++){
// const newItem = document.createElement("ons-list-item");
// newItem.className='item';
// newItem.id=items[i][id_num];
// newItem.modifier='tappable';
// newItem.value = i;

// newItem.onclick = ()=>{
//   currentItem = newItem.id;
//   // alert(currentItem);
//   currentItemNum = newItem.value;

//   // alert(currentItemNum);

//   document.querySelector('#navigator').pushPage('detail.html');
// }

// const newItemImg = document.createElement("img");
// newItemImg.src="./icon/"+newItem.id+".png";
// newItemImg.width = "80";
// newItemImg.height = "80";
// newItemImg.className= "itemImg";

// const newStockBadge = document.createElement("span");
// newStockBadge.className="notification";
// newStockBadge.id="stock-badge";
// newStockBadge.textContent=items[i][stock_num];

// const newBBadge = document.createElement("span");
// newBBadge.className="notification";
// newBBadge.id="BB-badge";
// newBBadge.textContent=items[i][B_num];


// newItem.appendChild(newItemImg);
// newItem.appendChild(newStockBadge);
// newItem.appendChild(newBBadge);
// list.appendChild(newItem);
// // alert(newItem);

// }
// }



function makeItem() {
  alert(items.length);
  for (var i = 0; i < items.length; i++) {
    alert(i);
  }
}


function push(e) {
  // console.log("test");
  // ons.notification.alert('Button !');
  // location.href= "detail.html";


  // var t = ;
  var r = e.id;
  // ons.notification.alert(r);
  //  r = $(".item").attr('id');
  alert(r);
  // ons.notification.alert($(this).attr('id'));
  //  $("#detailItem").text(t+);
  // navigator.pushPage('detail.html');

  // navigator.pushPage('add_account.html', { animation : 'slide' } );
  document.location = "test.html";
}
function addPage() {
  document.querySelector('#navigator').pushPage('add.html');
}

function detail() {
  alert("alla");
}
function clickBtn3() {
  document.location = "index.html";
}
$('#add-page').on('load', function () {
  alert("a");
});
document.addEventListener('init', function (event) {
  if (event.target.matches('#stock-page')) {

    var list = document.getElementById("ons-stock-list");
    for (var i = 0; i < items.length; i++) {
      const newItem = document.createElement("ons-list-item");
      newItem.className = 'item';
      newItem.id = items[i][id_num];
      newItem.modifier = 'tappable';
      newItem.value = i;

      newItem.onclick = () => {
        currentItem = newItem.id;
        // alert(currentItem);
        currentItemNum = newItem.value;

        // alert(currentItemNum);

        document.querySelector('#navigator').pushPage('detail.html');
      }

      const newItemImg = document.createElement("img");
      newItemImg.src = "./icon/" + items[i][id_num] + ".png";
      newItemImg.width = "80";
      newItemImg.height = "80";
      newItemImg.className = "itemImg";

      const newStockBadge = document.createElement("span");
      newStockBadge.className = "notification";
      newStockBadge.id = "stock-badge";
      newStockBadge.textContent = items[i][stock_num];

      const newBBadge = document.createElement("span");
      newBBadge.className = "notification";
      newBBadge.id = "BB-badge";
      newBBadge.textContent = items[i][B_num];


      newItem.appendChild(newItemImg);
      newItem.appendChild(newStockBadge);
      newItem.appendChild(newBBadge);
      list.appendChild(newItem);
      // alert(newItem);

    }
    // ons.notification.alert('在庫画面が初期化されました');
    // コンテンツを準備...
  } else if (event.target.matches('#detail-page')) {
    var detailitem = document.getElementById("detail-item");
    detailitem.src = "./icon/" + items[currentItemNum][id_num] + ".png";

    var itemName = document.getElementById("itemName");
    var itemStock = document.getElementById("itemStock");
    var itemPurchase = document.getElementById("itemPurchase");
    var itemB = document.getElementById("itemB");

    itemName.textContent = items[currentItemNum][name_num];
    itemStock.textContent = items[currentItemNum][stock_num];

    /*日付 */
    var yyyy = items[currentItemNum][purchase_num].getFullYear();
    var mm = ("0"+(items[currentItemNum][purchase_num].getMonth())).slice(-2);
    var dd = ("0"+items[currentItemNum][purchase_num].getDate()).slice(-2);
    itemPurchase.value = yyyy+'-'+mm+'-'+dd;

    yyyy = items[currentItemNum][B_num_].getFullYear();
    mm = ("0"+(items[currentItemNum][B_num_].getMonth())).slice(-2);
    dd = ("0"+items[currentItemNum][B_num_].getDate()).slice(-2);
    alert(yyyy+'-'+mm+'-'+dd);
    itemB.value = yyyy+'-'+mm+'-'+dd;

    // ons.notification.alert(detailitem+"a");
  } else if (event.target.matches('#add-page')) {
    var carouselList = document.getElementById("icons");
    for (var i = 0; i < allItems.length; i++) {
      const newCI = document.createElement("ons-carousel-item");
      const newImg = document.createElement("img");
      const newDiv = document.createElement("div");
      newImg.src = "icon/" + allItems[i] + ".png";
      // newImg.width=200;
      // newImg.height=300;
      newDiv.className = "item-label";
      newDiv.appendChild(newImg);

      newCI.appendChild(newDiv);
      carouselList.appendChild(newCI);
    }
    const newCI = document.createElement("ons-carousel-item");
    const newDiv = document.createElement("div");
    newDiv.className = "cover-label";
    newCI.appendChild(newDiv);
    // ons.notification.alert('add画面が初期化されました');

    //アイテム取得処理
    var inpName = document.getElementById("inpName");
    var icon = document.getElementById("icons");
    var inpNum = document.getElementById("inpNum");
    var inpDate = document.getElementById("inpDate");
    var inpBB = document.getElementById("inpBB");
    document.getElementById("accept").onclick = function () {
      //   document.getElementById("text").innerHTML = "クリックされた！";
      // };
     ons.notification.alert("ale"
     +inpName.value+"\n"
     +icon.getActiveIndex()+"\n"/*.getActiveCarouselItemIndex()+"\n"*/
     +inpNum.value+"\n"
     +inpDate.value+"\n"
     +inpBB.value);
      document.querySelector('#navigator').popPage();
    }
  }
}, false);
// $('li.some-item').on('click', function(){
//   var index = $('li.some-item').index(this);

//   console.log(index + 'th item clicked!');
// });


// // if (ons.platform.isIPhoneX()) {
// //   document.documentElement.setAttribute('onsflag-iphonex-portrait', '');
// //   document.documentElement.setAttribute('onsflag-iphonex-landscape', '');
// // }







// 				<ons-list>
// 					<ons-list-header>在庫一覧</ons-list-header>

// 					<ons-list-item class="item" id="tomato" modifier="tappable" onclick="push();">tomato<img class="itemImg" src="icon/tomato.png" width="80" height="80" >
// 						<span class="notification" id="stock-badge">100</span>
// 						<span class="notification" id="BB-badge">100</span>
// 					</ons-list-item>

// 					<ons-list-item class="item" modifier="tappable"><img class="itemImg" src="icon/milk.png" width="80" height="80" onclick="navigator.pushPage('add_account.html', { animation : 'slide' } );">
// 						<span class="notification" id="stock-badge">100</span>
// 						<span class="notification" id="BB-badge">100</span>
// 					</ons-list-item>

// 					<ons-list-item class="item" modifier="tappable"><img class="gray" src="icon/cabbage.png" width="80" height="80">
// 						<span class="notification" id="stock-badge">0</span>
// 						<span class="notification" id="BB-badge">0</span>
// 					</ons-list-item>

// 					<ons-list-item class="item" modifier="tappable"><img class="itemImg" src="icon/eggplant.png" width="80" height="80">
// 						<span class="notification" id="stock-badge">100</span>
// 						<span class="notification" id="BB-badge">100</span>
// 					</ons-list-item>

// 					<ons-list-item class="item" modifier="tappable"><img class="itemImg" src="icon/happoushu.png" width="80" height="80">
// 						<span class="notification" id="stock-badge">100</span>
// 						<span class="notification" id="BB-badge">100</span>
// 					</ons-list-item>

// 					<ons-list-item class="item" modifier="tappable"><img class="itemImg" src="icon/lettuce.png" width="80" height="80">
// 						<span class="notification" id="stock-badge">100</span>
// 						<span class="notification" id="BB-badge">100</span>
// 					</ons-list-item>

// 					<ons-list-item class="item" modifier="tappable"><img class="itemImg" src="icon/minitomato.png" width="80" height="80">
// 						<span class="notification" id="stock-badge">100</span>
// 						<span class="notification" id="BB-badge">100</span>
// 					</ons-list-item>

// 					<ons-list-item class="item" modifier="tappable"><img class="itemImg" src="icon/onion.png" width="80" height="80">
// 						<span class="notification" id="stock-badge">100</span>
// 						<span class="notification" id="BB-badge">100</span>
// 					</ons-list-item>





// 				</ons-list> 

// 		</ons-page>

// 	</ons-template>
// 	<!-- <ons-template id="page2.html">
//     <ons-page id="second-page">
//       <ons-toolbar>
//         <div class="left"><ons-back-button>Page 1</ons-back-button></div>
//         <div class="center">Page 2</div>
//       </ons-toolbar>

//       <div class="content" style="text-align: center">
//         <p>This is the second page.</p>
//         <ons-button id="pop-button">Pop page</ons-button>
//       </div>
//     </ons-page>
//   </ons-template> -->

// 	<ons-template id="detail.html">
// 		<ons-page id="detail-page">
// 			<ons-toolbar>
// 				<div class="left">
// 					<ons-back-button>StockPage</ons-back-button>
// 				</div>
// 			</ons-toolbar>

// 			<div class="content" style="text-align: center">
// 				<p>this is the detail page</p>
// 			</div>
// 		</ons-page>
// 	</ons-template>
// 	<ons-template id="add.html">
// 		<ons-page id="add-page">
// 			<ons-toolbar>
// 				<div class="left">
// 					<ons-back-button>StockPage</ons-back-button>
// 				</div>
// 			</ons-toolbar>

// 			<div class="content" style="text-align: center">
// 				<p>this is the add page</p>
// 			</div>
// 		</ons-page>
// 	</ons-template>
