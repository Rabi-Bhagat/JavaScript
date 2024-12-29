var obj = {
    name : 'rabi',
    age : 22,
    from : 'nepal',
    fun : function(){
        // console.log(this); // it prints the whole object due to the use of this
        console.log(this.from); //output nepal
        
    }
}
obj. fun();