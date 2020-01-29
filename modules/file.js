const axios = require('axios')
const Path = require('path')  
const fs = require('fs')



async function downloadF(link,filename) {
		const path = Path.resolve(__dirname, 'Files', filename)
		response = await axios.get(`http://survey-d.dynata.com/api/v1/surveys/selfserve/${link}/files/${filename}`,{
		headers: {'x-apikey': '0m640xsrvkpp41gq1hsq8bqvg9wewd4f7naj3w2rsv7vn5cxfqd7tmuxrgabcy4w',
				  'Content-Type':'application/octet-stream;'},
				  responseType: 'blob'
				
			})
		var getdl = await function(e) {
		  const url = window.URL.createObjectURL(new Blob([e],{ type: 'application/octet-stream;'}));
  		  const link1 = document.createElement('a');
  		  link1.href = url;
  		  link1.setAttribute('download', filename.toString());
  		  document.body.appendChild(link1);
  		  link1.click();
		};

		return getdl(response.data)
}

async function getFiles(link){
	const response = await axios.get(`http://survey-d.dynata.com/api/v1/surveys/selfserve/${link}/files`,{
				headers: {'x-apikey': '0m640xsrvkpp41gq1hsq8bqvg9wewd4f7naj3w2rsv7vn5cxfqd7tmuxrgabcy4w',
						  'Content-Type': 'text/plain',
				          'responseType': 'stream'
				}
			})
	return response;
}


