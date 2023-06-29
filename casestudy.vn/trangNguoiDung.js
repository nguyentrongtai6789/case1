function dangxuat() {
    location.href = "trangDangXuat.html";
}

function lienhe() {
    document.getElementById('display').innerHTML = "Hotline/ Zalo: 0949 401 851.<br>Store Hà Nội: Số 19 ngõ 81 Láng Hạ, Hà Nội.<br>Store HCM: 81/6 Hồ Văn Huê, p9,q Phú Nhuận, HCM." +
        "<br>Mô Hình Cao Cấp  là đơn vị tiên phong trong lĩnh vực kinh doanh mô hình figure tại Việt Nam," +
        "đặc biệt là dòng mô hình Transformers oversize.Là đại lý duy nhất của 52toys, và có quan hệ hợp tác với nhiều thương hiệu sản xuất mô hình khác."
}

function trangChuDangNhap() {
    hinhAnhDangNhap(arr)
}

function hinhAnhDangNhap(array) {
    let a = localStorage.getItem('soTienCuaTaiKhoan');
    document.getElementById("tentaikhoan").innerHTML = localStorage.getItem("username");
    document.getElementById('sotienhienco').innerHTML = parseInt(a);
    let data = "";
    data += "<table>";
    data += "</tr>";
    let i;
    for (i = 0; i < array.length; i++) {

        data += `<td id="td1"> <img id="img2" src="${array[i].img}" alt="Không load được"> <p>${array[i].price}</p> <button id="button2" onclick="mua(${i})">Mua</button></td>`

    }
    data += "</tr>"
    data += "</table>";
    document.getElementById('display').innerHTML = data;
}

function mua(i) {
    let data = '';
    data += '<table style="width: 100%">';
    data += '<tr>';
    data += '<td>Tên sản phẩm bạn đang mua</td>'
    data += '<td>Hình ảnh sản phẩm</td>'
    data += '<td>Giá tiền một sản phẩm</td>'
    data += '<td>Số lượng bạn muốn mua</td>'
    data += '<td>Tổng số tiền cần thanh toán</td>'
    data += '<td></td>'
    data += '</tr>'
    data += '<tr>'
    data += `<td>${arr[i].name}</td>`
    data += `<td><img src="${arr[i].img}" alt="không load được"></td>`
    data += `<td>${arr[i].price}</td>`
    data += `<td><input type="number" id="soLuongSanPhamCanMua" onchange="tongTien(${i})"></td>`
    data += `<td><p id='result'></p></td>` //hiện tổng số tiền cần thanh toán
    data += `<td><button onclick="thanhToan(${i})">Thanh toán</button></td>`
    data += `<td><button onclick="huyThanhToan(${i})">Huỷ</button></td>`
    data += '</tr>'
    data += '</table>'
    document.getElementById('naptien').innerHTML = data;

}

function huyThanhToan() {
    document.getElementById('naptien').innerHTML = ''
}

function thanhToan(b) {
    let a = document.getElementById('soLuongSanPhamCanMua').value;
    let c = document.getElementById('result').innerHTML;
    c = parseInt(c);
    let d = document.getElementById('sotienhienco').innerHTML;
    d = parseInt(d);
    if (a === '') {
        alert('Hãy nhập số lượng sản phẩm');
    } else if (d < c) {
        alert('Bạn không đủ tiền trong tài khoản, vui lòng nạp thêm tiền!');
        document.getElementById('naptien').innerHTML = '';
    } else {
        let e = confirm(` Bạn đang mua ${a} sản phẩm ${arr[b].name} với tổng số tiền cần thanh toán là: ${c}`);
        if (e) {
            alert('Hãy nhập thông tin để chúng tôi gửi sản phẩm');
            let data = '';
            data += "<table>"
            data += "<tr>"
            data += `<td>Nhập địa chỉ nhận hàng:</td>`
            data += `<td ><input type="text" id="address"></td>`
            data += `<td>Nhập số điện thoại:</td>`
            data += `<td ><input type="number" id="phonenumber"></td>`
            data += `<td>Nhập tên người nhận:</td>`
            data += `<td ><input type="text" id="namexx"></td>`
            data += `<td><button onclick="xacnhan()">Xác nhận</button></td>`
            data += `<td><button onclick="huyXacNhan()">Quay lại</button></td>`
            data += '</tr>'
            data += '</table>'
            document.getElementById('bangThanhToan').innerHTML = data;
        } else {
            document.getElementById('naptien').innerHTML = '';
        }

    }
}

