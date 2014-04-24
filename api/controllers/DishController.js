/**
 * DishController.js 
 *
 * @description ::
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {

	addDishToMenu: function(req,res,next){
	    Menu.findOne(req.param('menu')).populate('dishes').exec(function(err,bean){
	        if(err) return next(err);
	        if(!bean) return next();
	        bean.dishes.add(req.param('dish'));            
	        bean.save(function(err) {
	            if(err) return next(err);
	            res.redirect('/menu');
	        })
	    })
	},

	removeDishFromMenu: function(req,res,next){
	    Menu.findOne(req.param('menu')).populate('dishes').exec(function(err,bean){
	        if(err) return next(err);
	        if(!bean) return next();
	        bean.dishes.remove(req.param('dish'));
	        bean.save(function(err) {
	            if(err) return next(err);                
	            res.redirect('/menu/');
	        })
	    })
	}
	
};
