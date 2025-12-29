
var fieldSetCount = 0;

function fnValidateForm(token){
	if(token){
		$('#btnApply').trigger("click");
	}
}

$(document).on("keypress", function(event){
	if($("#z_s").parent().parent().hasClass("open")){    
		var eventKey = event.key.toLowerCase();
		$("#z_s_div .c-input-select__option").each(function(key, val){
			var $option = $(this);
			var keyValue = $option.attr("data-value");
			if(keyValue.toLowerCase().startsWith(eventKey)){

				var $listDiv = $("#z_s_div");
				
				var optionTop  = $option.offset().top;
				var selectTop = $listDiv.offset().top;
				
				$listDiv.scrollTop($listDiv.scrollTop() + (optionTop - selectTop));
									
				//$('#countriesDDList').animate({ scrollTop: scrollOption }, 200);
				return false;
			}
		});
	};
});	


$(document).ready(function () {
	
	var chkconsent = document.getElementById("checkboxz_g1");	 
	var btnsubmit = document.getElementsByClassName("g-recaptcha o-btn o-btn-medium-red");
	if(btnsubmit[0] !=undefined && chkconsent !=undefined){
		document.getElementsByClassName("g-recaptcha o-btn o-btn-medium-red")[0].disabled=true
	}
	
	
	$("#form-wizard-next").click(function () {
		if(btnsubmit[0] !=undefined && chkconsent !=undefined && chkconsent.checked == false){
			document.getElementsByClassName("g-recaptcha o-btn o-btn-medium-red")[0].disabled =true;
		}
		 
	})
	$("#checkboxz_g1").click(function () {
		if(chkconsent.checked){
			document.getElementsByClassName("g-recaptcha o-btn o-btn-medium-red")[0].disabled =false;
		}
		else{
			document.getElementsByClassName("g-recaptcha o-btn o-btn-medium-red")[0].disabled =true;
		}
	})
	
 
	
	if($("#txtProductCodeMCLP") != null && $("#txtProductCodeMCLP") != undefined && $.trim($("#txtProductCodeMCLP").val()) != ""){
		if($("#application_type") != null && $("#application_type") != undefined && $.trim($("#application_type").val()) == ""){
			$("#application_type").val($("#txtProductCodeMCLP").val());
		}
	}
	
	(function(){
		var url_string = window.location.href;
		var url = url_string.indexOf("thankyou=success");
		//console.log("IIFE");
		if(url != -1){
			$('form#wizard').addClass('hide');
			$('.formsteps').addClass('hide');
			$('.thankyou-step').removeClass('hide');
		}
	})();

	$(".fieldPress").on("keyup", function(){
		var $field = $(this);
		var $fieldIndex = $field.attr("data-index");		
		var hiddenName = "fieldHidden_" + $fieldIndex;
		var $hidden = $("#" + hiddenName)		
		$hidden.attr("value", $field.val() + "~" + $hidden.attr("data-map-name"));
	});
	
	// Input with plus minus
	$('.qtyplus').on('click', function (e) {
		e.preventDefault();
		fieldName = $(this).attr('name');
		var currentVal = parseInt($('.'+fieldName).val());
		if (!isNaN(currentVal)) {
			$('.'+fieldName).val(currentVal + 1);
		} else {
			$('.'+fieldName).val(0);
		}
	});
	
	$(".qtyminus").on('click', function (e) {
		e.preventDefault();
		fieldName = $(this).attr('name');
		var currentVal = parseInt($('.'+fieldName).val());
		if (!isNaN(currentVal) && currentVal > 0) {
			$('.'+fieldName).val(currentVal - 1);
		} else {
			$('.'+fieldName).val(0);
		}
	});
	
	$(".cus_datepicker").each(function(){
		
		var $this_ID = $(this).attr("id");
		var hasTimePick = $("#" + $this_ID).attr("data-style") == "IncludingTimePicker";			
		var _formatDate = hasTimePick ? 'MM/DD/YYYY HH:mm' : 'MM/DD/YYYY';
		
		$('#' + $this_ID).daterangepicker({
			timePicker :  hasTimePick,
			locale : {
				format :  _formatDate
			},
			timePickerIncrement : 30,
			timePicker24Hour : true,
			singleDatePicker: true,
			showDropdowns:true,
			minYear: 2000,
			maxYear: parseInt(moment().format('YYYY'), 10),
			autoUpdateInput: false,
			locale: {
				cancelLabel: 'Clear'
			}
		});
	
		$('#'+ $this_ID).on('apply.daterangepicker', function(ev, picker) {
			$(this).val(picker.startDate.format(_formatDate));
		});

		$('#'+ $this_ID).on('cancel.daterangepicker', function(ev, picker) {
			$(this).val('');
		});
	});
	
	$(".c-input__datepicker").on("show.daterangepicker" , function(){
		$(".hourselect").each(function(){
			$(this).find("option").each(function(){
				if($(this).val() >= 8 && $(this).val() <= 16){
				}else{
					$(this).remove("option");
				}
			})
		})
	})
	
	fieldSetCount = $(".form-fieldset-step").length;

	setTimeout(function () {
		if ($("body").find("div[class='g-recaptcha']").length != 0 && window.grecaptcha != undefined && window.grecaptcha.getResponse()) {
			window.grecaptcha.reset();
		}
	}, 5000);

	var userAgent = navigator.userAgent || navigator.vendor || window.opera;
	
	$(document).on("keydown" , "form" , function(e){
		if(e.which == 13 && e.target.nodeName != "TEXTAREA"){
			e.preventDefault();
			return false;
		}
	});

	// Hemmat code change 27Sep21 - $(".o-btn-medium-red").click(function (e) {

	$("form#wizard .o-btn-medium-red").click(function (e) {
		var _this = $(this);

			 if(_this.attr("id") == "_actionBtn"){
			  return;
			 }

			  if(fieldSetCount == parseInt(_this.attr("data-index")))
			   return true;

		setTimeout(function () {
			if (_this.parent().parent().find(".error").length == 0) {
				$(".formsteps").children().eq(_this.attr("data-index")).addClass("completedstep");

				  if(fieldSetCount != _this.attr("data-index"));{
					  _this.parent().parent().addClass("hide");
					  _this.parent().parent().next().removeClass("hide");
					  $(".c-input-text--captcha").removeClass("error");
					  ScrollToStepByID("LeadFormStep");
				  }

				 if (/android/i.test(userAgent) || /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream || /windows phone/i.test(userAgent)) {
						  ScrollToWizard();
				 }
			}
		}, 150)
	})

	$("#wizard .o-btn-transparent").click(function () {
		if ($("body").find("div[class='g-recaptcha']").length != 0 && window.grecaptcha != undefined && window.grecaptcha.getResponse()) {
			window.grecaptcha.reset();
		}
		$(".formsteps").children().eq($(this).attr("data-index") - 1).removeClass("completedstep")
		$(this).parent().parent().addClass("hide");
		$(this).parent().parent().prev().removeClass("hide");
		if($(this).hasClass('cusfootbtn')){
		  //console.log('WBG calculator back button clicked');
		}else{
		  ScrollToStepByID("LeadFormStep");
		}

		if (/android/i.test(userAgent) || /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream || /windows phone/i.test(userAgent)) {
			ScrollToWizard();
		}
	});

	function ScrollToWizard(){
		var _target = "applynow";
		var target = $("#" + _target);
		target = target.length ? target : $('[name=' + _target + ']');
	
		if (target.length) {
			var scrollTo = target.offset().top <= 0 ? 0 : target.offset().top;
			scrollTo = scrollTo - 105; 
												
			$('html,body').animate({ 
				scrollTop: scrollTo 
			}, 1000);	
	
			return false;
		}
	}

	$('input[data-attr-type="adcb_customer"').click(function(){
		if($(this).val().toLocaleLowerCase() == "yes"){
			$("#customerid").closest(".o-form__field").show();
			$("#customerid").attr("required",true);
		}else{
			$("#customerid").closest(".o-form__field").hide();
			$("#customerid").attr("required",false);
		}
	});

	function ScrollToStepByID(_target){
		//var _target = "";
		var target = $("#" + _target);
		
		if(target != null && target != undefined) {
			target = target.length ? target : $('[name=' + _target + ']');			
			if (target != null && target != undefined && target.length) {
				var scrollTo = target.offset().top <= 0 ? 0 : target.offset().top;
				scrollTo = scrollTo - 105; 
													
				$('html,body').animate({ 
					scrollTop: scrollTo 
				}, 1000);	
			}
			else{
				return false;
			}
		}
		else{
			return false;
		}
	}
});

