const axios = require('axios')
console.log("Đang lấy dữ liệu, xin vui lòng chờ...")
function getCovidData() {
    return new Promise ((resolve, reject) => {
        const response = axios.get('https://api.covid19api.com/summary')
        resolve(response)
    })
}
getCovidData()
    .then(response => {
        const data = response.data;
        console.log("Đã lấy dữ liệu thành công, đang xuất thống kê:")
        console.log("Dữ liệu Covid hôm nay:")
        console.log("Nhiễm mới:", data.Global.NewConfirmed,
            "- Số người chết mới:", data.Global.NewDeaths,
            "- Tổng số người chết:", data.Global.TotalDeaths)
        // Quốc Gia có số lượng tổng cộng người chết nhiều nhất
        const dataCountries = data.Countries;
        const theMostTotalDeaths = Math.max.apply(null, dataCountries.map(function (country) { return country.TotalDeaths; }));
        const countryHighestDeathRate = dataCountries.find(function (e) {
            return e.TotalDeaths == theMostTotalDeaths
        });
        console.log(`Quốc Gia có số lượng tổng cộng người chết nhiều nhất là: ${countryHighestDeathRate.Country}, (${theMostTotalDeaths} người)`);

        // Quốc Gia có số lượng người mắc mới trong ngày nhiều nhất
        const highestNewConfirmed = Math.max.apply(null, dataCountries.map(function (o) { return o.NewConfirmed; }));
        const countryHighestNewConfirmed = dataCountries.find(function (e) {
            return e.NewConfirmed == highestNewConfirmed
        });
        console.log(`Quốc Gia có số lượng người mắc mới trong ngày nhiều nhất là: ${countryHighestNewConfirmed.Country}, (${highestNewConfirmed} người)`);
    })
    .catch(error => {
        console.log("err", error)
        console.log('Loaded Covid Data Fail!')
    })