$(document).ready(function() {
	if($("#sel_user_auto").length!=0)
		$("#sel_user_auto").autocomplete({
				  source: "/pages/payment_declaration_manager_select_user",
				  minLength: 2
		});
	if ($('#id_make').length == 1 && $('#not_back').length == 0) {
		$('#id_make').val("");
	}
    //block emails in price profile
    $('.view_more').click(function(){
        $(this).toggleClass('hide_more');
        $("tr[id^=email_profile_]").toggle();
        return false;
    });
    $('#user_phone').mask("(099)999-99-99",{placeholder:"_"});
    $('#user_phone_popup').mask("(099)999-99-99",{placeholder:"_"});
    $('.phone_mask').mask("(099)999-99-99",{placeholder:"_"});
    
//    $("#select_name_user").searchable({
//    	maxListSize: 50,
//    	maxMultiMatch: 25,
//    	wildcards: true,
//    	ignoreCase: true,
//    	latency: 1000,
//    	warnNoMatch: 'no matches ...',
//    	zIndex: 'auto'
//    	});
    
    // Показать / Скрыть панель параметров
    $(".filter-subheader").click(function() {
        var $link = $(this);
        $link.toggleClass('active').next('.filter-panel').slideToggle();
        //return false;
    });
    // Показать скрытые элементы
    $(".show-others").click(function() {
        var $link = $(this);
        $link.parent().parent().find('.checkbox-list .hidden').fadeToggle().css('display','block');
        return false;
    });
    $(".block-filter .caption").click(function() {
        var $link = $(this);
        $link.next('.labels-list').toggleClass('hide');
        $link.toggleClass('collapsed')
        //return false;
    });
    // редактирование поля
    $('img[id^=img_edit_comment_').click(function(){
        $("div[id^=div_edit_comment]").hide();
        $("img[id^=img_save_comment]").hide();
        $("img[id^=img_edit_comment]").show();
        if ($("img[id^=img_del_comment]").length)
        	$("img[id^=img_del_comment]").show();
        $mass=$(this).attr('id').split('_');
        $("div[id=div_edit_comment_"+$mass[3]+"]").show();
        $("img[id=img_save_comment_"+$mass[3]+"]").show();
        $("img[id=img_edit_comment_"+$mass[3]+"]").hide();
        return false;
    });
    
    $('img[id^=img_edit_otp_').click(function(){
        $("div[id^=div_edit_otp]").hide();
        $("img[id^=img_save_otp]").hide();
        $("img[id^=img_edit_otp]").show();
        if ($("img[id^=img_del_otp]").length)
        	$("img[id^=img_del_otp]").show();
        $mass=$(this).attr('id').split('_');
        $("div[id=div_edit_otp_"+$mass[3]+"]").show();
        $("img[id=img_save_otp_"+$mass[3]+"]").show();
        $("img[id=img_edit_otp_"+$mass[3]+"]").hide();
        return false;
    });
    // comment_hand cart
    $('img[id^=img_edit_ch_').click(function(){
        $("div[id^=div_edit_ch]").hide();
        $("img[id^=img_save_ch]").hide();
        $("img[id^=img_edit_ch]").show();
        $mass=$(this).attr('id').split('_');
        $("div[id=div_edit_ch_"+$mass[3]+"]").show();
        $("img[id=img_save_ch_"+$mass[3]+"]").show();
        $("img[id=img_edit_ch_"+$mass[3]+"]").hide();
        return false;
    });
	$('a.alltypes').click(function() {
		if ($(this).parent().find('.hidden').length > 0) {
			$(this).find('#state_show_all').hide();
			$(this).find('#state_hide_all').show();
		}
		else {
			$(this).find('#state_show_all').show();
			$(this).find('#state_hide_all').hide();
		}
		$(this).parent().find('.hiddened').toggleClass('hidden');
	});
	$(".check_all").click(function(){
        this_check = $(this).prop('checked');

        if (this_check) {
            $(".js-checkbox").prop('checked', true);
            $(".js-checkbox").parent('span').addClass('checked');
        } else {
            $(".js-checkbox").prop('checked', false);
            $(".js-checkbox").parent('span').removeClass('checked');
        }
    });
})

