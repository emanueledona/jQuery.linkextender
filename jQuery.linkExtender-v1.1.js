/**
 * jQuery Plugin :: link extender
 * 
 * Copyright (C) 2011  name of author
 * 
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation; either version 2
 * of the License, or (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
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
		,'_ga'				:	false		// google 
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

