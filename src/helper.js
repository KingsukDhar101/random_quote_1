export let getColor = ()=>{
  const hex = [0,1,2,3,4,5,6,7,8,9, 'A', 'B', 'C', 'D', 'E', 'F'];
  let hex_key = '#';
  for(let i=0; i<6; i++){
    const index = Math.floor(Math.random() * hex.length);
    hex_key += hex[index];
  }
  return hex_key;
}

