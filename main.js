let coin = {
    state: 0,
    flip: function() {
        this.state = Number(Math.floor(Math.random() * 2));
        
    },
    toString: function() {
        if (this.state === 0) {
            return "heads"
        }
        else {
            return "tails"
        }
        
    },
    toHTML: function() {
        let image = document.createElement('img');
        
           if (this.state === 0 ) {
               image.src = "./images/heads.jpg"
           }
           else {
               image.src = "./images/tails.jpg"
           }
        
        return image;
    }
    
};
function display20Numbers() {
    for(let i = 1; i < 21; i++) {
      let newDiv = document.createElement('div');
      coin.flip();
      coin.toString();
      console.log(coin.toString())
      newDiv.append(i);
      newDiv.append(" " + coin.toString());
      document.body.append(newDiv);
    }
  }

display20Numbers();

function display20Images() {
    for(let i = 1; i < 21; i++) {
        let newDiv = document.createElement('div');
        coin.flip();
        coin.toHTML();
        console.log(coin.toHTML());
        newDiv.append(i);
        newDiv.append(coin.toHTML());
        document.body.append(newDiv); 
    }
}
display20Images();

