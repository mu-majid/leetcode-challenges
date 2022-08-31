var isAnagram = function(s, t) {
  if(s.length !== t.length || !s || !t) return false;
  
  return s.split('').sort().join('') === t.split('').sort().join('');
};