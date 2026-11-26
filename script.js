// Tự chọn đường dẫn tới game cho mọi liên kết có thuộc tính data-game.
// - Nếu trang đang nằm trong thư mục "game": game ở thư mục ngoài (../index.html)
// - Ngược lại: game nằm trong thư mục "game" (game/index.html)
(function () {
  var trongThuMucGame = /\/game\/[^\/]*$/.test(location.pathname);
  var duongDan = trongThuMucGame ? "../index.html" : "game/index.html";
  var cacLienKet = document.querySelectorAll("a[data-game]");
  for (var i = 0; i < cacLienKet.length; i++) {
    cacLienKet[i].setAttribute("href", duongDan);
  }
})();
