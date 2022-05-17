const axios = require('axios')
async function getCovidData() {
    try {
        const response = await axios.get('https://api.covid19api.com/summary')
        // console.log(response)
        return response
    } catch (error) {
        console.error(error);
    }
}

async function main() {
    console.log('Loading Covid Data...')
    const response = await getCovidData();
    const data = response.data;
    console.log("Đã lấy dữ liệu thành công, đang xuất thống kê:")
    console.log("Dữ liệu Covid hôm nay:")
    // console.log("response",response.data.Global)
    console.log("Nhiễm mới:", data.Global.NewConfirmed,
        "- Số người chết mới:", data.Global.NewDeaths,
        "- Tổng số người chết:", data.Global.TotalDeaths)
    // Quốc Gia có số lượng tổng cộng người chết nhiều nhất
    const dataCountries = data.Countries;
    const theMostTotalDeaths = Math.max.apply(null, dataCountries.map(function (o) { return o.TotalDeaths; }));
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
    console.log('Loaded Covid Data Successfully')
}
main()