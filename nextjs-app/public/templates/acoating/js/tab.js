jQuery(function ($){
			
			jQuery(".tabContents").hide();
			jQuery(".tabContents:first").show();
			
			jQuery("#tabContainer ul li a").click(function(e){
				e.preventDefault();
				var activeTab = $(this).attr("href");
				jQuery("#tabContainer ul li a").removeClass("active");
				jQuery(this).addClass("active");
				jQuery(".tabContents").hide();
				jQuery(activeTab).fadeIn();
			});
				if (jQuery('#ProOPC').length){
    
	   	jQuery('body').addClass("custom-cart");
	

    }
	
if (jQuery('#sidebar2').length){
       
	   	jQuery('#art-content').removeClass("col-lg-12 col-md-12 col-sm-12 ");
	     jQuery('#art-content').addClass("col-lg-8 col-md-8 col-sm-8 ");
    }
	if (jQuery('#thank-you').length){
       
	   		jQuery('body').addClass("custom-thankyou");
	    
    }
	if (jQuery('#removeheader').length){
       
	   	jQuery('#header').hide();
	 
    }
    
		}); 
