

 function readData(path: string) {   
   const data = fetch(path).then((res) => res.text());
   return data;
  };


export default readData;