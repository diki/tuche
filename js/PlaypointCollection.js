var PlayPointCollection = Backbone.Collection.extend({
    model: PlayPoint,
    /**
     * URL to make requests
     * @type {String}
     */
    url: "api/FormList",
    
    initiailze: function(){
    }
});