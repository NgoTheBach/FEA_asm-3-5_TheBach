// con_tho_an_co: ( cộng 1 tiếng - timeout: 1s) => con_tho_di_xem_phim: ( cộng 2 tiếng - timeout: 2s) 
//=> con_tho_di_dao: ( cộng 1 tiếng - timeout: 1s) => OUTPUT:
// Con thỏ ăn cỏ lúc: 19h
// Con thỏ ăn xong lúc: 20h
// con thỏ đi xem phim xong lúc 22h
// con thỏ đi dạo xong lúc: 23h
// Tổng cộng thơi gian đi chơi là 4 tiếng

const gioBatDauDi = 19;
let gioHienTai

function con_tho_an_co(hanhDongSauKhiAnCo){
    setTimeout(() => {
        console.log('Con tho an co luc', gioBatDauDi,'H')
        console.log('Con tho an xong luc', gioHienTai = gioBatDauDi + 1,'H')
        hanhDongSauKhiAnCo()
    }, 1000)
}

function di_xemphim(hanhDongSauKhiXemPhim){
    setTimeout(() => {
        console.log('Con tho di xem phim xong luc', gioHienTai = gioHienTai + 2,'H')
        hanhDongSauKhiXemPhim()
    }, 2000)
}

function di_dao(){
    setTimeout(() => {
        console.log('Con tho di dao xong luc', gioHienTai = gioHienTai + 1,'H')
    }, 1000)
}

//Callback
con_tho_an_co(() => {
    di_xemphim (di_dao)
})