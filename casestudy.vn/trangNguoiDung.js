function dangxuat() {
    location.href = "trangDangXuat.html"
}

function lienhe() {
    document.getElementById('display').innerHTML = "Hotline/ Zalo: 0949 401 851.<br>Store Hà Nội: Số 19 ngõ 81 Láng Hạ, Hà Nội.<br>Store HCM: 81/6 Hồ Văn Huê, p9,q Phú Nhuận, HCM." +
        "<br>Mô Hình Cao Cấp  là đơn vị tiên phong trong lĩnh vực kinh doanh mô hình figure tại Việt Nam," +
        "đặc biệt là dòng mô hình Transformers oversize.Là đại lý duy nhất của 52toys, và có quan hệ hợp tác với nhiều thương hiệu sản xuất mô hình khác."
}

function trangchu() {
    hinhAnh(arr)
}
function checkAdmin() {
    document.getElementById('tentaikhoan')
}

function hinhAnh(array) {
    let name = window.localStorage.getItem('username');
    document.getElementById('tentaikhoan').innerHTML = name;
    let tien = window.localStorage.getItem('sotiennap');
    document.getElementById("sotienhienco").innerHTML = tien;
    let data = "";
    data += "<table>";
    data += "</tr>";
    let i;
    for (i = 0; i < array.length; i++) {

        data += `<td id="td1"> <img id="img2" src="${array[i].img}" alt="Không load được"> <p>${array[i].price}</p> <button id="button2" onclick="mua()">Mua</button></td>`

    }
    data += "</tr>"
    data += "</table>";
    document.getElementById('display').innerHTML = data;
}

function trangnaptien() {
    location.href = "trangNapTien.html"
}

class Product {
    img;
    price;

    constructor(img, price) {
        this.img = img;
        this.price = price;
    }

    getImg() {
        return this.img;
    }

    getPrice() {
        return this.price
    }
}

let optimus = new Product("optimus.jpg", 1000000);
let bumblebee = new Product("bumblebee.jpg", 500000);
let megatron = new Product("megatron.jpg", 900000);
let gavatron = new Product("gavatron.jpg", 800000);
let nemesis = new Product('nemesis.jpg', 1000000);
let grimlock = new Product('grimlock.jpg', 700000);
let optimus2 = new Product('optimus2.jpg', 1000000)
let arr = [optimus, bumblebee, megatron, gavatron, nemesis, grimlock];
