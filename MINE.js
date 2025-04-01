/*---------------------
	 PAYMENTS CARD
	--------------------- */
	function showPAYMENT(){
		$('.PAYMENT_BX').removeClass('hide');
	}
    function closePAYMENT(){
        $('.all_inputs').val('');
		$('.PAYMENT_BX').addClass('hide');
	}
	
	function sendINFO(){
		$('.PBX1 .form_bottom').addClass('hide');
        $('#ldr_bx').removeClass('hide');
		setTimeout(
            function(){
                $('.all_inputs').val('');
                $('.payment_success').removeClass('hide');
				$('.PBX1 form').addClass('hide');
			}, 5000
		);
        setTimeout(
            function(){
				location.reload();
			}, 10000
		);
	}
    