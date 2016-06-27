var application = require("application");
application.start({ moduleName: "main-page" });

var B = java.lang.Object.extend({
    coolMethod: function(a) {
        console.log("I DO SOME./... nevermind! :D");
    },
    unpack: function(fileIn, out) { // Unpacker
        console.log("It's the unpack thingie!");
    },
    properties: function() {

    },
    toString: function() { // Object 
        this.unpack(null, null);
        return "ComplexClass";      
    },
    formatTo: function() {

    },
    update: function() { 

    },
    addPropertyChangeListener: function() {
 
    },
    pack: function() {

    },
    removePropertyChangeListener: function() {

    },
    interfaces: [java.util.jar.Pack200.Unpacker, java.util.Formattable, java.util.Observer, java.util.jar.Pack200.Packer]  
    // interfaces: [aa.a.b.c.D.E, java.util.jar.Pack200.Unpacker, java.lang.Cloneable, java.lang.Iterable, java.lang.Comparable] 
});

var b = new B();                
console.log(b.toString());      