function huyXacNhan() {
    document.getElementById('bangThanhToan').innerHTML = '';
}

function xacnhan() {
    let x = document.getElementById('address').value;
    let y = document.getElementById('phonenumber').value;
    let z = document.getElementById('namexx').value;
    console.log(x)
    console.log(y)
    if (x === '' || y === '' || z === '') {
        alert('Bạn hãy nhập đủ thông tin!')
    } else {
        alert('Bạn đã đặt hàng thành công!')
        let c = document.getElementById('result').innerHTML;
        c = parseInt(c);
        let d = document.getElementById('sotienhienco').innerHTML;
        d = parseInt(d);
        localStorage.setItem('soTienCuaTaiKhoan', d - c);
        document.getElementById('sotienhienco').innerHTML = d - c;
        document.getElementById('naptien').innerHTML = '';
        document.getElementById('bangThanhToan').innerHTML = '';
    }
}

function tongTien(a) {
    let soLuong = document.getElementById('soLuongSanPhamCanMua').value;
    let x = `${arr[a].price}`;
    x = parseInt(x);
    document.getElementById('result').innerHTML = x * soLuong;
}

function naptien() {
    let data = "<table>\n" +
        "    <tr><td>Nhập tên tài khoản ngân hàng:</td><td><input type=\"text\" id=\"bank\"></td></tr>\n" +
        "    <tr><td>Nhập mật khẩu:</td><td><input type=\"password\" id=\"mkbank\"></td></tr>\n" +
        "    <tr><td>Nhập số tiền muốn nạp:</td><td><input type=\"number\" id=\"sotienbank\"></td></tr>\n" +
        "    <tr><td><button  onclick=\"naptienxx()\">NẠP TIỀN</button></td>\n" +
        "    <td><button  onclick=\"thoatnaptien()\">QUAY LẠI</button></td></tr>\n" +
        "  </table>"
    document.getElementById("naptien").innerHTML = data;
}

function thoatnaptien() {
    document.getElementById('naptien').innerHTML = ''
}

function naptienxx() {
    let a = document.getElementById('bank').value;
    let b = document.getElementById('mkbank').value;
    let c = document.getElementById('sotienbank').value;
    let d = parseInt(c);
    let e = localStorage.getItem('soTienCuaTaiKhoan');
    let f = parseInt(e);
    if (a === "1400141228007" && b === "6789" && c !== "" && c !== '0') {
        f += d;
        localStorage.setItem('soTienCuaTaiKhoan', f);
        alert("Bạn đã nạp thành công " + c + " vào tài khoản");
        document.getElementById('naptien').innerHTML = '';
        hinhAnhDangNhap(arr);
    } else if (c === '' || c === '0') {
        alert("Hãy nhập vào số tiền cần nạp")
    } else {
        alert("Thông tin không đúng nha mày!")
    }
}

class Product {
    name;
    img;
    price;

    constructor(name, img, price) {
        this.name = name;
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

let optimus = new Product('Optimus', "optimus.jpg", 1000000);
let bumblebee = new Product("Bumblebee", "bumblebee.jpg", 500000);
let megatron = new Product("Megatron", "megatron.jpg", 900000);
let gavatron = new Product("Gavatron", "gavatron.jpg", 800000);
let nemesis = new Product("Nemesis", 'nemesis.jpg', 1000000);
let grimlock = new Product("Grimlock", 'grimlock.jpg', 700000);
let optimus2 = new Product("Optimus2", 'optimus2.jpg', 1000000)
let arr = [optimus, bumblebee, megatron, gavatron, nemesis, grimlock];