//CREACION DE MODELOS CON VISTA HACIA A TARS
var Song = Backbone.Model.extend({
    initialize: function () {
        console.log("Eso es mio");
    }
});
var song1 = new Song();

/////////////////////////////

var Song = Backbone.Model.Extend();
var song = new Song();
//debemos usar los metodos set y get para definir o tomar atrributos 
song.set("id", 1);
//podemos pasar un objeto para varios atributos
song.set({
    title: "Solo en muhama",
    artist: "Francisco",
    publishYear: 1999
});

//////////////////////////////////////////
var Song = Backbone.Model.extend();
var song = new Song({
    id: 1,
    title: "hacuna matata",
    publishYear: 1999

});

//para llamar un atributo 
song.get("tittle");
//para eliminar algun atributo
song.unset("title");
//para eliminar todos los atributos de un modelo
song.clear();

//para preguntarle a backbone si el modelo tiene algun atributo
//asignado colocamos has
song.has("tittle");// si es cierto retornara true sino false

//puede ser que cuando creamos nuestro modelo queramos que tenga attributos por defecto
var Song = Backbone.Model.Extend({
    defaults: {
        genero: "pop"
    }
});
var song = new Song();


//////VALIDACION DE ATRIBUTOS
//cuando creamos atributos backbone lalmara a este metodo siempre
//y si no colocamos el tittle nos dira que es required
var Song = Backbone.Model.extend({
    validate: function (atributos) {
        if (!atributos.tittle) {
            return "the tittle is required"
        }
    }
})

var song = new Song();

//como no le colocamos tittle deberia decir que el objeto es no valido
//para preguntar si es valido
song.isValid();
//deberia devolver false; y para saber porque no es valido el object colcamos
var error = song.validationError;
//deberia devolver el mensaje que creamos anteriormente the tittle is  required!
//para pasarlo a vbalido se le puede agregar con los metodos anteriores


//AHORA HEREDEMOS METODOS ENTRE OBJETOS

var Animal = Backbone.Model.extend({
    walk: function () {
        console.log("El animal esta caminando")
    }
})
var Dog = Animal.extend();
var dog = new Dog();
dog.walk();

//en esta parte saldra animalcaminando porque no definimos el metodo en dog sino que heredo de animal
//para sustituir un metodo en una clase base colocamos

var Dog = new Animal.extend({
    walk: function () {
        console.log("thhe dog is walking")
    }
});
//ahi estamos haciendo caminar al perro heredando el metodo walk de animal
//pero estamos sobreescribiendo el metodo padre, para que figuren los dos colocamos

var Dog = new Animal.extend({
    walk: function () {
        Animal.prototype.walk.apply(this);
        console.log("thhe dog is walking")
    }
});
//en este caso si figuraran los dos metodos animal y dog walking

//para ver las llaadas al servidor ver video 15

//PARA CREAR COLLECCIONES

var Song = Backbone.Model.extend();

// la primera manera de crear colleciones es:
var Songs = Backbone.Collection.extend({
    model: Song
});




