var x = {
    fname:'Rabi',
    fun : function(){
        console.log(this.fname);//herre this ia a object of x
        
    }
}
// x.fun();

var y ={
    fname:'great'
}

x.fun.call(y); //here is the function call the var y by using a call by declaring y as object 