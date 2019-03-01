var expect = chai.expect;

describe("Transformación de Arábico a Romano", function() {
  context(
    "Busca los número literales dentro del objeto",
    function() {
      it("1 -> I", function() {
        expect(arabicoARomano(1)).to.be.equal("I");
      });

      it("5 -> V", function() {
        expect(arabicoARomano(5)).to.be.equal("V");
      });

      it("10 -> X", function() {
        expect(arabicoARomano(10)).to.be.equal("X");
      });

      it("50 -> L", function() {
        expect(arabicoARomano(50)).to.be.equal("L");
      });

      it("100 -> C", function() {
        expect(arabicoARomano(100)).to.be.equal("C");
      });

      it("500 -> D", function() {
        expect(arabicoARomano(500)).to.be.equal("D");
      });

      it("1000 -> M", function() {
        expect(arabicoARomano(1000)).to.be.equal("M");
      });
    }
  );
  context(
    " Busco numeros de caso especial",
    function() {
      it("4 -> IV", function() {
        expect(arabicoARomano(4)).to.be.equal("IV");
      });

      it("9 -> IX", function() {
        expect(arabicoARomano(9)).to.be.equal("IX");
      });
    }
  );
  context(
    " Busco enteros combinados con igual simbolo",
    function() {
      it("2 -> II", function() {
        expect(arabicoARomano(2)).to.be.equal("II");
      });

      it("3 -> III", function() {
        expect(arabicoARomano(3)).to.be.equal("III");
      });
      it("20 -> XXX", function() {
        expect(arabicoARomano(20)).to.be.equal("XX");
      });

      it("30 -> XXX", function() {
        expect(arabicoARomano(30)).to.be.equal("XXX");
      });

      it("300 -> CCC", function() {
        expect(arabicoARomano(300)).to.be.equal("CCC");
      });

      it("2000 -> MM", function() {
        expect(arabicoARomano(2000)).to.be.equal("MM");
      });

      it("3000 -> MMM", function() {
        expect(arabicoARomano(3000)).to.be.equal("MMM");
      });

    });
    context(
      " Busco enteros combinados con distinto simbolo",
      function() {
      it("8 -> VIII", function() {
        expect(arabicoARomano(8)).to.be.equal("VIII");
      });

      it("13 -> XIII", function() {
        expect(arabicoARomano(13)).to.be.equal("XIII");
      });


      it("25 -> XXV", function() {
        expect(arabicoARomano(25)).to.be.equal("XXV");
      });

      it("85 -> LXXXV", function() {
        expect(arabicoARomano(85)).to.be.equal("LXXXV");
      });

      it("150 -> CL", function() {
        expect(arabicoARomano(150)).to.be.equal("CL");
      });

      it("650 -> DCL", function() {
        expect(arabicoARomano(650)).to.be.equal("DCL");
      });

    }
  );
});
