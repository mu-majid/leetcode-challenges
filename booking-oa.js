function awardTopKHotels(positiveKeywords, negativeKeywords, hotelIds, reviews, k) {
  let n = reviews.length;
  let result = [];
  const posWords = positiveKeywords.split(' ');
  const negWords = negativeKeywords.split(' ');
  const hotels = new Map();

  for (let i = 0; i < n; i++) {
    let hotelId = hotelIds[i];
    let review = reviews[i];
    let hotelScore = 0;

    for (const w of posWords) {
      // use regex:global, ignorecase
      const exp = new RegExp(w, 'gi');
      const matches = review.match(exp);
      if (matches) {
        hotelScore += (matches.length * 3)
      }
    }

    for (const w of negWords) {
      // use regex:global, ignorecase
      const exp = new RegExp(w, 'gi');
      const matches = review.match(exp);
      if (matches) {
        hotelScore -= matches.length;
      }
    }

    if (hotels.has(hotelId)) {
      hotels.set(hotelId, hotels.get(hotelId) + hotelScore);
    }
    else {
      hotels.set(hotelId, hotelScore);
    }
  }

  result = [...hotels.entries()]
    .sort((a, b) => b[1] - a[1]) // descending order
    .map(([a, b]) => a) // getting only key
    .slice(0, k) // choosing only top k hotels

  return result;
}



function awardTopKHotels(positiveKeywords, negativeKeywords, hotelIds, reviews, k) {
  const posWordsSet = new Set();
  const negWordsSet = new Set();
  for (const word of positiveKeywords.split(" ")) {
    posWordsSet.add(word.toLowerCase());
  }
  for (const word of negativeKeywords.split(" ")) {
    negWordsSet.add(word.toLowerCase());
  }

  const hotelsScore = new Map();

  for (let i = 0; i < reviews.length; i++) {
    let hotel = hotelIds[i];
    let score = hotelsScore.get(hotel) || 0;
    const review = reviews[i].split(" ");
    let posCounter = 0;
    let negCounter = 0;
    for (let word of review) {
      if (word[word.length - 1] === '.' || word[word.length - 1] === ',') {
        word = word.slice(-1); // trim . or ,
      }
      if (posWordsSet.has(word.toLowerCase())) {
        posCounter += 1;
      }
      if (negWordsSet.has(word.toLowerCase())) {
        negCounter += 1;
      }
    }

    hotelsScore.set(hotel, score + ((3 * posCounter) - negCounter));
  }

  const result = [...hotelsScore.entries()]
    .sort((a, b) => b[1] - a[1]) // descending order
    .map(([a, b]) => a) // getting only key
    .slice(0, k) // choosing only top k hotels

  return result;
}

function findLargestSquareSize(samples) {
  const columns = samples[0].length;
  const rows = samples.length;

  let result = 0;

  // the idea is th bottom right corner will be the size of the largest submatrix
  /**
   * 1 1 
   * 1 1
   * Dyn Arr
   * 1 1
   * 1 2
   */
  const dynProgArr = Array.from(Array(rows), _ => Array(columns).fill(0));

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (i === 0 || j === 0) {
        dynProgArr[i][j] = samples[i][j]; // base case: copy element as it is
      }
      else {
        if (samples[i][j] === 0) {
          dynProgArr[i][j] = 0 // no submatrix could not be formed
        }
        else {
          // min(top, left, top-left)
          dynProgArr[i][j] = 1 + Math.min(
            dynProgArr[i][j - 1],
            dynProgArr[i - 1][j - 1],
            dynProgArr[i - 1][j]
          );
          result = Math.max(result, dynProgArr[i][j]);
        }
      }
    }
  }

  return result;
}

function countDuplicate(numbers) {
  // hash table { element: count }
  const countMap = new Map();
  let duplicates = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (countMap.has(numbers[i])) {
      countMap.set(numbers[i], countMap.get(numbers[i]) + 1);
    }
    else {
      countMap.set(numbers[i], 1);
    }
  }
  console.log(countMap)
  for (let i = 0; i < numbers.length; i++) {
    if (countMap.get(numbers[i]) > 1) {
      duplicates = duplicates + 1;
      countMap.set(numbers[i], 0);
    }

  }

  return duplicates;
}