//Flex Pay - Start - By Sathish

checkStatus();
	
function checkStatus() {
	//console.log("Check Status");
	var flexxpay = document.getElementsByName("ctl00$MainContent$FlexxPay");
	var payroll = document.getElementsByName("ctl00$MainContent$Payroll");
	var _flexxpay = "";
	var _payroll = "";
	var i = 0;
	var j = 0;

	for (i=0; i<flexxpay.length; i++)
	{
		if(flexxpay[i].checked == true)
		{
			_flexxpay = flexxpay[i].id;
		}
	}

	for (i=0; i<payroll.length; i++)
	{
		if(payroll[i].checked == true)
		{
			_payroll = payroll[i].id;
		}
	}

	if(_flexxpay == "radioz_c2" && _payroll == "radioz_d2")
	{
		alert("Please choose 'Yes' either of Signup for FlexxPay/ADCB Pay roll.");
		flexxpay[0].checked = true;
		payroll[0].checked = true;
	}			
}

//Flex Pay - End

//Script - custom radio button - start

$(document).ready(function () {

	CallCustomRadioBtn();

	function CallCustomRadioBtn(){
		if($('input[data-btn-type="custom_radio"') != null){
			$.each($('input[data-btn-type="custom_radio"'), function(index, value){
				var $element = $(this);
				if($element.attr("checked") == "checked"){
					fnCustomRadioBtn($element);
				}
			});
		}
	}

	$('input[data-btn-type="custom_radio"').click(function(){			
		var $this = $(this);
		fnCustomRadioBtn($this);
	});
	
	function fnCustomRadioBtn(optElement){
		if(optElement != null && optElement != undefined){
			var enabledFields = optElement.attr("data-fields-show");
			var fieldsEnableArray = enabledFields.split("~");
			
			if(fieldsEnableArray != null && fieldsEnableArray.length > 0) {
				$.each(fieldsEnableArray, function(index, value){
					if(optElement.val() != null && optElement.val() != undefined && optElement.val().toLowerCase() == "yes"){
						$("#" + value).closest(".o-form__field").show();
						$("#" + value).attr("required",true);
						if($("#" + value).attr("data-field-required") != null && $("#" + value).attr("data-field-required") != undefined && $("#" + value).attr("data-field-required").toLowerCase() == "yes"){
							$("#" + value).attr("required",true);
						}
						else{
							$("#" + value).attr("required",false);
						}
						
						if($("#" + value).closest(".o-form-field").length > 0) {
							$("#" + value).closest(".o-form-field").show();
						}
					}
					else{
						$("#" + value).closest(".o-form__field").hide();
						$("#" + value).attr("required",false);
						
						if($("#" + value).closest(".o-form-field").length > 0) {
							$("#" + value).closest(".o-form-field").hide();
						}
					}
					
					ClearTextFieldValue(value);
				});
			}
		}
	}
});	

