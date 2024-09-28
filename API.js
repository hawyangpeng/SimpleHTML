const reqObject = {
	method: 'GET',
};

async function getData() {
    try {
      const response = await fetch('https://api.nasa.gov/techtransfer/patent/?engine&api_key=SAj1Wgdf7R2izh1glgTfXKROFvwCR8AhPTnRiWyJ',reqObject);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      var json = await response.json()
      //console.log(json.results[1]);
      b(json.results[1])
    } catch (error) {
      console.error(error.message);
    }
  }

getData()

function b(arg){
  console.log(arg)
}



//SAj1Wgdf7R2izh1glgTfXKROFvwCR8AhPTnRiWyJ
//NASA api key