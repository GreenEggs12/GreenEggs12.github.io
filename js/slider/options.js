$(document).ready(function() {
					var tpj=jQuery;               // MAKE JQUERY PLUGIN CONFLICTFREE
					tpj.noConflict();
                
                   if (tpj.fn.cssOriginal!=undefined)   // CHECK IF fn.css already extended
                   tpj.fn.css = tpj.fn.cssOriginal;
 
                    tpj('.banner').revolution(
                    						{
						delay:9000,
						startheight:430,
						startwidth:940,
				
						hideThumbs:200,
				
						thumbWidth:100,							// Thumb With and Height and Amount (only if navigation Tyope set to thumb !)
						thumbHeight:50,
						thumbAmount:5,
				
						navigationType:"none",					//bullet, thumb, none, both		(No Thumbs In FullWidth Version !)
						navigationArrows:"verticalcentered",		//nexttobullets, verticalcentered, none
						navigationStyle:"round",				//round,square,navbar
				
						touchenabled:"on",						// Enable Swipe Function : on/off
						onHoverStop:"off",						// Stop Banner Timer at Hover on Slide on/off
				
						navOffsetHorizontal:0,
						navOffsetVertical:20,
				
						stopAtSlide:-1,							// Stop Timer if Slide "x" has been Reached. If stopAfterLoops set to 0, then it stops already in the first Loop at slide X which defined. -1 means do not stop at any slide. stopAfterLoops has no sinn in this case.
						stopAfterLoops:-1,						// Stop Timer if All slides has been played "x" times. IT will stop at THe slide which is defined via stopAtSlide:x, if set to -1 slide never stop automatic
				
				
				
						shadow:0,								//0 = no Shadow, 1,2,3 = 3 Different Art of Shadows  (No Shadow in Fullwidth Version !)
						fullWidth:"off"    
                                                        
                        });
});