//Script - custom radio button - end

function ClearTextFieldValue(value){
	if($("#" + value).attr("data-field-type") != null && $("#" + value).attr("data-field-type") != undefined && $("#" + value).attr("data-field-type") == "text"){
		if($("#" + value).attr("type") != null && $("#" + value).attr("type") != undefined && $("#" + value).attr("type") == "text"){
			$("#" + value).val("");
		}
	}
}

//Script - advanced radio button - start	

$(document).ready(function () {

	CallAdvancedRadioBtn();
	
	function CallAdvancedRadioBtn(){
		if($('input[data-btn-type="advanced_radio"]') != null){
			$.each($('input[data-btn-type="advanced_radio"]'), function(index, value){
				var $element = $(this);
				if($element.attr("checked") == "checked"){
					fnAdvancedRadioBtn($element);
				}
			});
		}
	}
	
	$('input[data-btn-type="advanced_radio"').click(function(){
		var $this = $(this);
		fnAdvancedRadioBtn($this);
	});
	
	function fnAdvancedRadioBtn(optElement){
		if(optElement != null && optElement != undefined){			
			var showFields = optElement.attr("data-show-fields");
			var ShowArray = showFields.split("~");
			
			if(ShowArray != null && ShowArray.length > 0) {
				$.each(ShowArray, function(index, value){
					if(value != null && value != undefined && value != "" && value != "-"){
						$("#" + value).closest(".o-form__field").show();
						if($("#" + value).attr("data-field-required") != null && $("#" + value).attr("data-field-required") != undefined && $("#" + value).attr("data-field-required").toLowerCase() == "yes"){
							$("#" + value).attr("required",true);
						}
						else{
							$("#" + value).attr("required",false);
						}
						ClearTextFieldValue(value);
						
						if($("#" + value).closest(".o-form-field").length > 0) {
							$("#" + value).closest(".o-form-field").show();
						}
					}
				});
			}
			
			var hideFields = optElement.attr("data-hide-fields");			
			var HideArray = hideFields.split("~");
			
			if(HideArray != null && HideArray.length > 0) {
				$.each(HideArray, function(index, value){
					if(value != null && value != undefined && value != "" && value != "-"){
						$("#" + value).closest(".o-form__field").hide();
						$("#" + value).attr("required",false);
						ClearTextFieldValue(value);
						
						if($("#" + value).closest(".o-form-field").length > 0) {
							$("#" + value).closest(".o-form-field").hide();
						}
					}
				});
			}
		}
	}
});

