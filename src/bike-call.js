export class BikeInfo {
  async getStolenBikeInfo(zipCode) {
    try {
      let response = await fetch(`https://bikeindex.org:443/api/v3/search?page=1&per_page=25&location=${ zipCode }&distance=300&stolenness=proximity`);
      let jsonifiedResponse;
      if (response.ok && response.status == 200) {
        jsonifiedResponse = await response.json();
      } else {
        console.log(response.statusText);
        // jsonifiedResponse = false;
      }
      return jsonifiedResponse;
    } catch(error) {
      return false;
    }
  }
}