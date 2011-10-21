/**
 * jQuery Plugin :: link extender
 * 
 * @version 1.1
 * @author	Emanuele Donà
 * @description This plugin extends the selected link to all
 * the container box to improve the usability of the site 
 * and increase accessibility.
 *
 * @usage example
 * $(.classContainer).linkExtender({
 * 		'_targetLinkClass' : 'targetLink' 
 * })
 */
(function($) {

 $.fn.linkExtender = function(settings) { 
     var config = { 
   	  	'_targetBlank'		:	false		// open in new window the link
		,'_disableLink'		:	true		// disable the source link function
		,'_targetLinkClass'	:	false		// return the link with the specific class 
     };

   if (settings) $.extend(config, settings);

   this.each(function(){
	   $(this).css('cursor','pointer')
	   if(config._targetLinkClass) if(config._disableLink) $(this).find('a.'+config._targetLinkClass).click(function(e){ e.preventDefault(); })
	   else if(config._disableLink) $(this).find('a').click(function(e){ e.preventDefault(); })
	   $(this).click(function(){
		   if(config._targetLinkClass) var link = $(this).find('a.'+config._targetLinkClass).attr('href')
		   else var link = $(this).find('a').attr('href') 
		   if(config._targetBlank) window.open(link)
		   else window.location=link
	   })
   });

   return this;

 };

})(jQuery);

