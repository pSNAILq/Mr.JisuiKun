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

var currentItem;
var currentItemNum;

var items =  [
  ["tomato",10,3],
  ["tomato",10,3],
  ["eggplant",10,3],
  ["milk",2,3],
  ["onion",1,3]
  ];
    // ons.bootstrap();
window.onload=function(){
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
}



function makeItem(){
    alert(items.length);
  for(var i = 0; i<items.length;i++){
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
function addPage(){
 document.querySelector('#navigator').pushPage('add.html');
}

function detail(){
  alert("alla");
}
function clickBtn3(){
  document.location = "index.html";
}
$('#add-page').on('load', function() {
  alert("a");
});
document.addEventListener('init', function(event) {
  if (event.target.matches('#stock-page')) {
    
  var list = document.getElementById("ons-stock-list");
  for(var i = 0; i<items.length;i++){
  const newItem = document.createElement("ons-list-item");
  newItem.className='item';
  newItem.id=items[i][id_num];
  newItem.modifier='tappable';
  newItem.value = i;

  newItem.onclick = ()=>{
    currentItem = newItem.id;
    // alert(currentItem);
    currentItemNum = newItem.value;

    // alert(currentItemNum);
    
    document.querySelector('#navigator').pushPage('detail.html');
  }

  const newItemImg = document.createElement("img");
  newItemImg.src="./icon/"+newItem.id+".png";
  newItemImg.width = "80";
  newItemImg.height = "80";
  newItemImg.className= "itemImg";

  const newStockBadge = document.createElement("span");
  newStockBadge.className="notification";
  newStockBadge.id="stock-badge";
  newStockBadge.textContent=items[i][stock_num];
  
  const newBBadge = document.createElement("span");
  newBBadge.className="notification";
  newBBadge.id="BB-badge";
  newBBadge.textContent=items[i][B_num];


  newItem.appendChild(newItemImg);
  newItem.appendChild(newStockBadge);
  newItem.appendChild(newBBadge);
  list.appendChild(newItem);
  // alert(newItem);
  
  }
    ons.notification.alert('在庫画面が初期化されました');
    // コンテンツを準備...
  }else if(event.target.matches('#detail-page')){
    ons.notification.alert('画面が初期化されました');

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