// ---------------------------------------------------------------------------- select#ctlMakeOwnAuto
function change_MakeAuto(element){
	$.getJSON("/?action=own_auto_json_get",{id_make: $(element).val()}, function(j){
		name = 'Choose model';
		if ($("#MakeAuto_select").val() != undefined)
			name = $("#MakeAuto_select").val();
		var options = '<option value="0">'+name+'</option>';
		for (var i = 0; i < j.length; i++) {
			options += '<option value="' + j[i].id + '">' + j[i].name + '</option>';
		}
		$("#ctlModelOwnAuto").html(options);
		$("#ctlModelDetailOwnAuto").html("");
	})
}
//----------------------------------------------------------------------------- select#ctlModelOwnAuto
function change_DetailAuto(element){
	$.getJSON("/?action=own_auto_json_get",{id_model: $(element).val(), id_make: $('#ctlMakeOwnAuto').val()}, function(j){
		name = 'Choose model';
		if ($("#DetailAuto_select").val() != undefined)
			name = $("#DetailAuto_select").val();
		var options = '<option value="0">'+name+'</option>';
		for (var i = 0; i < j.length; i++) {
			options += '<option value="' + j[i].id + '">' + j[i].name + '</option>';
		}
		$("#ctlModelDetailOwnAuto").html(options);
	})
}
//-----------------------------------------------------------------------------
function place_cursor()
{
	try {
		if (document.forms[0] && document.forms[0][0])	document.forms[0][0].focus();
	} catch(err) {}
}
//-----------------------------------------------------------------------------
function print(form_id)
{
	var print_form=document.forms[form_id];
	if (print_form)
	{
		print_form.elements["print_button"].click();
	}
	else alert("Form "+form_id+" not found.");
}
//-----------------------------------------------------------------------------
function change_form_action(form_id,new_value)
{
	var form=document.forms[form_id];
	if (form)
	{
		form.elements["action"].value=new_value;
		form.submit();
	}
	else alert("Form "+form_id+" not found.");
}
//-----------------------------------------------------------------------------
function show_hide(layer,value){
	blok=document.getElementById(layer);
	if(blok){
		if(blok.style.display == 'none' || value=='block'){
			blok.style.display = 'block';
		}else{
			blok.style.display = 'none';
		}
	}

	// Bug for hiding selects
	//	if (mg) {
	//		var NewState='';
	//		if (value=='inline') NewState='hidden';
	//		general.ShowHideElement(NewState);
	//	}
}
//-----------------------------------------------------------------------------
function progressName(percent, $element) {
    var progressBarWidth = percent * $("div[name='"+$element+"']").width() / 100;
    $("div[name='"+$element+"']").find("div").animate({ width: progressBarWidth }, 500).html(percent + "%&nbsp;");
}
//-----------------------------------------------------------------------------
function refresh_queue() {
	$(document).ready(function() {
		xajax_process_browse_url("/?action=price_refresh_queue");
	});
}
//-----------------------------------------------------------------------------
function check_state() {
		if ($("input[name=check_order]") != undefined && $('#get_own_auto') != undefined) {
			val = $('input:radio[name="check_order"]:checked').val();
			if (val == 1){
				valAuto = $("input[name=own_auto_id]").val();
				if (valAuto == 0){
					$('#get_own_auto').removeClass("ownautopanel");
					$('#get_own_auto').addClass("ownautopanel_req");
				}
			}
			else {
				$("input[name=own_auto_id]").val('0');
				$('#get_own_auto').val($("input[name=own_auto_empty_txt]").val());
				$('#get_own_auto').removeClass("ownautopanel_req");
				$('#get_own_auto').addClass("ownautopanel");
			}
		}
}
//-----------------------------------------------------------------------------
function select_auto(str,id) {
	//$('input:radio[name="chk_order"]').filter('[value="1"]').attr('checked', true);
	//$('#get_own_auto').val(str);
	$('input#checkout_check_yes.js-radio').prop('checked',true);
	$.uniform.update();
	$('#get_own_auto').html(str);
	$("input[name=own_auto_id]").val(id);
	$('.js-popup-ownauto').fadeOut('slow');
}
//-----------------------------------------------------------------------------
function set_checked_auto($element,val) {
	xajax_process_browse_url('?action=manager_set_checked_auto&id='+$element.id+'&val='+val);
	if (val == 1) {
		flag = 0;
		$('#'+$element.id+':first a').html('<img src="/image/design/sel_chk.png"></img>');
	}
	else {
		flag = 1;
		$('#'+$element.id+':first a').html('<img src="/image/design/not_sel_chk.png"></img>');
	}
	
	$("#"+$element.id).attr("onClick","set_checked_auto(this,'"+flag+"')");
	return false;
}
//-----------------------------------------------------------------------------
function cart_shipment_submit($element) {
	val = $('input:radio[name="chk_order"]:checked').val();
	if ($("input[name=own_auto_id]").val() == 0 && val == 1) {
		alert($('#error_auto').val());
		return false;
	}
	$element.form.submit();
	return true;
}
//-----------------------------------------------------------------------------
function add_auto_form() {
	$('#list_auto').hide();
	$('#add_form_auto').show();
	$('div.pt-popup-block .block .content').css("max-height","460px");
}
//-----------------------------------------------------------------------------
function popup_submit($element) {
	var ErrMsg='';
	
	// check correct fill fields
	vin = $('[name="data[vin]"]').val();
	
	vin = vin.replace(/ /g,'');
	if (vin.length<17) ErrMsg=ErrMsg+$("#add_auto_17symbol").val()+"\n";

	model = $('#ctlModelOwnAuto').val();
	if (model == null || model == 0) ErrMsg=ErrMsg+$("#add_auto_model_empty").val()+"\n";
	
	modyfication = $('#ctlModelDetailOwnAuto').val();
	if (modyfication == null || modyfication == 0) ErrMsg=ErrMsg+$("#add_auto_modyfication_empty").val()+"\n";

	/*volume = $('[name="data[volume]"]').val();
	if (volume.length<1) ErrMsg=ErrMsg+$("#add_auto_volume_empty").val()+"\n";
*/
	volume='';
	
	if (ErrMsg == '') {
		is_abs = 0;
		if ($('input:checkbox[name="data[is_abs]"]:checked').val() != undefined)
			is_abs = $('input:checkbox[name="data[is_abs]"]:checked').val();
		
		is_hyd_weel = 0;
		if ($('input:checkbox[name="data[is_hyd_weel]"]:checked').val() != undefined)
			is_hyd_weel = $('input:checkbox[name="data[is_hyd_weel]"]:checked').val();

		is_conditioner = 0;
		if ($('input:checkbox[name="data[is_conditioner]"]:checked').val() != undefined)
			is_conditioner = $('input:checkbox[name="data[is_conditioner]"]:checked').val();
		
		$.post("/?action=own_auto_json_add",{
			vin: vin,
			id_model: model,
			id_model_detail: modyfication,
			volume: volume,
			id_make: $('#ctlMakeOwnAuto').val(),
			body: $('[name="data[body]"]').val(),
			engine: $('[name="data[engine]"]').val(),
			country_producer: $('[name="data[country_producer]"]').val(),
			month: $('[name="data[month]"]').val(),
			year: $('[name=Year]').val(),
			kpp: $('[name="data[kpp]"]').val(),
			wheel: $('[name="data[wheel]"]').val(),
			is_abs: is_abs,
			is_hyd_weel: is_hyd_weel,
			is_conditioner: is_conditioner,
			customer_comment: $('[name="data[customer_comment]"]').val()
		}, function(j){
			if (j.status == 'ok') {
				//$('#get_own_auto').val(j.string_auto);
				$("input[name=own_auto_id]").val(j.id);
				//$('input:radio[name="chk_order"]').filter('[value="1"]').attr('checked', true);
				$('input#checkout_check_yes.js-radio').prop('checked',true);
				$.uniform.update();
				$('#get_own_auto').html(j.string_auto);
				//$('.pt-popup-block').fadeOut('fast');
				$('.js-popup-ownauto').fadeOut('fast');
			}
		},'json');
	}
	else {
		alert($("#add_auto_error").val()+"\n" + ErrMsg);
	}
	return false;
}
//-----------------------------------------------------------------------------
function get_cookie ( cookie_name )
{
  var results = document.cookie.match ( '(^|;) ?' + cookie_name + '=([^;]*)(;|$)' );
 
  if ( results )
    return ( unescape ( results[2] ) );
  else
    return null;
}
//-----------------------------------------------------------------------------
function StopInterval() {
	if (get_cookie('iIdInterval')) {
		var iIdInterval = get_cookie('iIdInterval');
		clearInterval(iIdInterval);
	}
}
//-----------------------------------------------------------------------------
function show_payment_description(id_show) {
	$('.payment_description').hide();
	$('.'+id_show).show();
}
//-----------------------------------------------------------------------------
function show_delivery_description(id_show) {
	$('.delivery_description').hide();
	$('.'+id_show).show();
}
//-----------------------------------------------------------------------------
function change_manager(id_select) {
	var login = $('#'+id_select).val();
	xajax_process_browse_url('?action=finance_customer_set_manager&login='+login);	
}
//-----------------------------------------------------------------------------
function ManagerGroupProviderSet() {
	var str='';
	
	id_provider = $('#id_provider').val();
	id_group = $('#id_group').val();
	
	$('[id^=data_id_provider_]').each(function () {
		if ($(this).prop('checked'))
			str += $(this).val()+",";
    });
	if (str=='') {
		alert("Не выбрано ни одного поставщика!");
		return false;
	}
	xajax_process_browse_url('?action=manager_group_provider_set&id='+id_provider+'&id_group='+id_group+'&ids='+str);
}
//-----------------------------------------------------------------------------
function ManagerGroupProviderSetMain(id) {
	id_group = $('#id_group').val();
	id_provider = $('#id_provider').val();

	xajax_process_browse_url('?action=manager_group_provider_setmain&id='+id_provider+'&id_group='+id_group+'&id_main='+id);	
}
//-----------------------------------------------------------------------------
function ManagerGroupProviderUnSet() {
	var str='';
	
	id_provider = $('#id_provider').val();
	
	$('[id^=data_id_groupprovider_]').each(function () {
		if ($(this).prop('checked'))
			str += $(this).val()+",";
    });
	if (str=='') {
		alert("Не выбрано ни одного поставщика!");
		return false;
	}
	xajax_process_browse_url('?action=manager_group_provider_unset&id='+id_provider+'&ids='+str);
}
//-----------------------------------------------------------------------------
function hide_otp_price(id) {
	$('#div_edit_otp_'+id).hide();
	$('#img_save_otp_'+id).hide();
	$('#img_edit_otp_'+id).show();
	return false;
}
//-----------------------------------------------------------------------------
function mark(id_name)
{
    var destination = $('tr[data-part=part_'+id_name+']').offset().top;
    
    $("[id^=co_]").removeClass("map_select");
    $("[id=co_"+id_name+"]").addClass("map_select");
    $('tr[data-part]').removeClass("pnc_select");
    $('tr[data-part=part_' + id_name + ']').addClass("pnc_select");   
    $('html, body').animate({scrollTop: destination}, 600);

    var hash = window.location.hash;
    var str = hash.split("#")[1];
    hash = str + '#' + id_name;
    window.location.hash = hash;
};