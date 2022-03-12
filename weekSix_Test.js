   var expect = chai.expect;

   describe('My Functions', function(){
       describe('#gamePlay', function() {
        it('It should return an object', function(){
            var x = gamePlay()
            expect(x).to.be.a("object");
        })
        
        it('It should return a player', function(){
            var x = gamePlay()
            expect(x).to.be.instanceOf(Player);
        }) 

       })
   })