//Script - advanced radio button - end

//Script - Advanced Dropdown button - start	

$(document).ready(function () {

	CallAdvancedDDBtn();
	
	function CallAdvancedDDBtn(){
					
		$.each($('input[data-btn-type="advanced_dd_val"]'), function(index, value){
			var $DDEle = $(this);
			var $DDval = $($DDEle).val();
			if($DDval != "" && $DDval != null && $DDval != undefined) {
				var spanEle = $DDEle.parent().find('span[data-btn-type="advanced_dd"]');
				if(spanEle != null && spanEle != undefined){
					$.each($(spanEle), function(index, value){
						var $element = $(this);
						if($element.attr("data-value") != null && $element.attr("data-value") != undefined){
							if($element.attr("data-value").toLowerCase().trim() == $DDval.toLowerCase().trim()){
								fnAdvancedDDBtn($element);
							}
						}
					});
				}
			}
		});
	}
	
	$('span[data-btn-type="advanced_dd"]').click(function(){
		var $this = $(this);
		fnAdvancedDDBtn($this);
	});
	
	function fnAdvancedDDBtn(optElement){
		if(optElement != null && optElement != undefined){			
			var showFields = optElement.attr("data-show-fields");
			var ShowArray = showFields.split("~");
			
			if(ShowArray != null && ShowArray.length > 0) {
				$.each(ShowArray, function(index, value){
					if(value != null && value != undefined && value != "" && value != "-"){
						$("#" + value).closest(".o-form__field").show();
						if($("#" + value).attr("data-field-required") != null && $("#" + value).attr("data-field-required") != undefined && $("#" + value).attr("data-field-required").toLowerCase() == "yes"){
							$("#" + value).attr("required",true);
						}
						else{
							$("#" + value).attr("required",false);
						}
						ClearTextFieldValue(value);
						
						if($("#" + value).closest(".o-form-field").length > 0) {
							$("#" + value).closest(".o-form-field").show();
						}
					}
				});
			}
			
			var hideFields = optElement.attr("data-hide-fields");			
			var HideArray = hideFields.split("~");
			
			if(HideArray != null && HideArray.length > 0) {
				$.each(HideArray, function(index, value){
					if(value != null && value != undefined && value != "" && value != "-"){
						$("#" + value).closest(".o-form__field").hide();
						$("#" + value).attr("required",false);
						$("#" + value).removeClass("error");
						ClearTextFieldValue(value);
						
						if($("#" + value).closest(".o-form-field").length > 0) {
							$("#" + value).closest(".o-form-field").hide();
						}
					}
				});
			}
		}
	}
});

//Script - Advanced Dropdown button - end
