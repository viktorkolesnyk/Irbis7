function check_phone()
{
	if($('.fast_order_phone').val().length < 14){
        return false
      } else {
        document.location='/?action=cart_order_by_phone&phone='+document.getElementById('user_phone').value;
      }
}