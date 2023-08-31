/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
   let arr = ransomNote.split("")
   const  ransomNoteMap = new Map()
   for(let i=0;i<magazine.length;i++){
      if(ransomNoteMap.has(magazine[i])){
         ransomNoteMap.set(magazine[i],ransomNoteMap.get(magazine[i])+1)
      }else{
      ransomNoteMap.set(magazine[i],1)}
   }

   for(let j =0;j<arr.length;j++){
      if(ransomNoteMap.has(arr[j])){
         ransomNoteMap.get(arr[j])===1? ransomNoteMap.delete(arr[j]):ransomNoteMap.set(arr[j],  ransomNoteMap.get(arr[j])-1)
      }else{
         return false
      }
   }
  return true
};