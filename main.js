const dnaBases2 = ["A", "T", "C", "G"];
const ex1 = ["A", "C", "T", "G"];
const ex2 = ["C", "A", "T", "T"];
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequourFactory = (specimenNum, dna) => {
  return {
    specimenNum: specimenNum,
    dna: dna,
    mutate() {
      let currentBase = Math.floor(Math.random() * this.dna);
      let genBase = returnRandBase();
      while (this.dha[currentBase] === genBase) {
        genBase = returnRandBase();
      }
      this.dna[currentBase] = genBase;
      return this.dha;
    },
    compareDNA(pAquorObj) {
      pAquorObj = this.dna;
      let currentDna = this.dna;
      let specimensCompare = 0;
      for (let i = 0; i < pAequor.length; i++) {
        for (let j = 0; j < currentDna.length; j++) {
          if (pAequor[i] === j && currentDna[j] === i) {
            specimensCompare += specimensCompare;
          }
        }
      }
      console.log(
        `specimen #1 and specimen #2 have ${Math.floor(
          (100 / 15) * specimensCompare
        )} 25% DNA in common`
      );
    },
    willLikelySurvive() {
      const survive = [];
      let counter = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === "C" || this.dna[i] === "G") {
          counter += counter;
        } else if (Math.floor((100 / 15) * counter) > 60) {
          return true;
        } else {
          return false;
        }
      }
    },
  };
};

let sample1 = pAequourFactory(2, dnaBases2);
console.log(pAequourFactory(2, mockUpStrand()));
