/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
       let arr = s.split("")
   const  tMap = new Map()
   let tlength=0
   for(let i=0;i<t.length;i++){
      if(tMap.has(t[i])){
         tMap.set(t[i],tMap.get(t[i])+1)
      }else{
      tMap.set(t[i],1)}
   }

   tMap.forEach((value, key, map)=>{tlength+=value})
   
   if(tlength!=arr.length){return false}

   for(let j =0;j<arr.length;j++){
      if(tMap.has(arr[j])){
         tMap.get(arr[j])===1? tMap.delete(arr[j]):tMap.set(arr[j],  tMap.get(arr[j])-1)
      }else{
         return false
      }
   }
  return true
};