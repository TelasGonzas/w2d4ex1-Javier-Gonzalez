const checkVowels = (word) => {
  const vowels = ["a", "e", "i", "o", "u"];
  return vowels.every((vowel) => word.includes(vowel));
};

const checkEvens = (number) => {
  if (number % 2 === 0) {
    return true;
  }

  return false;
};

const checkPrime = (number) => {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) return false;
  }

  return true;
};

export default {
  checkVowels,
  checkEvens,
  checkPrime,
};
