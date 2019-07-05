const axios = require('axios')

const getCountry = () => {
  return axios.get('https://ip2c.org/s').then(({data}) => {
    // Response: 1;CD;COD;COUNTRY
    const result = (data || '').toString()
  
    if (!result || result[0] !== '1') {
      throw new Error('unable to fetch the country')
    }
  
    return result.substr(2, 2)
  })
}

export default getCountry;
