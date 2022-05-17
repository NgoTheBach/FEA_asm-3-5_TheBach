const gioBatDauDi = 19;
let gioHienTai

function con_tho_an_co(){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            const duocDiChoi = Math.random() >= 0.2;
            if(duocDiChoi){
                console.log('Con tho an co luc', gioBatDauDi,'H')
                console.log('Con tho an xong luc', gioHienTai = gioBatDauDi + 1,'H')
                resolve(gioHienTai)
            }
            else{
                reject('Khong duoc di')
            }
        }, 1000)
    })
}

function di_xemphim(){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            console.log('Con tho di xem phim xong luc', gioHienTai = gioHienTai + 2,'H')
            resolve(gioHienTai)
        }, 2000)
    }) 
}

function di_dao(){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            console.log('Con tho di dao xong luc', gioHienTai = gioHienTai + 1,'H')
            resolve(gioHienTai)
        }, 1000)
    })
}

con_tho_an_co(gioBatDauDi)
.then(() => {
    return di_xemphim()
})
.then(() => {
    return di_dao()
})
.catch((lyDoKhong) => {
    console.log(lyDoKhong)
})